import * as vscode from "vscode";
import { OpenAI } from "openai";

export async function commentFile(editor: vscode.TextEditor, apiKey: string) {
  const openai = new OpenAI({
    apiKey: apiKey,
  });

  const document = editor.document;

  if (document.getText()!.trim() === "") {
    vscode.window.showErrorMessage("File is empty.");
    return;
  }

  const gptWarningResponse = "!@£$";
  const prompt = `${document.getText()}\n\nAdd appropriate comments to above code. Respond with the commented code without any code block formatting. If you for any reason can't add comments to this code, respond with "${gptWarningResponse}" followed by the reason why.`;

  vscode.window.showInformationMessage("Attempting to generate comments...");

  let response: string = "";
  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });
    if (chatCompletion.choices[0].message.content) {
      response = chatCompletion.choices[0].message.content;
    }
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      vscode.window.showErrorMessage(error.message);
    } else {
      console.error(error);
    }
    return;
  }

  if (response.startsWith(gptWarningResponse)) {
    vscode.window.showErrorMessage(response.slice(gptWarningResponse.length));
    return;
  }

  const edit = new vscode.WorkspaceEdit();
  edit.replace(
    document.uri,
    new vscode.Range(0, 0, document.lineCount, 0),
    response
  );
  await vscode.workspace.applyEdit(edit);
  vscode.window.showInformationMessage("File commented and updated!");
}
