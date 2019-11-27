<?php
    require "include.php"; 
    session_start();
    if(isset($_POST['username'])&&isset($_POST['password']))
    {
        $user = $_POST['username'];
        $pass = $_POST['password'];
        $pwd = md5($pass);

        $sql = "SELECT `user_id`, `user_name`, `user_pwd`,`user_status` FROM `user_in` WHERE `user_name`= '$user'";
        $result = mysqli_query($conn,$sql);
        if(!mysqli_num_rows($result))
        {
            echo "该用户不存在！";
            echo 0;
        }
        else
        { 
            $num=mysqli_fetch_array($result,MYSQLI_ASSOC);

            $id = $num['user_id'];//创建个人信息
            $sql1 = "SELECT * FROM `user_information` WHERE user_id = $id";
            $r = mysqli_query($conn,$sql1);
            if(!mysqli_num_rows($r))
            {
                $sql2 = "INSERT INTO `user_information`(`user_id`, `username`) VALUES ($id,'$user')";
                mysqli_query($conn,$sql2);    
            }
            
            // $sql3 = "SELECT * FROM `user_relation` WHERE user_id = $id";//创建个人关系
            // $r = mysqli_query($conn,$sql3);
            // if(!mysqli_num_rows($r))
            // {
            //     $sql4 = "INSERT INTO `user_relation`(`user_id`) VALUES ($id)";
            //     mysqli_query($conn,$sql4);    
            // }
            
            if($pwd == $num['user_pwd'] && $num['user_status']==1)//用户登陆
            {
                $_SESSION['id'] = $num['user_id'];
                $_SESSION['username'] = $num['user_name'];
                $_SESSION['password'] = $num['user_pwd'];
                $_SESSION['type'] = 2;
                echo 1;
            }
            elseif($pwd == $num['password'] && $num['status']==2)//管理员登陆
            {
                $_SESSION['id'] = $num['user_id'];
                $_SESSION['username'] = $num['user_name'];
                $_SESSION['password'] = $num['user_pwd'];
                $_SESSION['type'] = 2;
                echo 2;
            }
            else{
                echo 0;
            }
        }
    }
 