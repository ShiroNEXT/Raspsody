document.addEventListener('DOMContentLoaded', fetchOrders);


document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Gather form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const textToEmbroider = document.getElementById('textToEmbroider').value;
    const position = document.getElementById('position').value;
    const quantity = document.getElementById('quantity').value;
    const orderDate = document.getElementById('orderDate').value;

    // Send data to the server
    fetch('submit_order.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName,
            lastName,
            textToEmbroider,
            position,
            quantity,
            orderDate
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Reset the form
        document.getElementById('orderForm').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

function fetchOrders() {

function fetchOrders() {
    fetch('fetch_orders.php')
        .then(response => response.json())
        .then(orders => {
            const orderTableBody = document.getElementById('orderTableBody');
            orderTableBody.innerHTML = ''; // Clear existing rows

            orders.forEach(order => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${order.id}</td>
                    <td>${order.first_name} ${order.last_name}</td>
                    <td>${order.text_to_embroider}</td>
                    <td>${order.position}</td>
                    <td>${order.quantity}</td>
                    <td>${order.status}</td>
                    <td>
                        <button class="btn btn-info">Update</button>
                        <button class="btn btn-danger">Delete</button>
                    </td>
                `;
                orderTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching orders:', error));
}

    fetch('fetch_orders.php')
        .then(response => response.json())
        .then(orders => {
            const orderTableBody = document.getElementById('orderTableBody');
            orderTableBody.innerHTML = ''; // Clear existing rows

            orders.forEach(order => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${order.id}</td>
                    <td>${order.first_name} ${order.last_name}</td>
                    <td>${order.text_to_embroider}</td>
                    <td>${order.position}</td>
                    <td>${order.quantity}</td>
                    <td>${order.status}</td>
                    <td>
                        <button class="btn btn-info">Update</button>
                        <button class="btn btn-danger">Delete</button>
                    </td>
                `;
                orderTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching orders:', error));
}
