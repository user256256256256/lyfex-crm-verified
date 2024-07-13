<?php

declare(strict_types= 1);

function get_user($pdo, $user_id) {
    $query = "SELECT * FROM users WHERE id = :user_id;";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':user_id', $user_id);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    return $result;
}