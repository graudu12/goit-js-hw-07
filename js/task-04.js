const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.target.elements;

  if (!email.value || !password.value) {
    alert('All form fields must be filled in');
  }

  const userDetails = { email: email.value, password: password.value };
  //console.log(userDetails);

  event.target.reset();
}
