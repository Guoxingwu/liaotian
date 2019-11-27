<?php
    session_start();
    require "include.php";
    $id = $_SESSION['id'];
    $friend = array();
    $sql = "SELECT `Friend_id`, `remark`, `Box_ID` FROM `friend` WHERE Myself_id = $id";
    $result = mysqli_query($conn,$sql);
    $friend = mysqli_fetch_all($result);
    // echo $friend;
    echo json_encode($friend);
