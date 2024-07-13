<?php

header('Content-Type: application/json');

if (!empty($_POST)) {

    $email = $_POST['email'];

    require_once '../dbh.inc.php';
    require_once 'forgot_pwd_contr.inc.php';
    require_once 'forgot_pwd_model.inc.php';

    
    if (is_field_empty($email)) {
        echo json_encode(['error' => 'Fill in your email address !']);
        exit();
    }

    if (is_email_valid($email)) {
        echo json_encode(['error' => 'Invalid email address !']);
        exit();
    }

    $result = get_user($pdo, $email);

    if (does_email_exist($result)) {
        echo json_encode(['error' => 'Email does not exist in our database !']);
        exit();
    } 

    require_once '../config_session.inc.php';
    $_SESSION["user_email"] = $email;

    echo json_encode(['success' => 'Data recived successfully !']);

    $pdo = null;
    $stmt = null;

    die();


    // send_OTP_mail($email, $otp);
    
    

} else {
    echo json_encode(['error' => 'Failed to connect to server !']);
}

