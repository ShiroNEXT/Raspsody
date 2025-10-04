<?php
header('Content-Type: application/json');
include 'db.php';

// Get the JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Hash the password
$hashedPassword = password_hash($data['password'], PASSWORD_DEFAULT);

// Set default role to 'user' if not provided
$role = isset($data['role']) ? $data['role'] : 'user';

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO users (username, password, role) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $data['username'], $hashedPassword, $role);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Registration failed: " . $stmt->error]);
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
