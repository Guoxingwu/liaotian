<?php
    session_start();
    require "include.php";
    if(isset($_POST['friend_username']))
    {
        //通过用户名查到用户ID并存入session()
        $username = $_POST['friend_username'];
        $sql = "SELECT `user_id` FROM `user_in` WHERE user_name = $username";
        $result = mysqli_query($conn,$sql);
        $friend = mysqli_fetch_array($result);
        $friend_id = $friend['user_id'];
        $_SESSION['friend_id'] = $friend_id;
        $id = $_SESSION['id'];
        //查聊天记录
        $sql = "SELECT  `C_commit`, `sendtime`, `send_ID`, `take_ID` FROM `chat_record` 
        WHERE (send_ID = $id and take_ID = $friend_id) or (send_ID = $friend_id and take_ID = $id)";
        $result = mysqli_query($conn,$sql);
        $record = mysqli_fetch_all($result);
        echo json_encode($record);
    }
    else{
        echo 0;
    }