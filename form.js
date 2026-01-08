document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
    console.log('Validation failed: fields cannot be empty');
    return false;
  }

  if (password.length < 6) {
    console.log('Validation failed: password must be at least 6 characters');
    return false;
  }

  console.log('Form submitted successfully');
  return true;
});
