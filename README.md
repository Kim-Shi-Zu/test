# Python E-Learning Web App with Real-World Projects

A full-stack educational web application for learning Python through real-world projects.

## Project Overview

This application provides a structured curriculum for learning Python, with each lesson paired with a real-world mini-project. The curriculum is organized into core modules covering topics from introduction to advanced concepts, culminating in a full-stack capstone project.

## Features

- User authentication
- Course catalog
- Interactive lesson pages
- References section mirroring docs.python.org
- Admin panel
- Real-world projects for each lesson

## Tech Stack

- **Frontend**: React + Next.js with shadcn/ui components
- **Backend**: RESTful API (Node.js/Express or Django + DRF)
- **Styling**: Tailwind CSS

## Project Structure

- `/components/projects/<project_slug>/` - All real-world projects
- `/content/module<n>/` - Lesson content in Markdown format
- `/pages/` - Next.js pages
- `/styles/` - Global CSS styles

## Typography & Markdown UI

This project uses a consistent, accessible typography system for all lesson and project content:

- **Headings**: Clear hierarchy using H1–H3, styled for readability and contrast.
- **Paragraphs & Lists**: Comfortable line height, spacing, and list markers for easy reading.
- **Code Blocks**: Monospaced font, background highlight, and optional syntax highlighting for Python and shell code.
- **Blockquotes & Callouts**: Distinct styling for notes, tips, and warnings in markdown.
- **Tables**: Responsive, with clear borders and alternating row backgrounds.
- **Links**: Underlined and color-differentiated, with hover/focus effects.
- **Images**: Rounded corners, optional captions, and responsive sizing.

All markdown content is rendered using custom React components (see `/components/ui/typography.tsx`) to ensure a unified look and feel across the app. This makes lessons, quizzes, and project walkthroughs visually consistent and accessible on all devices.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd python-elearning-web-app
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Module Structure

Each module contains multiple lessons, and each lesson is paired with a real-world project. The projects are located in the `/components/projects/<project_slug>/` directory.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.