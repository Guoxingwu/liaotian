<?php
    session_start();
    require "include.php";
    if(isset($_POST['comm']))
    {
        $comm = $_POST['comm'];
        $friend = $_SESSION['id'];
        $id = $_SESSION['id'];
        $showtime = date('Y-m-d H:i:s');
        $sql = "INSERT INTO `chat_record`(`C_commit`, `sendtime`, `send_ID`, `take_ID`)
         VALUES ('$comm',$showtime,$id,$friend)"
        if(mysqli_query($conn,$sql))
            echo 1;
        else    
            echo 0;
    }