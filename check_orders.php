<?php
include 'db.php';

// Check the number of orders in the database
$result = $conn->query("SELECT COUNT(*) as count FROM orders");
$row = $result->fetch_assoc();
echo "Number of orders: " . $row['count'];

// Close the connection
$conn->close();
?>
