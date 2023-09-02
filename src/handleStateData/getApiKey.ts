import * as vscode from "vscode";

export async function getApiKey(
  context: vscode.ExtensionContext
): Promise<string | undefined> {
  let apiKey = context.globalState.get<string>("openai.apiKey");

  if (!apiKey) {
    apiKey = await vscode.window.showInputBox({
      prompt: "Enter your OpenAI API key",
      ignoreFocusOut: true,
    });

    if (apiKey) {
      await context.globalState.update("openai.apiKey", apiKey);
    } else {
      vscode.window.showErrorMessage("API key is required for this extension.");
      return undefined;
    }
  }

  return apiKey;
}
