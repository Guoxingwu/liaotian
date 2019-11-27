<?php
    $conn = mysqli_connect('localhost','root','xuesihao123','liaotian');
    if(!$conn)
    {
        die("链接数据库失败，失败原因".mysqli_error($this->conn));
    }
    mysqli_query($conn,"SET NAMES 'utf8'");
    // mysqli_select_db($conn,'parttimrjob');
    // $GLOBALS['conn'] = $conn;

?>