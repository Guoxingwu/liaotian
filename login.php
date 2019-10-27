<?php
    require "include.php"; 
    session_start();
    if(isset($_POST['username'])&&isset($_POST['password']))
    {
        $user = $_POST['username'];
        $pass = $_POST['password'];
        $pwd = md5($pass);
        $sql = "SELECT `admin_id`, `username`, `password`,`status` FROM `admin` WHERE `username`= '$user'";
        $result = mysqli_query($conn,$sql);
        $rem = $_POST['remmber'];
        if(isset($rem))
        {
            setcookie("username", $username, time()+3600*24*30); 
            setcookie("password", $pass, time()+3600*24*30); 
        }
        if(!mysqli_num_rows($result))
        {
            //echo "该用户不存在！";
            echo 0;
        }
        else
        {
            $num=mysqli_fetch_array($result,MYSQLI_ASSOC);
            //var_dump($num);
            if($pwd == $num['password'] && $num['status']==1)
            {
                $_SESSION['id'] = $num['admin_id'];
                $_SESSION['username'] = $num['username'];
                $_SESSION['password'] = $num['password'];
                $_SESSION['type'] = 2;
                echo 1;
            }
            elseif($pwd == $num['password'] && $num['status']==2)
            {
                $_SESSION['id'] = $num['admin_id'];
                $_SESSION['username'] = $num['username'];
                $_SESSION['password'] = $num['password'];
                $_SESSION['type'] = 2;
                echo 2;
            }
            else{
                echo 0;
            }
        }
    }
?> 