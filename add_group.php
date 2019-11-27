<?php
    session_start();
    require "include.php";
    if(isset($_POST['add_group_id']))
    {
        $id = $_SESSION['id'];
        $group_id = $_POST['add_group_id'];
        $group_array = array();
        $sql = "SELECT `group_friends` FROM `user_relation` WHERE user_id = $id";
        $result = mysqli_query($conn,$sql);
        $one = mysqli_fetch_array($result);
        $group = $one['user_group']."$group_id".'￥';
        $sql = "UPDATE `user_relation` SET `group_friends`=$group WHERE user_id = $id";
        if(mysqli_query($conn,$sql))
            echo 1;
        else
            echo 0
    }