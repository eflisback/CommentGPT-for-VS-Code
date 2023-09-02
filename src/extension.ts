import * as vscode from "vscode";
import { OpenAI } from "openai";

async function commentFile(editor: vscode.TextEditor, apiKey: string) {
  const openai = new OpenAI({
    apiKey: apiKey,
  });

  const document = editor.document;

  const gptWarningResponse = "!@£$";
  const prompt = `Add appropriate comments to the following code. Respond with the commented code without any code block formatting.\n\n${document.getText()}\n\n If you for any reason can't add comments to this code, respond with "${gptWarningResponse}" followed by the reason why.`;

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

export async function activate(context: vscode.ExtensionContext) {
  let commentFileDisplosable = vscode.commands.registerCommand(
    "commentgpt-for-vs-code.commentFileWithGPT",
    async () => {
      let apiKey = context.globalState.get<string>("openai.apiKey");

      if (!apiKey) {
        apiKey = await vscode.window.showInputBox({
          prompt: "Enter your OpenAI API key",
          ignoreFocusOut: true,
        });

        if (apiKey) {
          await context.globalState.update("openai.apiKey", apiKey);
        } else {
          vscode.window.showErrorMessage(
            "API key is required for this extension."
          );
          return;
        }
      }

      const editor = vscode.window.activeTextEditor;

      if (editor) {
        await commentFile(editor, apiKey);
      } else {
        vscode.window.showErrorMessage("Open a file to add comments.");
      }
    }
  );

  let disposable = vscode.commands.registerCommand(
    "commentgpt-for-vs-code.helloWorld",
    () => {
      vscode.window.showInformationMessage(
        "Hello World from CommentGPT for VS Code!"
      );
    }
  );

  context.subscriptions.push(commentFileDisplosable, disposable);
}

export function deactivate() {}
