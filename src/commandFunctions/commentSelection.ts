import * as vscode from "vscode";
import { OpenAI } from "openai";

export async function commentSelection(
  editor: vscode.TextEditor,
  apiKey: string
) {
  const openai = new OpenAI({ apiKey });

  const selection = editor.selection;
  let highlighted: string;
  let selectionRange: vscode.Range;

  if (selection && !selection.isEmpty) {
    selectionRange = new vscode.Range(
      selection.start.line,
      selection.start.character,
      selection.end.line,
      selection.end.character
    );
    highlighted = editor.document.getText(selectionRange);
  }

  if (highlighted!.trim() === "") {
    vscode.window.showErrorMessage("Selection is empty.");
    return;
  }

  const gptWarningResponse = "!@£$";
  const prompt = `Add appropriate comments to the following code. Respond with the commented code without any code block formatting.\n\n${highlighted!}\n\n If you for any reason can't add comments to this code, respond with "${gptWarningResponse}" followed by the reason why.`;

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

  editor.edit((editBuilder) => {
    editBuilder.replace(selectionRange, response);
  });

  vscode.window.showInformationMessage("Selection commented and updated!");
}
