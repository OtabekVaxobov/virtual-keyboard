(function () {
  const EngKeys = [
    '`',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'Backspace',
    //
    'Tab',
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    '[',
    ']',
    'Backslash',
    //
    'CapsLock',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    ';',
    'Backquote',
    'Enter',
    //
    'ShiftLeft',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    ',',
    '.',
    '/',
    'ArrowUp',
    'ShiftRight',
    //
    'ControlLeft',
    'MetaLeft',
    'AltLeft',
    'Space',
    'AltRight',
    'ControlRight',
    'ArrowLeft',
    'ArrowDown',
    'ArrowRight',
  ];

  const EngKeys_UpperCase = [
    '`',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'Backspace',
    //
    'Tab',
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    '[',
    ']',
    'Backslash',
    //
    'CapsLock',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    ';',
    'Backquote',
    'Enter',
    //
    'ShiftLeft',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    ',',
    '.',
    '/',
    'ArrowUp',
    'ShiftRight',
    //
    'ControlLeft',
    'MetaLeft',
    'AltLeft',
    'Space',
    'AltRight',
    'ControlRight',
    'ArrowLeft',
    'ArrowDown',
    'ArrowRight',
  ];

  let div = document.createElement('div');
  div.id = 'keyboard';
  div.className = 'container';

  var input = document.createElement('textarea');
  input.id = 'textarea';
  input.cols = '40';
  input.rows = '10';
  document.body.appendChild(input);
  document.body.appendChild(div);
  //

  function SupperMupper() {
    return Cap_changer ? EngKeys_UpperCase : EngKeys;
  }
  //   console.log(SupperMupper());

  SupperMupper().forEach((item) => {
    let list = document.getElementById('keyboard');
    let button = document.createElement('button');
    button.innerText = item;
    list.appendChild(button);
    button.className = 'btn';
    button.id = item;
    switch (item) {
      case 'ArrowUp':
        button.innerText = '↑';
        break;
      case 'ArrowLeft':
        button.innerText = '←';
        break;
      case 'ArrowDown':
        button.innerText = '↓';
        break;
      case 'ArrowRight':
        button.innerText = '→';
        break;
      case 'Backquote':
        button.innerText = `'`;
        break;
      case 'ShiftRight':
        button.innerText = 'Shift';
        break;
      case 'ShiftLeft':
        button.innerText = 'Shift';
        break;
      case 'Space':
        button.innerText = ' ';
        break;
      case 'ControlRight':
        button.innerText = 'Ctrl';
        break;
      case 'ControlLeft':
        button.innerText = 'Ctrl';
        break;
      case 'MetaLeft':
        button.innerText = 'Win';
        break;
      case 'AltLeft':
        button.innerText = 'Alt';
        break;
      case 'AltRight':
        button.innerText = 'Alt';
        break;
      case 'Backslash':
        button.innerText = '\\';
        break;
    }
  });
  function Cap_changer() {
    if (localStorage.getItem('CapsLock')) {
      localStorage.setItem('CapsLock', true);
    } else {
      localStorage.setItem('CapsLock', false);
    }
  }
  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      let text = document.getElementById('textarea');
      text.focus();
      switch (btn.id) {
        case 'Backquote':
          text.value += `'`;
          break;
        case 'Space':
          text.value += ' ';
          break;
        case 'Tab':
          text.value += '\t ';
          break;
        case 'CapsLock':
          Cap_changer();
          text.value += '';
          break;

        case 'MetaLeft':
        case 'ShiftRight':
        case 'ShiftLeft':
        case 'ControlLeft':
        case 'ControlRight':
        case 'AltRight':
        case 'AltLeft':
          text.value += '';
          break;
        case 'Enter':
          text.value += '\n';
          break;
        case 'Backspace':
          text.value = text.value.slice(0, -1);
          break;
        case 'Backslash':
          text.value += `'\\'`;
          break;
        default:
          text.value += btn.id;
          break;
      }
    });
  });

  document.querySelector('body').onkeydown = (event) => {
    let code = event.code;
    let key = event.key;

    if (code === 'CapsLock') {
      Cap_changer();
      console.log(localStorage.CapsLock);
    }

    if (
      code === 'MetaLeft' ||
      code === 'Backslash' ||
      code === 'ShiftLeft' ||
      code === 'ShiftRight' ||
      code === 'Space' ||
      code === 'ControlLeft' ||
      code === 'CapsLock' ||
      code === 'AltRight' ||
      code === 'AltLeft' ||
      code === 'ControlRight'
    ) {
      document.getElementById(code).style.backgroundColor = 'red';
      setTimeout(
        () => (document.getElementById(code).style.backgroundColor = ''),
        100
      );
    } else if (key) {
      document.getElementById(key).style.backgroundColor = 'red';
      setTimeout(
        () => (document.getElementById(key).style.backgroundColor = ''),
        100
      );
    } else {
      return '';
    }
  };
})();
