<?php
    session_start();
    $_SESSION = array();
    session_destroy();

    echo "<a href='session_test.php'>Back</a>";
?>