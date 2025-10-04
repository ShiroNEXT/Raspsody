// JavaScript code for handling login form submission

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Gather form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send data to the server for authentication
    fetch('authenticate.php', {
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
            // Redirect to the appropriate page based on role
            window.location.href = data.role === 'admin' ? 'admin.html' : 'order.html';
        } else {
            alert('Login failed: ' + data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
