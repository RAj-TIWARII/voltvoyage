<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));
    
    // Email settings
    $to = "therajtiwari.1@gmail.com"; // Replace with your email address
    $subject = "New Feedback from $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    // Email body
    $emailBody = "<html><body>";
    $emailBody .= "<h2>Feedback Received</h2>";
    $emailBody .= "<p><strong>Name:</strong> $name</p>";
    $emailBody .= "<p><strong>Email:</strong> $email</p>";
    $emailBody .= "<p><strong>Message:</strong></p>";
    $emailBody .= "<p>$message</p>";
    $emailBody .= "</body></html>";
    
    // Send email
    if (mail($to, $subject, $emailBody, $headers)) {
        echo "Feedback sent successfully.";
    } else {
        echo "Failed to send feedback. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
