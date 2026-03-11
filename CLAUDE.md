# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About

A static Python teaching website deployed on **GitHub Pages** (from the `docs/` folder) for teaching kids to code in Python.

The site has **three sections**: Lectures, Useful Resources, and Homework.

## Site Structure

No build step — all pages are plain HTML files. Lectures and homework each live in their own subdirectory.

```
docs/
  index.html              ← homepage
  resources.html          ← curated learning links
  style.css               ← shared dark-theme CSS
  lectures/
    lecture_1.html        ← Lecture 1: Variables & Data Types
    lecture_2.html        ← Lecture 2: If-Else Conditions
    lecture_3.html        ← Lecture 3: Cycles (Loops)
  homework/
    homework_1.html
    homework_2.html
    homework_3.html
```

## Navigation

The nav uses **CSS-only dropdowns** (no JS). There are two dropdown menus: Lectures and Homework.

- Use `<div class="dropdown">` wrapping a `<span class="dropdown-toggle">` and a `<div class="dropdown-menu">`.
- Add `class="active"` to the current page's link inside the dropdown menu.
- Relative paths differ by folder depth — pages in `lectures/` or `homework/` use `../` to reach the root.

Copy the nav from an existing page in the same folder when creating a new page.

## Lecture Structure

Each lecture page must contain:
1. A short introduction paragraph
2. Numbered `<h2>` sections explaining concepts with `<pre><code class="language-python">` examples
3. At least one `<div class="tip">` with a helpful reminder
4. A **Tasks section** (`<div class="tasks">`) with exactly 5 tasks (`<div class="task">`)
   - Tasks 1–4: each must have **1–2 collapsible hints** using `<details class="hint">`
   - Task 5 (⭐ challenge): **no hints**

## Homework Structure

Homework pages contain only tasks (no explanation sections). Tasks should be harder than lecture tasks and combine concepts from that lecture plus previous ones.

- Tasks 1–4: each must have **1–2 collapsible hints** using `<details class="hint">`
- Task 5 (⭐ challenge): **no hints**

## Hint Markup

```html
<details class="hint">
  <summary>💡 Hint</summary>
  <div class="hint-body">Use <code>int()</code> to convert the string to a number.</div>
</details>
```

For two hints, use two separate `<details>` with `💡 Hint 1` and `💡 Hint 2`.

## Syntax Highlighting

Uses **Prism.js** from CDN (`prism-tomorrow` theme). Add these two `<script>` tags at the bottom of any page with code blocks:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js"></script>
```

Wrap code with `<pre><code class="language-python">`.

## Adding New Content

- **New lecture:** create `docs/lectures/lecture_N.html`, add it to the dropdown in all existing pages.
- **New homework:** create `docs/homework/homework_N.html`, add it to the dropdown in all existing pages.
- **New resource:** add a `<div class="resource">` block to `docs/resources.html`.
- **Shared styles:** edit `docs/style.css`.
