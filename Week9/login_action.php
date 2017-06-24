<?php
    $username = $_POST["username"];
    $password = $_POST["password"];
    if($username == "admin" && $password == "1234") {
    	header("location: welcome.php");
    }else {
    	header("location: login_error.php");
    }
?>