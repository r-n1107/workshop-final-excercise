let x = 0;
let stepNum = 0;

function stepMultipleRight() {
  const num = document.querySelector('#right-steps').value;
  for (let i = 0; i < num; i++) {
    if (x < 640) {
      x += 32;
      stepNum++;
      document.querySelector('#cat').style.left = x + 'px';
      changeImage();
    }
  }
}

function changeImage() {
  if (stepNum < 10) {
    return;
  } else if (stepNum < 15) {
    document.querySelector('#cat').src = 'https://user-images.githubusercontent.com/39263724/157788420-dfe66e82-74f4-4914-a001-ecd1836b8098.gif';
  } else {
    document.querySelector('#cat').src = 'https://user-images.githubusercontent.com/39263724/157798404-d6a7c19b-ee85-499c-8b52-fa0fad6639bc.gif';
  }
}
