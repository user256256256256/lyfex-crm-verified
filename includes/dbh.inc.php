<?php

$host = 'localhost';
$dbname = 'lyfex-africa-db' ;
$dbusername = 'root' ;
$dbpassword = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $dbusername, $dbpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => 'Connection failed' . $e->getMessage()]);
    exit();
}

