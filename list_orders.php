<?php
include 'db.php';

// Fetch all orders from the database
$result = $conn->query("SELECT * FROM orders");

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "Order ID: " . $row["order_id"]. " - Name: " . $row["first_name"]. " " . $row["last_name"]. "<br>";
    }
} else {
    echo "No orders found.";
}

// Close the connection
$conn->close();
?>
