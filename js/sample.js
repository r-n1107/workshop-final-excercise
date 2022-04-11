let x = 0;
let y = 0;
let stepNum = 0;

function stepDown() {
  if (y < 160) {
    y += 32;
    stepNum++;
    document.getElementById("cat").style.top = y + 'px';
    changeImage();
  } else {
    alert('いきどまり');
  }
}

function stepUp() {
  if (y > 0) {
    y -= 32;
    stepNum++;
    document.getElementById("cat").style.top = y + 'px';
    changeImage();
  } else {
    alert('いきどまり');
  }
}

function stepLeft() {
  if (x > 0) {
    x -= 32;
    stepNum++;
    document.getElementById("cat").style.left = x + 'px';
    changeImage()
  } else {
    alert('いきどまり');
  }
}

function stepRight() {
  if (x < 448) {
    x += 32;
    stepNum++;
    document.getElementById("cat").style.left = x + 'px';
    changeImage();
  } else {
    alert('いきどまり');
  }
}

function changeImage() {
  if (stepNum < 20) {
    return;
  } else if (stepNum < 30) {
    document.getElementById('cat').src = 'https://user-images.githubusercontent.com/39263724/157788420-dfe66e82-74f4-4914-a001-ecd1836b8098.gif';
  } else {
    document.getElementById('cat').src = 'https://user-images.githubusercontent.com/39263724/157798404-d6a7c19b-ee85-499c-8b52-fa0fad6639bc.gif';
  }
}

function stepMultipleRight() {
  const num = document.getElementById('right-steps').value;
  for (let i = 0; i < num; i++) {
    if (x < 448) { 
      stepRight();
    } else {
      alert('いきどまり');
      break;
    }
  }
}
          
function stepMultipleDown() {
  const num = document.getElementById('down-steps').value;
  for (let i = 0; i < num; i++) {
    if (y < 160) { 
      stepDown();
    } else {
      alert('いきどまり');
      break;
    }
  }
}
          
function reset() {
  x = 0;
  y = 0;
  stepNum = 0;
  document.getElementById("cat").style.top = y + 'px';
  document.getElementById("cat").style.left = x + 'px';
  document.getElementById('cat').src = 'https://user-images.githubusercontent.com/39263724/157788409-f875512d-e5f8-42d9-8dd6-5cf670fc7def.gif';
}