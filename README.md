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

## Getting Started

To get started with CommentGPT, follow these simple steps:

1. **Install CommentGPT Extension**: If you haven't already, install the CommentGPT extension from the Visual Studio Code Marketplace.

2. **Obtain an OpenAI API Key**: To use CommentGPT, you will need an API key from OpenAI. If you don't have one, you can [get started with OpenAI's API here](https://openai.com/blog/openai-api). You do not need to enter the API key into the extension settings beforehand.

3. **Run a Comment Command**: Open a code file in Visual Studio Code, select a portion of code or the entire file, and use either the "Comment File with GPT" or "Comment Selection with GPT" command from the command palette.

4. **Enter Your OpenAI API Key**: If you haven't already entered your OpenAI API key in a previous session, CommentGPT will prompt you to input your API key. Simply follow the on-screen instructions to provide your key.

   **NOTE:** Your OpenAI API key will be securely stored locally in the extension's global state and will only be used for generating code comments within Visual Studio Code. It will not be shared or transmitted elsewhere.

5. **Generate Comments**: After entering your API key, CommentGPT will analyze your code and generate comments based on the selected code or file. The generated comments will be inserted directly into your code.

## Usage

Once you've configured CommentGPT with your API key, you can quickly generate code comments whenever needed. The extension ensures a seamless experience by prompting you for your API key only when necessary.

## Feedback and Support

If you encounter any issues or have suggestions for improvements, please [submit an issue on GitHub](https://github.com/eflisback/CommentGPT-for-VS-Code/issues). We appreciate your feedback!

Happy coding with CommentGPT!
