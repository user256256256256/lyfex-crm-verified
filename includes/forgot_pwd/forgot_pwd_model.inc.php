<?php

declare(strict_types= 1);

function get_user($pdo, $email) {
    $query = "SELECT * FROM users WHERE email = :email;";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam('email', $email);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    return $result;
}

function set_user_pwd($pdo, $email, $pwd) {
    $hashedPwd = password_hash($pwd, PASSWORD_BCRYPT);

    $query = "UPDATE users SET pwd = :pwd WHERE email = :email;";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':pwd', $hashedPwd);
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    $count = $stmt->rowCount();
    return $count;
}