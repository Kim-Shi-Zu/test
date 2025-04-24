---
lesson_title: "What is Python? + Your First Microservice"
key_topics:
  - Why Python is everywhere: From web to AI
  - Python’s design principles (simplicity, readability)
  - The Zen of Python in real apps
learning_objectives:
  - Explain Python’s advantages with real examples
  - Apply the Zen of Python to your first project
doc_refs:
  - "tutorial/appetite.html"
  - "tutorial/introduction.html"
project:
  name: "Hello World Service (FastAPI)"
  slug: "hello-world-service"
  folder: "components/projects/hello-world-service"
realworld_app:
  - Build a simple **FastAPI** server returning "Hello World" in JSON
  - Deploy locally with **uvicorn**
---

# What is Python? + Your First Microservice

Python is everywhere: from powering web apps and APIs to driving AI, automation, and data science. Its design principles—simplicity and readability—make it a favorite for both beginners and professionals.

## Why Python?

- Used by Google, Netflix, NASA, and startups alike
- Great for web, scripting, data, and AI
- Huge ecosystem and community

## The Zen of Python in Real Apps

> "Beautiful is better than ugly. Simple is better than complex. Readability counts."

You’ll see these principles in every real-world Python project.

## Your First Real-World Project: Hello World Service (FastAPI)

Let’s build a microservice using FastAPI, a modern Python web framework.

### Step 1: Service Code (`main.py`)

```python

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello World"}
```

### Step 2: Run Locally with Uvicorn

```bash
uvicorn main:app --reload
```
Visit [http://localhost:8000](http://localhost:8000) to see your JSON response.

---

## Quiz
1. Which Python principle is most important for code readability?
   - A) Performance
   - B) Simplicity
   - C) Obfuscation
   - D) Length
   - **Answer:** B
2. What does FastAPI return by default?
   - A) HTML
   - B) XML
   - C) JSON
   - D) CSV
   - **Answer:** C
3. Which command runs your FastAPI app locally?
   - A) python app.py
   - B) uvicorn main:app --reload
   - C) flask run
   - D) node server.js
   - **Answer:** B

---

## References
- [Whetting Your Appetite](https://docs.python.org/3/tutorial/appetite.html)
- [An Informal Introduction to Python](https://docs.python.org/3/tutorial/introduction.html)