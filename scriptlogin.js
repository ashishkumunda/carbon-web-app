function login() {
    // Basic form validation
    const username = document.getElementById('username').value;
    const password = document.getElementById('loginpassword').value;
    
    if (username === '' || password === '') {
        document.getElementById('message').innerText = 'Please fill in both fields.';
        return;
    }
  
    // Simulate a login process
    if (username === 'username' && password === 'password') {
        document.getElementById('message').innerText = 'Login successful!';
        // Redirect or perform other actions on successful login
    } else {
        document.getElementById('message').innerText = 'Invalid username or password.';
    }
  }
  