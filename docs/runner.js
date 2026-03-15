(function () {
  'use strict';

  function attachRunner(taskEl) {
    var wrap = document.createElement('div');
    wrap.className = 'runner-wrap';
    wrap.innerHTML =
      '<textarea class="runner-editor" rows="8" spellcheck="false"># Write your code here\n</textarea>' +
      '<div class="runner-controls">' +
        '<button class="runner-btn-run">&#9654; Run</button>' +
        '<button class="runner-btn-clear">&#10005; Clear</button>' +
      '</div>' +
      '<div class="runner-output"></div>';
    taskEl.appendChild(wrap);

    var editor  = wrap.querySelector('.runner-editor');
    var btnRun  = wrap.querySelector('.runner-btn-run');
    var btnClear = wrap.querySelector('.runner-btn-clear');
    var output  = wrap.querySelector('.runner-output');

    // Tab key inserts 4 spaces instead of moving focus
    editor.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') {
        e.preventDefault();
        var start = editor.selectionStart;
        var end   = editor.selectionEnd;
        editor.value = editor.value.substring(0, start) + '    ' + editor.value.substring(end);
        editor.selectionStart = editor.selectionEnd = start + 4;
      }
    });

    btnRun.addEventListener('click', function () {
      runCode(editor.value, output, btnRun);
    });

    btnClear.addEventListener('click', function () {
      output.textContent = '';
      output.classList.remove('visible', 'has-error');
    });
  }

  function makeInputHandler(outputEl) {
    return function (prompt) {
      return new Promise(function (resolve) {
        // Show the prompt text
        var promptSpan = document.createElement('span');
        promptSpan.textContent = prompt || '';
        outputEl.appendChild(promptSpan);

        // Build the inline input row
        var row = document.createElement('div');
        row.className = 'runner-input-row';

        var field = document.createElement('input');
        field.type = 'text';
        field.className = 'runner-input-field';

        var okBtn = document.createElement('button');
        okBtn.textContent = 'OK';
        okBtn.className = 'runner-btn-run';
        okBtn.style.padding = '2px 10px';

        row.appendChild(field);
        row.appendChild(okBtn);
        outputEl.appendChild(row);
        outputEl.classList.add('visible');

        field.focus();

        function submit() {
          var val = field.value;
          // Echo the entered value to output
          var echo = document.createElement('span');
          echo.textContent = val + '\n';
          row.replaceWith(echo);
          resolve(val);
        }

        okBtn.addEventListener('click', submit);
        field.addEventListener('keydown', function (e) {
          if (e.key === 'Enter') submit();
        });
      });
    };
  }

  function runCode(code, outputEl, btnRun) {
    outputEl.textContent = '';
    outputEl.classList.remove('has-error');
    outputEl.classList.add('visible');
    btnRun.disabled = true;

    Sk.configure({
      output: function (text) {
        outputEl.appendChild(document.createTextNode(text));
      },
      inputfun: makeInputHandler(outputEl),
      inputfunTakesPrompt: true,
      __future__: Sk.python3,
      execLimit: 10000
    });

    Sk.misceval.asyncToPromise(function () {
      return Sk.importMainWithBody('<stdin>', false, code, true);
    }).then(
      function () {
        btnRun.disabled = false;
      },
      function (err) {
        outputEl.classList.add('has-error');
        var msg = err.toString ? err.toString() : String(err);
        outputEl.appendChild(document.createTextNode(msg));
        btnRun.disabled = false;
      }
    );
  }

  window.PythonRunner = {
    init: function () {
      document.querySelectorAll('.task').forEach(function (taskEl) {
        attachRunner(taskEl);
      });
    }
  };
})();
