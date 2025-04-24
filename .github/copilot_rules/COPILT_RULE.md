# COPILOT_RULE.md

## Purpose

- Define the standardized rules that GitHub Copilot and related AI assistants must follow when generating, reviewing, or modifying code and documentation for the Networking with Python course. ([docs.github.com](https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot?utm_source=chatgpt.com))
- Ensure consistency in formatting, style, and project structure across all lessons and mini‑projects. ([docs.github.com](https://docs.github.com/en/contributing/style-guide-and-content-model/style-guide?utm_source=chatgpt.com))

## File Structure and Naming Conventions

- All code and documentation files must follow `snake_case` naming for files and directories. ([github.com](https://github.com/google/styleguide/blob/gh-pages/docguide/style.md?utm_source=chatgpt.com))
- Project folders reside under `components/projects/`, with slugs matching file names (e.g., `network-topology-explorer`). ([github.com](https://github.com/google/styleguide/blob/gh-pages/docguide/style.md?utm_source=chatgpt.com))
- Markdown documents use `.md` extension and begin with a level‑1 heading matching the file name. ([daringfireball.net](https://daringfireball.net/projects/markdown/syntax?utm_source=chatgpt.com))

## Code Style and Formatting

- Python code must comply with PEP 8 conventions, including 4‑space indents and maximum line length of 79 characters. ([docs.github.com](https://docs.github.com/en/copilot/using-github-copilot/code-review/configuring-coding-guidelines?utm_source=chatgpt.com))
- Use type hints for function signatures and return types to improve readability and maintainability. ([help.openai.com](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api?utm_source=chatgpt.com))
- Import statements should be organized: standard library, third‑party, then local modules, separated by blank lines. ([docs.github.com](https://docs.github.com/en/contributing/style-guide-and-content-model/style-guide?utm_source=chatgpt.com))

## Documentation and Comments

- Every public function and class must include a docstring following the Google style guide. ([developers.google.com](https://developers.google.com/style?utm_source=chatgpt.com))
- Markdown headings should reflect logical structure, using `##` for major sections and `###` for subsections. ([markdownguide.org](https://www.markdownguide.org/basic-syntax/?utm_source=chatgpt.com))
- Emphasize key terms with bold (`**term**`) and use italics (`*example*`) sparingly for clarity. ([developers.google.com](https://developers.google.com/style/text-formatting?utm_source=chatgpt.com))
- Link to official Python 3.13 docs (paths under `python-3.13-docs/`) for API references wherever applicable. ([platform.openai.com](https://platform.openai.com/docs/api-reference/introduction?utm_source=chatgpt.com))

## Dependency and Package Management

- Each mini‑project must include a `requirements.txt` generated via `pip freeze`. ([helpjuice.com](https://helpjuice.com/blog/software-documentation?utm_source=chatgpt.com))
- Use virtual environments (`venv`) to isolate dependencies per project. ([helpjuice.com](https://helpjuice.com/blog/software-documentation?utm_source=chatgpt.com))
- Document installation steps in the project README before usage instructions. ([wired.com](https://www.wired.com/2010/08/write-your-readme-before-your-code?utm_source=chatgpt.com))

## Module Outline Integration

- Lesson outlines must use JSON‑like fields (`lesson_title`, `key_topics`, etc.) for programmatic consumption. ([help.openai.com](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api?utm_source=chatgpt.com))
- Ensure `project_slug` matches the slug in `project_folder` for CI/CD consistency. ([github.com](https://github.com/google/styleguide/blob/gh-pages/docguide/style.md?utm_source=chatgpt.com))

## Project Scaffolding

- All mini‑projects include a `README.md` with project purpose, setup steps, usage examples, and license. ([wired.com](https://www.wired.com/2010/08/write-your-readme-before-your-code?utm_source=chatgpt.com))
- CLI tools should provide a `--help` flag with descriptive usage information via `argparse`. ([dev.to](https://dev.to/soumikdhar/how-to-write-better-cleaner-markdown-the-definitive-guide-3fif?utm_source=chatgpt.com))

## Testing and Validation

- Write unit tests for core functionality using `unittest` or `pytest`, located in a `tests/` directory. ([writethedocs.org](https://www.writethedocs.org/guide/index.html?utm_source=chatgpt.com))
- Ensure code coverage of at least 80% before merging changes. ([docs.github.com](https://docs.github.com/en/contributing/style-guide-and-content-model/style-guide?utm_source=chatgpt.com))

## Contribution Guidelines

- Contributors must open pull requests against the `main` branch and follow the commit message format: `<type>(<scope>): <description>`. ([docs.github.com](https://docs.github.com/en/copilot/using-github-copilot/code-review/configuring-coding-guidelines?utm_source=chatgpt.com))
- All PRs require at least one approving review and passing CI checks. ([docs.github.com](https://docs.github.com/en/contributing/style-guide-and-content-model/style-guide?utm_source=chatgpt.com))

### Prompt Flow: .github/copilot_rules/SYSTEM_PROMPT.md -> .github/copilot_rules/user_prompt.md -> .github/copilot_rules/generation_prompt.md -> .github/copilot_rules/documentation_prompt.md -> .github/copilot_rules/ui_prompt.md
- The **System Prompt** provides the overall context and guidelines for the course.
- The **User Prompt** specifies the lesson outline and mini-project requirements.
- The **Code Generation Prompt** details the code and documentation requirements for the lesson and project.
- The **Documentation Prompt** focuses on generating all required documentation artifacts for the lesson.
- The **UI Prompt** outlines the requirements for rendering the lesson and project components in a React application using shadcn/ui.