<?php

header('Content-Type: application/json');

require_once '../config_session.inc.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    // retrieving session
    $user_id = $_SESSION['user_id'];

    require_once '../dbh.inc.php';
    require_once 'user_profile_model.inc.php';
    require_once 'user_profile_contr.inc.php';

    $result = get_user($pdo, $user_id);

    if ($result) {
        $user_name = $result['username'];
        $user_email = $result['email'];

        echo json_encode(['success' => 'Database connection successful !', 
                          'username' => $user_name,
                           'email' => $user_email
                        ]);

    } else {
        echo json_encode(['error' => 'Failed to connect to database !']);
        exit();
    }

    $pdo = null;
    $stmt = null;

    die();


} else {
    echo json_encode(['error' => 'Failed to connect to server !']);
}

