const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log('log-in-button-work');
  
    const email = document.querySelector('#email-login').value.trim();
    console.log(email);
    const password = document.querySelector('#password-login').value.trim();
    console.log(password);
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      
      });
  
      if (response.ok) {
        document.location.replace('/menu');
      } else {
        alert('Failed to log in.');
      }
    }
};
  
const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log('button sign-up');
  
    const username = document.querySelector('#username-signup').value.trim();
    console.log(username);
    const email = document.querySelector('#email-signup').value.trim();
    console.log(email);
    const password = document.querySelector('#password-signup').value.trim();
    console.log(password);
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('sign up succesful')
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
};

// TODO: FUNCTION ADD BUTTON FOR WAITER LOGIN
// Hacer event listener para el boton
// document.location.replace('/menu');
  
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
// TODO: addEventListener waiter login