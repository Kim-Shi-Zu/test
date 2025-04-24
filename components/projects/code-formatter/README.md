# Code Formatter

A simple Python code formatter that helps users format their Python code according to basic PEP 8 style guidelines. This tool demonstrates how code editors and IDEs provide formatting capabilities to improve code readability and maintainability.

## Features

- Format Python code with proper spacing around operators
- Adjust indentation to follow PEP 8 guidelines
- Simple and intuitive user interface
- Real-time formatting preview

## Usage

1. Enter your Python code in the input textarea
2. Click the "Format Code" button
3. View the formatted code in the output area

## Implementation Details

This component uses React with TypeScript and implements a simplified version of Python code formatting. It demonstrates:

- Regular expressions for basic code formatting
- State management in React
- Error handling for invalid inputs
- UI components from shadcn/ui

## Limitations

This is a teaching tool with simplified formatting logic. For production use, consider using established Python formatters like:

- Black
- YAPF
- autopep8

## Future Enhancements

- Support for more complex formatting rules
- Syntax highlighting in the code editor
- Option to configure formatting rules
- Integration with actual Python formatting libraries