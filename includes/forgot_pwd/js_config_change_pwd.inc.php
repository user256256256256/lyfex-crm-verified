<?php

header('Content-Type: application/json');

if (!empty($_POST)) {

    $pwd = $_POST['password'];

    require_once '../dbh.inc.php';
    require_once 'forgot_pwd_contr.inc.php';
    require_once 'forgot_pwd_model.inc.php';

    if (is_field_empty($pwd)) {
        echo json_encode(['error' => 'Fill in all fields ! !']);
        exit();
    }

    require_once '../config_session.inc.php';

    change_pwd($pdo, $_SESSION['user_email'] , $pwd);
    echo json_encode(['success' => 'Password Changed Successfully !']);


    $pdo = null;
    $stmt = null;

    die();
    // send_OTP_mail($email, $otp);

} else {
    echo json_encode(['error' => 'Failed to connect to server !']);
}

