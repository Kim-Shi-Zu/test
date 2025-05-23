# CODE_GEN_PROMPT_LESSON_2_1.md

## Detailed Code Generation Prompt for Lesson 2.1: Networking Fundamentals

Using the **SYSTEM_PROMPT.md** context, **user_prompt.md** please produce **Python code** and associated artifacts for **Lesson 2.1: Networking Fundamentals** as follows:

1. **Module & Lesson Context**  
   - Module: `Module 2: Intermediate to Advanced Networking with Python`  
   - Lesson: `Lesson 2.1: Networking Fundamentals`

2. **Project Scaffold**  
   - `project_name`: Network Topology Explorer  
   - `project_slug`: network-topology-explorer  
   - `project_folder`: components/projects/network-topology-explorer

3. **Code Requirements**  
   - Implement a **CLI tool** named `nettopo` using `argparse`:  
     - Subcommands: `list`, `describe <topology>`, `render <topology>`  
     - `--help` flag for all commands (auto-generated by `argparse`)  
   - **Data models** for topologies (`Star`, `Bus`, `Ring`, `Mesh`):  
     - Use `dataclasses` with type hints  
     - Each model has attributes: `name: str`, `nodes: int`, `edges: List[Tuple[int, int]]`
   - **Rendering**:  
     - ASCII-based diagram in the console for each topology  
     - Simple algorithm: position nodes evenly in a circle (for `Ring`, `Mesh`), line up for `Bus`, central hub for `Star`
   
4. **Documentation**  
   - **Docstrings**: Google style for all functions and classes  
   - **README.md** in `project_folder`:  
     - Purpose, installation (`pip install .`), usage examples, and license (MIT)

5. **References**  
   - Python built-in modules: `argparse` (`python-3.13-docs/library/argparse.html`), `dataclasses` (`python-3.13-docs/library/dataclasses.html`)  
   - Type hints (`python-3.13-docs/library/typing.html`)

6. **Testing**  
   - Unit tests in `tests/test_nettopo.py` using `pytest`:  
     - Test each subcommand output  
     - Verify data model instantiation and ASCII rendering correctness

7. **Quality & Style**  
   - Follow **PEP 8** (4-space indent, max 79 chars)  
   - Imports ordered: stdlib, third-party, local  
   - All code files include license header and module docstring

8. **Output Format**  
   - Provide a **compressed archive** scaffold (if possible) or a directory tree listing  
   - Show code snippets for `cli.py`, `models.py`, `renderer.py`, and `README.md`


*End of CODE_GEN_PROMPT_LESSON_2_1.md*

