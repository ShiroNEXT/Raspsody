// JavaScript code for handling registration form submission

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Gather form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send data to the server for registration
    fetch('register_user.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Registration successful!');
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            alert('Registration failed: ' + data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
