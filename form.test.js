// A simple test to simulate form validation

//Trigeering CI
const validateForm = (username, password) => {
  if (!username || !password) {
    return false;
  }else if(password.length < 6) return false; // now matches your real form.js
  return true;
};

test('empty username should fail', () => {
  expect(validateForm('', 'password123')).toBe(false);
});

test('empty password should fail', () => {
  expect(validateForm('user1', '')).toBe(false);
});

test('username and password filled should pass', () => {
  expect(validateForm('user1', 'password123')).toBe(true);
});

test('password less than 6 characters should fail', () => {
  expect(validateForm('user1', '123')).toBe(false); 
});
