<?php

@require_once("config.php");

$username = $_GET["username"];

$userpwd = $_GET["userpwd"];

$usertel = $_GET["usertel"];

$useremail =$_GET["useremail"];

$type  =$_GET["type"];

//SELECT *  FROM userinfo WHERE username='huyulin' or usertel='13277094511';
// $sql = "SELECT count(*)  FROM userinfo WHERE username='$username'";
$sql = "SELECT count(*)  FROM userinfo WHERE username='$username' AND  usertel='$usertel' AND  useremail='$useremail'";

$result = mysql_query($sql);

$data = mysql_fetch_array($result);

//  echo json_encode($data);

//  die();

$obj = array();

if ($data["0"]) {

    $obj["code"] = 0;

    $obj["msg"] = "用户名已存在";

    $obj["data"] = false;

} else {
    if($useremail==""){
        $sql = "INSERT INTO userinfo(username, userpwd,usertel,useremail) VALUES ('$username','$userpwd','$usertel','')";
    }else{
        $sql = "INSERT INTO userinfo(username, userpwd,useremail,usertel) VALUES ('$username','$userpwd','$useremail','')";
    }
   

    mysql_query($sql);

    $num=mysql_affected_rows();

    if($num>0){

        $obj["code"] = 1;

        $obj["msg"] = "注册成功";

        $obj["data"] = true;

    }else{
        $obj["code"] = 0;

        $obj["msg"] = "注册失败";
        
        $obj["data"] = false;
    }
}
echo json_encode($obj);
