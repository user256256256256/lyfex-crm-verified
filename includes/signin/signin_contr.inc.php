<?php

declare(strict_types= 1);

function is_field_empty(string $email, string $pwd) {
    if (empty($email) || empty($pwd)) {
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

function is_email_wrong(bool|array $result) {
    if(!$result) {
        return true;
    } else {
        return false;
    }
}

function is_password_wrong(string $pwd, string $resultPwd) {
    if (!password_verify($pwd, $resultPwd)) {
        return true;
    } else {
        return false;
    }
}
