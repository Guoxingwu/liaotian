<?php
    require "include.php";
    session_start();
   // var_dump($_POST);
    if(isset($_POST['username'])&&isset($_POST['password'])&&isset($_POST['status']))
    {
        $user = $_POST['username'];
        $pass = $_POST['password'];
        $status = $_POST['status'] ;
        $sql = "select username from admin where username = '$user'";
        $result = mysqli_query($conn,$sql);
        
        if(mysqli_fetch_row($result))
        {
            echo 0;
        }
        else
        {
            $showtime = date('Y-m-d');
            $sql = "insert into admin (`username`,`password`,`date`,`status`)values('$user','$pass','$showtime',$status)";
            mysqli_query($conn,$sql);
            echo 1;
        }
        //header("location:login.html");
    }
?>