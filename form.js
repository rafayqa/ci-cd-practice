document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
    console.log('Validation failed: fields cannot be empty');
    return false;
  }
  console.log('Form submitted successfully');
  return true;
});
