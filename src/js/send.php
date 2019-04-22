<?php

$name  = htmlspecialchars($_POST['name'], ENT_QUOTES);
$email = htmlspecialchars($_POST['email'], ENT_QUOTES);
$phone = htmlspecialchars($_POST['phone'], ENT_QUOTES);
$message1 = htmlspecialchars($_POST['message'], ENT_QUOTES);
$appliedPosition = htmlspecialchars($_POST['applied-position'], ENT_QUOTES);
$durationExperience = htmlspecialchars($_POST['duration-experience'], ENT_QUOTES);
$yourCV = htmlspecialchars($_POST['yourCV'], ENT_QUOTES);
$yourCoverLetter = htmlspecialchars($_POST['your-cover-letter'], ENT_QUOTES);

$email_to  = 'ktn_96@icloud.com';
$headers   = 'From: Kosta Legal';
$subject   = 'Request';

$message  = "Name: $name\r\nE-mail: $email\r\nPhone: $phone\r\nMessage: $message1\r\nApplied position: $appliedPosition\r\nDuration of experience: $durationExperience\r\nYour CV: $yourCV\r\nYour Cover Letter: $yourCoverLetter";
mail($email_to, $subject, $message, $headers);

?>