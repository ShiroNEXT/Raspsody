<?php
header('Content-Type: application/json');
include 'db.php';

// Get the JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO orders (first_name, last_name, text_to_embroider, position, quantity, order_date) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $data['firstName'], $data['lastName'], $data['textToEmbroider'], $data['position'], $data['quantity'], $data['orderDate']);

// Execute the statement
if ($stmt->execute()) {
    echo json_encode(["message" => "Order placed successfully!"]);
} else {
    echo json_encode(["message" => "Error: " . $stmt->error]);
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
