<?php
    session_start();
    require "include.php";
    if(isset($_POST['add_group_id']))
    {
        $id = $_SESSION['id'];
        $group_id = $_POST['add_group_id'];
        $group_array = array();
        $flag = 0;
        $sql = "SELECT `user_group` FROM `user_relation` WHERE user_id = $id";
        $result = mysqli_query($conn,$sql);
        $one = mysqli_fetch_array($result);
        $group = $one['user_group'];
        $group_array = explode('￥',$group);
        for($i = 0;$i<count($group_array)-1;$i++)
        {
            if($group_array["$i"] == $group_id)
            {
                $flag=1;
                echo 0;
            }
        }
        if($flag==0)
            echo 1;
    }