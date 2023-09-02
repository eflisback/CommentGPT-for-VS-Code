import * as vscode from "vscode";

// .ts files
import { commentFile } from "./commandFunctions/commentFile";
import { getApiKey } from "./handleStateData/getApiKey";

export async function activate(context: vscode.ExtensionContext) {
  let commentFileDisplosable = vscode.commands.registerCommand(
    "commentgpt-for-vs-code.commentFileWithGPT",
    async () => {
      const apiKey = await getApiKey(context);
      if (apiKey) {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
          await commentFile(editor, apiKey);
        } else {
          vscode.window.showErrorMessage("Open a file to add comments.");
        }
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
