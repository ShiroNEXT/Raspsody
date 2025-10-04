<?php
header('Content-Type: application/json');
include 'db.php';

// Fetch orders from the database
$result = $conn->query("SELECT * FROM orders");

$orders = [];
while ($row = $result->fetch_assoc()) {
    $orders[] = $row;
}

// Return the orders as a JSON response
echo json_encode($orders);

// Close the connection
$conn->close();
?>
