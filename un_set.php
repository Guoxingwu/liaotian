<?php//去除cookie上面保存的数据
 session_start();
 unset($_SESSION['username']);
 unset($_SESSION['password']);
 setcookie('username','',0);
 setcookie('password','',0);
 header("location:index.php");
?> 