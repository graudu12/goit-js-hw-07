const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInputChange);

function onInputChange({ target: { value } }) {
  nameOutput.textContent = value || 'Anonymous';
}