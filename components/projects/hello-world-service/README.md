# Hello World Service

A simple React component that demonstrates basic Python concepts from Lesson 1.1: "What is Python?"

## Overview

This project provides a simple interactive demonstration of Python's "Hello World" functionality. It showcases:

- Basic Python syntax
- The simplicity of Python code
- A reference to the Zen of Python
- **Interactive walkthrough steps** for students to follow
- **Quiz integration** for lesson assessment

## Setup

### Prerequisites

- Node.js and npm installed
- Next.js project with shadcn/ui components

### Installation

This component is part of the Python E-Learning Web App. It's automatically included when you clone the main repository.

```bash
# No separate installation needed if you've already set up the main project
```

## Usage

### Importing the Component

```jsx
import { HelloWorldService } from '@/components/projects/hello-world-service';

// Then in your JSX:
<HelloWorldService />
```

### Features

- Displays a simple "Hello, World!" message
- Includes a button to simulate running Python code
- Shows equivalent Python syntax
- **Accessible Run Example button** (with aria-label)
- **Supports lesson walkthrough and quiz**

## Interactive Walkthrough

1. View the Hello World Service card in your browser.
2. Observe the default message: 'Hello, World!'.
3. Review the Python code sample shown.
4. Click 'Run Example' to simulate running Python code and see the message update.
5. Relate this to running 'python hello.py' in a real Python environment.

## Quiz Example

- Who created Python and in what year was it first released?
- Which of the following is NOT a characteristic of Python?
- Which Zen of Python principle is correct?

## Development

### Project Structure

```
hello-world-service/
├── HelloWorldService.tsx  # Main component
├── index.ts              # Exports
├── README.md             # This file
└── tests/                # Test files
```

### TODOs

- [ ] Implement actual Python code execution or simulation
- [ ] Add more interactive examples of Python's simplicity
- [ ] Create comprehensive tests

## Related Lesson

This project is tied to Lesson 1.1: "What is Python?" which covers:
- History and philosophy of Python
- Key characteristics and advantages
- The Zen of Python
- Python's role in modern software development
- **Interactive walkthrough and quiz**