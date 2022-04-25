let x = 0;

function stepMultipleRight() {
  const num = document.querySelector('#right-steps').value;
  for (let i = 0; i < num; i++) {
    if (x < 640) {
      x += 32;
    } else {
      x = 0;
    }
    document.querySelector('#cat').style.left = x + 'px';
  }
}