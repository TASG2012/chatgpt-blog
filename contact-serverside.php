<!-- Needs to be fixed and run in the cloud! -->
<?php
  if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    if (!$name || !$email || !$message) {
      echo "All fields are required.";
    } else {
      $to = "example@example.com";
      $subject = "New message from $name";
      $headers = "From: $email" . "\r\n" .
                 "Reply-To: $email" . "\r\n";
      mail($to, $subject, $message, $headers);
      echo "Message sent successfully.";
    }
  }
?>
