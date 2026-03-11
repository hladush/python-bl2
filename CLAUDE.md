# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About

A static Python teaching website deployed on **GitHub Pages** (from the `docs/` folder) for teaching kids to code in Python.

The site has **three sections**: Lectures, Useful Resources, and Homework.

## Site Structure

All pages live directly in `docs/` as plain HTML files. There is no build step.

| File | Description |
|---|---|
| `docs/index.html` | Homepage with cards linking to all three sections |
| `docs/lecture_1.html` | Lecture 1: Variables & Data Types |
| `docs/lecture_2.html` | Lecture 2: If-Else Conditions |
| `docs/lecture_3.html` | Lecture 3: Cycles (Loops) |
| `docs/resources.html` | Curated list of Python learning resources |
| `docs/homework_1.html` | Homework 1 |
| `docs/homework_2.html` | Homework 2 |
| `docs/homework_3.html` | Homework 3 |
| `docs/style.css` | Shared dark-theme CSS used by all pages |

## Page Conventions

- All pages share the same `<nav>` block — copy it exactly and add `class="active"` to the current page's link.
- Syntax highlighting uses **Prism.js** loaded from CDN (`prism-tomorrow` theme). Add the two `<script>` tags at the bottom of any page with code blocks and wrap code with `<pre><code class="language-python">`.

## Lecture Structure

Each lecture page must contain:
1. A short introduction paragraph
2. Numbered sections (h2) explaining concepts with code examples
3. A **Tasks section** (`<div class="tasks">`) at the bottom with at least 5 tasks (`<div class="task">`)
4. At least one `<div class="tip">` with a helpful reminder

## Homework Structure

Homework pages contain only tasks — no explanation. Tasks should be harder than the lecture tasks and combine multiple concepts. The last task (⭐) should be a challenge task.

## Adding New Content

- **New lecture:** create `docs/lecture_N.html`, add it to the nav in all existing pages.
- **New homework:** create `docs/homework_N.html`, add it to the nav in all existing pages.
- **New resource:** add a `<div class="resource">` block to `docs/resources.html`.
- **Shared styles:** edit `docs/style.css`.
