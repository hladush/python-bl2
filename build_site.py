"""
Converts .py lesson files into a static website with syntax highlighting.
Usage: pip install pygments && python build_site.py
"""

import os
import glob
from pygments import highlight
from pygments.lexers import PythonLexer
from pygments.formatters import HtmlFormatter

LESSONS = sorted(glob.glob("[0-9]_*.py"))
OUTPUT_DIR = "docs"

STYLE = HtmlFormatter(style="monokai", linenos=True, cssclass="source").get_style_defs(".source")

NAV_CSS = """
body { font-family: 'Segoe UI', sans-serif; margin: 0; background: #1e1e1e; color: #d4d4d4; }
.container { max-width: 900px; margin: 0 auto; padding: 20px; }
h1 { color: #569cd6; border-bottom: 1px solid #333; padding-bottom: 10px; }
nav { background: #252526; padding: 12px 20px; display: flex; gap: 16px; align-items: center; }
nav a { color: #9cdcfe; text-decoration: none; font-size: 14px; }
nav a:hover { color: #569cd6; text-decoration: underline; }
nav .brand { color: #569cd6; font-weight: bold; font-size: 16px; margin-right: 20px; }
.source { border-radius: 8px; padding: 16px; overflow-x: auto; font-size: 14px; }
.linenodiv pre { color: #555; }
"""

def lesson_title(filename: str) -> str:
    name = os.path.splitext(filename)[0]
    parts = name.split("_", 1)
    num = parts[0]
    title = parts[1].replace("_", " ").title() if len(parts) > 1 else name
    return f"Lesson {num}: {title}"


def build_nav(current: str) -> str:
    links = ['<span class="brand">Python Lessons</span>']
    links.append(f'<a href="index.html">Home</a>')
    for f in LESSONS:
        html_name = os.path.splitext(f)[0] + ".html"
        style = "font-weight:bold;" if f == current else ""
        links.append(f'<a href="{html_name}" style="{style}">{lesson_title(f)}</a>')
    return "<nav>" + " ".join(links) + "</nav>"


def build_page(title: str, body: str, nav: str) -> str:
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} — Python Lessons</title>
    <style>{NAV_CSS}\n{STYLE}</style>
</head>
<body>
{nav}
<div class="container">
    <h1>{title}</h1>
    {body}
</div>
</body>
</html>"""


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    formatter = HtmlFormatter(style="monokai", linenos=True, cssclass="source")
    lexer = PythonLexer()

    # Build lesson pages
    for filename in LESSONS:
        with open(filename, "r") as f:
            code = f.read()

        highlighted = highlight(code, lexer, formatter)
        title = lesson_title(filename)
        nav = build_nav(filename)
        html = build_page(title, highlighted, nav)

        out_name = os.path.splitext(filename)[0] + ".html"
        out_path = os.path.join(OUTPUT_DIR, out_name)
        with open(out_path, "w") as f:
            f.write(html)
        print(f"  ✓ {out_path}")

    # Build index page
    cards = ""
    for filename in LESSONS:
        html_name = os.path.splitext(filename)[0] + ".html"
        title = lesson_title(filename)
        cards += f'<p style="margin:12px 0;"><a href="{html_name}" style="color:#9cdcfe;font-size:18px;">{title}</a></p>\n'

    index_body = f"<p>Welcome! Pick a lesson to get started:</p>\n{cards}"
    index_html = build_page("Python Lessons", index_body, build_nav(""))
    index_path = os.path.join(OUTPUT_DIR, "index.html")
    with open(index_path, "w") as f:
        f.write(index_html)
    print(f"  ✓ {index_path}")
    print(f"\nDone! Open {OUTPUT_DIR}/index.html in a browser to preview.")


if __name__ == "__main__":
    main()
