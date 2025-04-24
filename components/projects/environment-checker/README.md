# Environment Checker

## Overview
The Environment Checker is a React component that demonstrates Python environment setup concepts from Lesson 1.2. It simulates checking a Python environment and displaying information about the Python version, virtual environment, installed packages, and operating system.

## Features
- Displays Python version information
- Shows virtual environment details
- Lists installed packages
- Simulates environment checking functionality

## Usage
```jsx
import { EnvironmentChecker } from '@/components/projects/environment-checker';

function MyComponent() {
  return (
    <div>
      <h1>Python Environment Setup</h1>
      <EnvironmentChecker />
    </div>
  );
}
```

## Implementation Details
This component demonstrates concepts related to:
- Python installation
- Virtual environment setup
- Package management with pip
- Environment configuration

## Testing
Tests are available in the `tests` directory and can be run with your testing framework of choice.

```bash
npm test -- -t "EnvironmentChecker"
```

## Related Lesson

This project is tied to Lesson 1.2: "Installing Python and Setting Up Your Environment" which covers:
- Python installation on different operating systems
- Python version management
- Virtual environments
- Package managers (pip)