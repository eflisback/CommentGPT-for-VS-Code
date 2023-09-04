import * as vscode from "vscode";

// .ts files
import { commentFile } from "./commandFunctions/commentFile";
import { commentSelection } from "./commandFunctions/commentSelection";
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
          vscode.window.showErrorMessage(
            "Open a file in order to run command."
          );
        }
      }
    }
  );

  let commentSelectionDisplosable = vscode.commands.registerCommand(
    "commentgpt-for-vs-code.commentSelectionWithGPT",
    async () => {
      const apiKey = await getApiKey(context);
      if (apiKey) {
        const editor = vscode.window.activeTextEditor;
        if (editor?.selection && !editor.selection.isEmpty) {
          await commentSelection(editor, apiKey);
        } else {
          vscode.window.showErrorMessage(
            "Select code in order to run command."
          );
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

  context.subscriptions.push(
    commentFileDisplosable,
    commentSelectionDisplosable,
    disposable
  );
}

export function deactivate() {}
