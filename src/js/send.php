<?php

$name  = htmlspecialchars($_POST['name'], ENT_QUOTES);
$email = htmlspecialchars($_POST['email'], ENT_QUOTES);
$phone = htmlspecialchars($_POST['phone'], ENT_QUOTES);
$message1 = htmlspecialchars($_POST['message'], ENT_QUOTES);

$email_to  = 'ktn_96@icloud.com';
$headers   = 'From: Kosta Legal';
$subject   = 'Request';

$message  = "Name: $name\r\nE-mail: $email\r\nPhone: $phone\r\nMessage: $message1";
mail($email_to, $subject, $message, $headers);

?>