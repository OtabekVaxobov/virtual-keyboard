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
  '/',

  //
  'CapsLock',
  //   'CapsLock',
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
  'qwe',
  'Enter',
  //
  'Shift',
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
  '▲',
  'Shift',
  //
  'Ctrl',
  'Win',
  'Alt',
  'Space',
  'Alt',
  '◄',
  '▼',
  '►',
  'Ctrl',
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

EngKeys.forEach((item) => {
  let list = document.getElementById('keyboard');
  let button = document.createElement('button');
  button.innerText = item;
  list.appendChild(button);
  button.className = 'btn';
  button.id = item;

  switch (item) {
    case 'qwe':
      button.innerText = `'`;
      break;

    case 'Space':
      button.innerText = ' ';
      break;
  }
});

document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    let text = document.getElementById('textarea');
    text.focus();
    switch (btn.id) {
      case 'qwe':
        text.value += `'`;
        break;
      case 'Space':
        text.value += ' ';
        break;
      case 'Tab':
        text.value += '\t ';
        break;
      case 'CapsLock':
      case 'Win':
      case 'Shift':
      case 'Ctrl':
      case 'Alt':
        text.value += '';
        break;
      case 'Enter':
        text.value += '\n';
        break;
      case 'Backspace':
        text.value = text.value.slice(0, -1);
        break;

      default:
        text.value += btn.id;
        break;
    }
  });
});
