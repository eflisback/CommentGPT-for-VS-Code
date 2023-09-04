# CommentGPT for Visual Studio Code

CommentGPT is a Visual Studio Code extension that leverages OpenAI's Chat Completion API to simplify and streamline the process of adding comments to your code. With CommentGPT, you can automatically generate comments for your code files or specific code selections, making it easier to document your code and improve its readability.

## Features

### Automatic Code Commenting

CommentGPT currently offers two main commands to facilitate code commenting:

1. **Comment File with GPT**: This command allows you to generate comments for an entire code file with just a few clicks. It analyzes the code and provides context-aware comments to help explain the functionality and purpose of the code.

<!--    ![Comment File with GPT](images/comment-file.gif)
 -->

2. **Comment Selection with GPT**: This command enables you to generate comments for a selected portion of your code. It's perfect for documenting specific code blocks or functions within your file.

<!--    ![Comment Selection with GPT](images/comment-selection.gif)
 -->

### Easy Setup

To use CommentGPT, all you need is an API key from OpenAI. Simply sign up for an OpenAI account, obtain your API key, and configure it within the extension's settings. Detailed instructions for obtaining and configuring your API key can be found in the "Getting Started" section below.

## Requirements

Before you get started with CommentGPT, ensure you have the following requirements in place:

1. **Visual Studio Code**: CommentGPT is an extension for Visual Studio Code, so make sure you have the editor installed on your system.

2. **OpenAI API Key**: You will need an API key from OpenAI to use this extension. If you don't have one, follow the steps below to obtain your API key.

## Getting Started

1. **Install CommentGPT Extension**: If you haven't already, install the CommentGPT extension from the Visual Studio Code Marketplace.

2. **Obtain an OpenAI API Key**:

   - Visit the OpenAI website at [https://openai.com](https://openai.com).
   - Sign up for an account or log in if you already have one.
   - Navigate to your account settings and find your API key.
   - Copy your API key.

3. **Configure CommentGPT with your API Key**:

   - In Visual Studio Code, go to "File" > "Preferences" > "Settings" or use the shortcut `Ctrl + ,`.
   - Search for "CommentGPT" in the settings search bar.
   - Find the "Commentgpt: Api Key" setting and paste your OpenAI API key there.

4. **Save your Settings**: Make sure to save your settings by clicking the "Save" button in the top right corner of the settings window.

## Usage

Once you've configured CommentGPT with your API key, you can start using it to automatically generate code comments. Simply open a code file in Visual Studio Code, select a portion of code or the entire file, and use the "Comment File with GPT" or "Comment Selection with GPT" commands from the command palette.

## Feedback and Support

If you encounter any issues or have suggestions for improvements, please [submit an issue on GitHub](https://github.com/eflisback/CommentGPT-for-VS-Code/issues). We appreciate your feedback!

Happy coding with CommentGPT!
