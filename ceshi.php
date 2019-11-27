<?php
    $a = "￥a￥a￥";
    $array = array();
   $a= trim($a,"￥");
    $array = explode('￥',$a);
    echo count($array);
    var_dump($array);