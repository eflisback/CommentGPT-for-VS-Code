// The module 'vscode' contains the VS Code extensibility API
import * as vscode from "vscode";

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
  let commentFileDisplosable = vscode.commands.registerCommand(
    "commentgpt-for-vs-code.commentFileWithGPT",
    () => {
      // vscode.window.showInformationMessage("Ah yes, commenting file");
      const editor = vscode.window.activeTextEditor;

      if (editor) {
        let document = editor.document;
        const documentText = document.getText();
        vscode.window.showInformationMessage(documentText);
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

// This method is called when your extension is deactivated
export function deactivate() {}
