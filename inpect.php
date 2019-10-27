<?php
    session_start();
    if(empty($_SESSION['type']))
    {
        echo 1;
    }
    else{
         echo "<script>alert('请登录后再进行执行操作！');history.go(-1);</script>";
    }
?>