document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values entered by the user
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Perform validation
    if (email.trim() === '' || password.trim() === '') {
        alert('Please enter both email and password.');
    } else {
        // Display a message (for demonstration purposes)
        alert('Login successful!\nEmail: ' + email + '\nPassword: ' + password);
        window.location.href = 'index.html';

        // Here you can submit the form to a server for authentication
        // Example: document.getElementById('loginForm').submit();
    }
});
