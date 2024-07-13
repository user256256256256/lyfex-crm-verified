<?php
header('Content-Type: application/json');

// Use $_POST to access the form data
if (!empty($_POST)) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $pwd = $_POST['password'];

    require_once '../dbh.inc.php';
    require_once 'singnup_model.inc.php';
    require_once 'singnup_contr.inc.php';

    // ERROR HANDLERS

    if (is_user_name_taken($pdo, $username)) {
        echo json_encode(['error' => 'Username already exists !']);
        exit();
    } 

    if (is_user_email_taken($pdo, $email)) {
        echo json_encode(['error' => 'Email already exists !']);
        exit();
    } 

    if (is_email_invalid($email)) {
        echo json_encode(['error' => 'Invalid email address !']);
        exit();
    }

    if (!is_user_name_taken($pdo, $email) || !is_user_email_taken($pdo, $email) || !is_email_invalid($email)) {
        create_user($pdo, $username, $pwd, $email );
        echo json_encode(['success' => 'Singup is Successfull !']);
    }

    require_once '../config_session.inc.php';
    require_once '../signin/signin_model.inc.php';

    $result = get_user($pdo, $email);

    $user_id = $result['id'];
    $_SESSION['user_id'] = $user_id;

    $pdo = null;
    $stmt = null;
    die();


} else {
    echo json_encode(['error' => 'Failed to access server !']);
}







