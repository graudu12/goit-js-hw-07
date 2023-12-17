//function getRandomHexColor() {
 // return `#${Math.floor(Math.random() * 16777215)
 //   .toString(16)
 //   .padStart(6, 0)}`;
//}
const changeColorBtn = document.querySelector('button.change-color');
const body = document.body;
const colorValue = document.querySelector('span.color');

changeColorBtn.addEventListener('click', onChangeColorButton);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColorButton() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
}
