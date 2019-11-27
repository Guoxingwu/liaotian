<?php
    session_start();
    require "include.php";
    header("Content-Type:text/html;charset = utf-8");
    if(isset($_POST['add_friend_id']))
    {
        $id = $_SESSION['id'];
        $friend_id = $_POST['add_friend_id'];
        $friends_array = array();
        $sql = "INSERT INTO `friend`(`Friend_id`, `Myself_id`, `remark`, `Box_ID`)
         VALUES ($friend_id,$id,'0','0')";
        if(mysqli_query($conn,$sql))
            echo 1;
        else
            echo 0;
    }