---
title: "Running Python Scripts"
module_number: 1
lesson_number: 1.5
estimated_time_minutes: 20
source_doc_refs:
  - "python-3.13-docs/tutorial/interpreter.html"
  - "python-3.13-docs/library/sys.html"
  - "python-3.13-docs/library/argparse.html"
project:
  name: "File Processor CLI"
  slug: "file-processor-cli"
  folder: "components/projects/file-processor-cli"
---

# Running Python Scripts

## Key Topics
- Script execution methods
- Shebang lines and file permissions
- Command-line arguments
- Basic input/output operations

## Learning Objectives
- Create and execute Python scripts
- Make scripts executable on different platforms
- Process command-line arguments in scripts
- Implement basic input/output operations

## Introduction
Python scripts are files containing Python code that can be executed by the Python interpreter. You can run scripts from the command line, pass arguments, and handle input/output.

### Script Execution Methods
- Run a script: `python script.py`
- Add a shebang line (`#!/usr/bin/env python3`) at the top of your script to make it executable on Unix-like systems.
- Make the script executable: `chmod +x script.py`

### Command-Line Arguments
Use the `sys` and `argparse` modules to handle arguments:

```python
# script.py
import sys
print("Arguments:", sys.argv)
```

For more advanced parsing:

```python
import argparse
parser = argparse.ArgumentParser(description='Process files')
parser.add_argument('--input', help='Input file path')
parser.add_argument('--output', help='Output directory')
args = parser.parse_args()
print(f"Processing {args.input} → {args.output}")
```

### Input/Output Operations
Read from files, write to files, and use `input()` for user input:

```python
filename = input("Enter filename: ")
with open(filename) as f:
    print(f.read())
```

## Project Demo: File Processor CLI
See the interactive demo for parsing command-line arguments and simulating file processing.