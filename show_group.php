<?php
    session_start();
    require "include.php";
    $id = $_SESSION['id'];
    $sql = "SELECT  `group_friends` FROM `user_relation` WHERE user_id = $id"; 
    if($result = mysqli_query($conn,$sql))
    {
        $group_id_array = array();
        $friend_array = array();
        $one = mysqli_fetch_array($result);
        $group_friends = $one['group_friends'];
        $group_id_array = explode('￥',$group_friends);
        $sql = "SELECT `group_id`, `g_name`, `g_commit`, `g_member` FROM `group_friend` WHERE ";
        for($i = 0;$i<count($friend_id_array)-1;$i++)
        {
            $n = $group_id_array['$i']
            if($i==count($group_id_array)-2)
            {
                $sql=$sql."group_id = $n";
            }
            else{
                $sql=$sql."group_id = $n or ";
            }
        }
        $result = mysqli_query($conn,$sql);
        $group_array = mysqli_fetch_all($result);
        echo json_encode($group_array);
    }
