const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const userData = {
    email: event.target.elements.email.value.trim(),
    password: event.target.elements.password.value.trim(),
  };
  if (userData.email === '' || userData.password == '') {
    return alert('All form fields must be filled in');
  }
  console.log(userData);
  event.target.reset();
});

