# Python Interpreter Simulator

A React component that simulates a simplified Python interactive interpreter (REPL). This component allows users to experiment with basic Python commands and see their output in a terminal-like interface.

## Features

- Simulates the Python REPL environment
- Supports basic Python commands like `print()`, arithmetic operations, and `import this`
- Provides help, copyright, credits, and license information
- Terminal-like interface with command history

## Usage

```jsx
import { PythonInterpreter } from '@/components/projects/python-interpreter';

function MyComponent() {
  return (
    <div>
      <h1>Try the Python Interpreter</h1>
      <PythonInterpreter />
    </div>
  );
}
```

## Supported Commands

- `help` - Display help information
- `copyright` - Show Python copyright information
- `credits` - Display credits
- `license` - Show license information
- `import this` - Display the Zen of Python
- `print("Hello World")` - Print text or evaluate expressions
- Basic arithmetic (e.g., `2 + 2`, `10 * 5`, etc.)

## Implementation Details

This component is a simplified simulation of the Python interpreter and does not execute actual Python code. It uses JavaScript to simulate the behavior of basic Python commands for educational purposes.