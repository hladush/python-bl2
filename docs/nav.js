(function () {
  var p = window.location.pathname;
  var isSubdir = /\/(lectures|homework)\//.test(p);
  var b = isSubdir ? '../' : '';
  var currentFile = p.split('/').pop() || 'index.html';

  function link(href, label, cssClass) {
    var file = href.split('/').pop();
    var isActive = file === currentFile;
    var cls = (cssClass || '') + (isActive ? (cssClass ? ' active' : 'active') : '');
    return '<a href="' + b + href + '"' + (cls ? ' class="' + cls + '"' : '') + '>' + label + '</a>';
  }

  var html =
    '<header>' +
      '<div class="site-title">' +
        '<h2>🐍 Python Lessons</h2>' +
        '<span>for young coders</span>' +
      '</div>' +
    '</header>' +
    '<nav>' +
      link('index.html', '🏠 Home') +
      '<span class="sep">|</span>' +
      '<div class="dropdown">' +
        '<span class="dropdown-toggle">📖 Lectures ▾</span>' +
        '<div class="dropdown-menu">' +
          link('lectures/lecture_1.html', 'Lecture 1: Variables &amp; Data Types') +
          link('lectures/lecture_2.html', 'Lecture 2: If-Else Conditions') +
          link('lectures/lecture_3.html', 'Lecture 3: Cycles (Loops)') +
          link('lectures/lecture_4.html', 'Lecture 4: Functions') +
          link('lectures/lecture_5.html', 'Lecture 5: Lists') +
        '</div>' +
      '</div>' +
      '<span class="sep">|</span>' +
      '<div class="dropdown">' +
        '<span class="dropdown-toggle">✏️ Homework ▾</span>' +
        '<div class="dropdown-menu">' +
          link('homework/homework_1.html', 'Homework 1: Variables &amp; Data Types') +
          link('homework/homework_2.html', 'Homework 2: If-Else') +
          link('homework/homework_3.html', 'Homework 3: Cycles') +
          link('homework/homework_4.html', 'Homework 4: Build &amp; Deploy') +
          link('homework/homework_5.html', 'Homework 5: Functions') +
          link('homework/homework_6.html', 'Homework 6: Lists') +
        '</div>' +
      '</div>' +
      '<span class="sep">|</span>' +
      link('resources.html', '📚 Resources') +
    '</nav>';

  document.body.insertAdjacentHTML('afterbegin', html);
})();
