<?php

header('Content-Type: application/json');

if (!empty($_POST)) {

    $email = $_POST['email'];
    $pwd = $_POST['password'];

    require_once '../dbh.inc.php';
    require_once 'signin_model.inc.php';
    require_once 'signin_contr.inc.php';

    // ERROR HANDLERS
    if (is_field_empty($email, $pwd)) {
        echo json_encode(['error' => 'Fill in all fields !']);
        exit();
    }

    if (is_email_valid($email)) {
        echo json_encode(['error' => 'Invalid email address !']);
        exit();

    }

    $result = get_user($pdo, $email);

    if (is_email_wrong($result)) {
        echo json_encode(['error' => 'Incorrect email or password !']);
        exit();
    }

    if (is_email_wrong($result) || is_password_wrong($pwd, $result['pwd'])) {
        echo json_encode(['error' => 'Incorrect email or password !']);
        exit();
    }

    if (!is_field_empty($email, $pwd) || !is_email_valid($email) || !is_email_wrong($result) || !is_password_wrong($pwd, $result['pwd'])) {
        echo json_encode(['success' => 'Data recieved successfullyl !']);
    }
    
    require_once '../config_session.inc.php';
    $user_id = $result['id'];
    $_SESSION['user_id'] = $user_id;
    
    $pdo = null;
    $stmt = null;

    die();
    

} else {
    echo json_encode(['error' => 'Failed to connect to server !']);
}

