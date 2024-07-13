<?php

declare(strict_types= 1);

function is_field_empty(string $value) {
    if (empty($value)) {
        return true;
    } else {
        return false;
    }

} 

function is_email_valid(string $email) {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return true;
    } else {
        return false;
    }
}

function does_email_exist(bool|array $result) {
    if (!$result) {
        return true;
    } else {
        return false;
    }
}

// function generate_OTP() {
//     return rand(100000, 999999);
// }

// $otp = generate_OTP();

// function send_OTP_mail(string $email, int $otp) {
//     $subject = 'Your OTP for verification';
//     $message = 'Your OTP is: ' . $otp;
//     $headers = 'From lyfexafrica@gmail.com' . "\r\n". 'Reply-To: lyfexafrica@gmail.com'  . "\r\n" . 'X-Mailer:PHP/' . phpversion();
    
//     return mail($email, $subject, $message, $headers);
// }

// 

function change_pwd(object $pdo, string $email, string $pwd) {
    set_user_pwd($pdo, $email, $pwd);
}