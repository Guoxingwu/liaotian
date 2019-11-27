<?php
    session_start();
    require "include.php";
    if(isset($_POST['add_friend_id']))
    {
        $id = $_SESSION['id'];
        $friend_id = $_POST['add_friend_id'];
        $friends_array = array();
        $flag = 0;
        $sql = "SELECT `user_friends` FROM `user_relation` WHERE user_id = $id";
        $result = mysqli_query($conn,$sql);
        $one = mysqli_fetch_array($result);
        $friends = $one['user_friends'];
        $friends_array = explode('￥',$friends);
        for($i = 0;$i<count($friends_array)-1;$i++)
        {
            if($friends_array["$i"] == $friend_id)
            {
                $flag=1;
                echo 0;
            }
        }
        if($flag==0)
            echo 1;
    }