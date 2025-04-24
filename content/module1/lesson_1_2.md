---
title: "Installing Python and Setting Up Your Environment"
module_number: 1
lesson_number: 1.2
estimated_time_minutes: 20
source_doc_refs:
  - "python-3.13-docs/tutorial/interpreter.html"
  - "python-3.13-docs/library/venv.html"
project:
  name: "Environment Checker"
  slug: "environment-checker"
  folder: "components/projects/environment-checker"
---

# Installing Python and Setting Up Your Environment

## Introduction

Before you can start writing Python code, you need to set up your development environment. This lesson will guide you through installing Python, setting up virtual environments, and managing packages with pip.

## Installing Python

Python can be installed on various operating systems. The installation process differs slightly depending on your platform.

### Windows

1. Visit the official Python website (python.org)
2. Download the latest Python installer for Windows
3. Run the installer, making sure to check "Add Python to PATH"
4. Verify the installation by opening Command Prompt and typing:
   ```python
   python --version
   ```

### macOS

1. Many macOS versions come with Python pre-installed
2. For the latest version, use Homebrew:
   ```bash
   brew install python
   ```
3. Verify the installation:
   ```bash
   python3 --version
   ```

### Linux

1. Most Linux distributions come with Python pre-installed
2. To install the latest version on Ubuntu/Debian:
   ```bash
   sudo apt update
   sudo apt install python3 python3-pip
   ```
3. Verify the installation:
   ```bash
   python3 --version
   ```

## Python Version Management

It's often necessary to work with different Python versions for different projects. Tools like `pyenv` help manage multiple Python versions on the same system.

```bash
# Install pyenv (on macOS/Linux)
brew install pyenv  # macOS

# Install a specific Python version
pyenv install 3.13.0

# Set a global Python version
pyenv global 3.13.0
```

## Virtual Environments

Virtual environments allow you to create isolated Python environments for your projects, preventing package conflicts.

### Using venv (built-in)

```python
# Create a virtual environment
python -m venv myenv

# Activate the virtual environment
# On Windows
myenv\Scripts\activate

# On macOS/Linux
source myenv/bin/activate

# Deactivate when done
deactivate
```

## Package Management with pip

Pip is Python's package installer, allowing you to install and manage additional libraries.

```python
# Install a package
pip install requests

# Install a specific version
pip install requests==2.28.1

# List installed packages
pip list

# Generate requirements file
pip freeze > requirements.txt

# Install from requirements file
pip install -r requirements.txt
```

## Setting Up a Productive Environment

A complete Python development environment typically includes:

1. Python interpreter
2. Virtual environment
3. Package manager (pip)
4. Code editor or IDE
5. Version control (Git)

## Summary

In this lesson, you've learned how to:
- Install Python on different operating systems
- Manage multiple Python versions
- Create and use virtual environments
- Install and manage packages with pip
- Set up a complete development environment

These skills form the foundation for all your future Python development work. In the next lesson, we'll explore the Python interpreter and interactive mode in more detail.