---
title: "Python Documentation and Help System"
module_number: 1
lesson_number: 1.6
estimated_time_minutes: 18
source_doc_refs:
  - "python-3.13-docs/tutorial/introduction.html"
  - "python-3.13-docs/library/functions.html#help"
  - "python-3.13-docs/library/pydoc.html"
project:
  name: "Documentation Generator"
  slug: "documentation-generator"
  folder: "components/projects/documentation-generator"
---

# Python Documentation and Help System

Python is a powerful language with extensive documentation and community resources. This lesson will introduce you to the built-in help system, docstrings, and how to find and use official and community documentation effectively.


## Key Topics

- Using Python's built-in help system
- Docstrings and documentation conventions
- Finding and using official documentation
- Community resources and best practices

## Learning Objectives

- Access and navigate Python's built-in help system
- Read and write effective docstrings
- Find information in the official Python documentation
- Utilize community resources for learning and problem-solving

## Introduction

Python provides extensive documentation and built-in tools to help you understand and use the language effectively. Learning to use these resources is essential for productive development.

### Using the Built-in Help System

- Python includes a built-in help system that provides information about modules, functions, classes, and more.
- You can access help in several ways:
- Use the `help()` function to get information about objects, modules, and functions:

```python
help(str)
help(len)
help("modules")
```

- In the interactive interpreter, type `help()` to enter the help utility.
- You can also use the `dir()` function to list the attributes and methods of an object:

```python
dir(str)
```

### Docstrings and Documentation Conventions

- Docstrings are a way to document your code. They are written as the first statement in a module, class, or function and are enclosed in triple quotes.
- Use descriptive docstrings to explain what your code does. Tools like `help()` and `pydoc` display these docstrings.

```python
def greet(name):
    """Return a greeting message."""
    return f"Hello, {name}!"
```

### Official Documentation and Community Resources
- The official Python documentation is available at https://docs.python.org/3/
- Use the search feature or browse the Library Reference for details on modules and functions.
- Community resources include Stack Overflow, Real Python, and the Python Discord server.

### Using pydoc
- The `pydoc` module generates documentation from Python modules and displays it in a web browser or the console.
- You can generate HTML documentation for a module or class:

```bash
- The `pydoc` tool generates and displays documentation from docstrings:

```bash
pydoc str
pydoc greet
```

## Project Demo: Documentation Generator

See the interactive project for generating and viewing documentation from your own code.
