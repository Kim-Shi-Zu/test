Good documentation is the backbone of any technical course—it aligns expectations, clarifies concepts, and makes code approachable for learners citeturn0search12turn0news68. Writing the README first acts as a mission statement that guides development and communicates purpose before a single line of code is written citeturn0news68turn0search5. Markdown best practices—such as limiting heading levels, using lists for complex information, and maintaining a minimal viable corpus—ensure your docs are both readable and maintainable citeturn0search0turn0search7. Consistency with the Google Developer Documentation Style Guide brings clarity and uniformity to prose and formatting citeturn0search1, while GitHub’s style conventions for alerts and code blocks help convey warnings, tips, and notes effectively citeturn0search2. In-code docstrings following the Google Python style enable automated API reference generation via Sphinx/Napoleon citeturn0search10turn0search3. Lesson-level Markdown should be structured into Overview, Objectives, Key Concepts, Examples, Exercises, and References, providing a clear learning pathway citeturn0search16. Finally, always link to official Python 3.13 documentation (paths under `python-3.13-docs/`) for any standard library APIs you use citeturn0search6turn0search20.

## Documentation Prompt: Lesson 2.1 – Networking Fundamentals

> **Using `SYSTEM_PROMPT.md` and `CODE_GEN_PROMPT_LESSON_2_1.md` contexts, please generate all required documentation artifacts for _Lesson 2.1: Networking Fundamentals_.**  
>  
> **1. Lesson Markdown (`lesson_2_1.md`):**  
> - Title and a brief introduction situating learners in Module 2.  
> - **Overview** section summarizing networking building blocks.  
> - **Learning Objectives** (3–5 bullet points).  
> - **Key Concepts** broken into sub-sections for Devices, Topologies, and Protocol Models.  
> - **Examples**: short Python snippets illustrating topology definitions or simple socket instantiation.  
> - **Exercises**: 2–3 hands-on tasks (e.g., “List and describe three real-world networks,” “Map OSI to TCP/IP layers”).  
> - **References**: hyperlinks to `python-3.13-docs/` paths (e.g., `library/socket.html`).  

> **2. Project README (`components/projects/network-topology-explorer/README.md`):**  
> - Project purpose, prerequisites (Python 3.13, virtualenv).  
> - Installation steps (`pip install .`, activating venv).  
> - Usage examples for each CLI subcommand (`list`, `describe`, `render`) with sample outputs.  
> - Link back to Lesson 2.1 in course curriculum.  
> - License (MIT) and contribution guidelines stub.  

> **3. In-Code Docstrings:**  
> - Every public class and function in `cli.py`, `models.py`, and `renderer.py` must use Google-style docstrings.  
> - Include `Args`, `Returns`, and `Raises` sections where relevant.  

> **4. CLI Help Excerpt:**  
> - Capture the output of `nettopo --help` showing auto-generated usage, subcommands, and options.  

> **5. Optional Sphinx Configuration Snippet:**  
> - Add an `.. toctree::` entry for `lesson_2_1.md` in the course’s `index.rst` (if using Sphinx).  

> **Formatting & Style Requirements:**  
> - Markdown: at most three heading levels; use lists and code fences consistently citeturn0search8.  
> - Alerts: use GitHub alert blocks for Notes/Tips (e.g., `> [!TIP]`). citeturn0search2  
> - Docstrings: Google style, UTF-8 encoding header if needed. citeturn0search10  
> - Link API references to `python-3.13-docs/` for every standard-library feature documented. citeturn0search6  

> **Output Format:**  
> - Provide a directory tree listing of `components/projects/network-topology-explorer/` showing all files.  
> - Embed example snippets inline in the response, including `README.md` and `lesson_2_1.md`.  

*End of Documentation Prompt*