/**
 * components.js — shared header & footer for all pages.
 *
 * To add a lecture:  push to LECTURES array.
 * To add a homework: push to HOMEWORKS array.
 * The script auto-detects the current page to set the active link
 * and computes correct relative paths for root vs. subdirectory pages.
 */

(function () {
  const filename = window.location.pathname.split('/').pop() || 'index.html';
  const inSubdir = /\/(lectures|homework)\//.test(window.location.pathname);
  const root = inSubdir ? '../' : '';

  // ── Data ──────────────────────────────────────────────────────────────────

  const LECTURES = [
    ['lectures/lecture_1.html', 'Lecture 1: Variables &amp; Data Types'],
    ['lectures/lecture_2.html', 'Lecture 2: If-Else Conditions'],
    ['lectures/lecture_3.html', 'Lecture 3: Cycles (Loops)'],
  ];

  const HOMEWORKS = [
    ['homework/homework_1.html', 'Homework 1: Variables &amp; Types'],
    ['homework/homework_2.html', 'Homework 2: If-Else'],
    ['homework/homework_3.html', 'Homework 3: Cycles'],
    ['homework/homework_4.html', 'Homework 4: Build &amp; Deploy'],
  ];

  // ── Helpers ───────────────────────────────────────────────────────────────

  function active(file) {
    return filename === file.split('/').pop() ? ' class="active"' : '';
  }

  function dropdownLinks(items) {
    return items
      .map(([file, label]) => `      <a href="${root}${file}"${active(file)}>${label}</a>`)
      .join('\n');
  }

  // ── Templates ─────────────────────────────────────────────────────────────

  const resourcesActive = filename === 'resources.html' ? ' class="active"' : '';

  const HEADER = `<header>
<div class="site-title">
  <h2>🐍 Python Lessons</h2>
  <span>BL2 Programming Classes</span>
</div>
<nav>
  <a class="brand" href="${root}index.html">🐍 Python Lessons</a>
  <span class="sep">|</span>
  <div class="dropdown">
    <span class="dropdown-toggle">📖 Lectures ▾</span>
    <div class="dropdown-menu">
${dropdownLinks(LECTURES)}
    </div>
  </div>
  <span class="sep">|</span>
  <a href="${root}resources.html"${resourcesActive}>📚 Resources</a>
  <span class="sep">|</span>
  <div class="dropdown">
    <span class="dropdown-toggle">✏️ Homework ▾</span>
    <div class="dropdown-menu">
${dropdownLinks(HOMEWORKS)}
    </div>
  </div>
</nav>
</header>`;

  const FOOTER = `<footer>
  <p>Created for BL2 programming classes</p>
</footer>`;

  // ── Inject ────────────────────────────────────────────────────────────────

  const headerEl = document.getElementById('site-header');
  if (headerEl) headerEl.outerHTML = HEADER;

  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.outerHTML = FOOTER;
})();
