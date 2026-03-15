(function () {
  'use strict';

  function attachRunner(taskEl) {
    var wrap = document.createElement('div');
    wrap.className = 'runner-wrap';
    wrap.innerHTML =
      '<div class="runner-header">' +
        '<div class="runner-dots">' +
          '<span class="runner-dot runner-dot-red"></span>' +
          '<span class="runner-dot runner-dot-yellow"></span>' +
          '<span class="runner-dot runner-dot-green"></span>' +
        '</div>' +
        '<span class="runner-lang-tag">Python 3</span>' +
        '<span class="runner-status"></span>' +
      '</div>' +
      '<textarea class="runner-editor" rows="8" spellcheck="false"># Write your code here\n</textarea>' +
      '<div class="runner-controls">' +
        '<button class="runner-btn-run">&#9654; Run</button>' +
        '<button class="runner-btn-validate">&#10003; Check</button>' +
        '<button class="runner-btn-clear">&#10005; Clear</button>' +
      '</div>' +
      '<div class="runner-output">' +
        '<div class="runner-output-header">Output</div>' +
        '<div class="runner-output-body"></div>' +
      '</div>';
    taskEl.appendChild(wrap);

    var editor      = wrap.querySelector('.runner-editor');
    var btnRun      = wrap.querySelector('.runner-btn-run');
    var btnValidate = wrap.querySelector('.runner-btn-validate');
    var btnClear    = wrap.querySelector('.runner-btn-clear');
    var outputWrap  = wrap.querySelector('.runner-output');
    var outputBody  = wrap.querySelector('.runner-output-body');
    var status      = wrap.querySelector('.runner-status');

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
      runCode(editor.value, outputBody, outputWrap, btnRun, btnValidate, status, false);
    });

    btnValidate.addEventListener('click', function () {
      runCode(editor.value, outputBody, outputWrap, btnRun, btnValidate, status, true);
    });

    btnClear.addEventListener('click', function () {
      outputBody.textContent = '';
      outputWrap.classList.remove('visible', 'has-error');
      status.textContent = '';
    });
  }

  function makeInputHandler(outputBody, outputWrap) {
    return function (prompt) {
      return new Promise(function (resolve) {
        var promptSpan = document.createElement('span');
        promptSpan.textContent = prompt || '';
        outputBody.appendChild(promptSpan);

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
        outputBody.appendChild(row);
        outputWrap.classList.add('visible');

        field.focus();

        function submit() {
          var val = field.value;
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

  function runCode(code, outputBody, outputWrap, btnRun, btnValidate, status, doCheck) {
    outputBody.textContent = '';
    outputWrap.classList.remove('has-error');
    outputWrap.classList.add('visible');
    btnRun.disabled = true;
    btnValidate.disabled = true;
    status.textContent = 'Running…';

    var outputText = '';
    var taskEl = outputBody.closest('.task');
    var expected = taskEl ? taskEl.dataset.expectedOutput : undefined;

    Sk.configure({
      output: function (text) {
        outputText += text;
        outputBody.appendChild(document.createTextNode(text));
      },
      inputfun: makeInputHandler(outputBody, outputWrap),
      inputfunTakesPrompt: true,
      __future__: Sk.python3,
      execLimit: 10000
    });

    Sk.misceval.asyncToPromise(function () {
      return Sk.importMainWithBody('<stdin>', false, code, true);
    }).then(
      function () {
        status.textContent = '';
        btnRun.disabled = false;
        btnValidate.disabled = false;
        if (doCheck) {
          var badge = document.createElement('div');
          if (expected === undefined) {
            badge.className = 'runner-check-result info';
            badge.textContent = '⚠️ No expected output defined for this task';
          } else {
            var passed = outputText.trim() === expected.trim();
            badge.className = 'runner-check-result ' + (passed ? 'correct' : 'wrong');
            badge.textContent = passed ? '✅ Correct!' : '❌ Not quite — check your output';
          }
          outputBody.appendChild(badge);
        }
      },
      function (err) {
        status.textContent = '';
        outputWrap.classList.add('has-error');
        var msg = err.toString ? err.toString() : String(err);
        outputBody.appendChild(document.createTextNode(msg));
        btnRun.disabled = false;
        btnValidate.disabled = false;
        if (doCheck) {
          var badge = document.createElement('div');
          badge.className = 'runner-check-result wrong';
          badge.textContent = '❌ Not quite — check your output';
          outputBody.appendChild(badge);
        }
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
