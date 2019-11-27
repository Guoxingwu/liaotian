<?php
    require "include.php";
    session_start();
   // var_dump($_POST);
    if(isset($_POST['username1'])&&isset($_POST['password1']))
    {
        $user = $_POST['username1'];
        $pass = $_POST['password1'];
        $pass = md5($pass);
        // $status = $_POST['status'] ;
        $sql = "SELECT user_name from user_in where user_name = '$user'";
        $result = mysqli_query($conn,$sql);
        
        if(mysqli_fetch_row($result))
        {
            echo 0;
        }
        else
        {
            $showtime = date('Y-m-d');
            echo $showtime;
            $sql = "INSERT INTO `user_in`( `user_name`, `user_pwd`, `user_status`, `user_date`) 
                    VALUES ('$user','$pass','1','$showtime')";
           if(mysqli_query($conn,$sql))
                echo 1;
        }
        //header("location:login.html");
    }
?>