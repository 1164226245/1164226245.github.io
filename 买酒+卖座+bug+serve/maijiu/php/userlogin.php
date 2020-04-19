<?php

@require_once("config.php");

$username = $_GET["username"];

$userpwd = $_GET["userpwd"];

$sql = "SELECT * FROM userinfo WHERE username='$username' or usertel='$username' or useremail='$username'";

$result = mysql_query($sql);

$obj = mysql_fetch_array($result); //拿到执行的结果

$temp = array();
if ($obj) {
    $exitPwd = $obj["userpwd"];

    if ($exitPwd == $userpwd) {

        $temp["code"] = 1;

        $temp["msg"] = "登录成功";

        $temp["id"] = $obj["id"];
    }else{
        $temp["code"] = 0;

        $temp["msg"] = "用户名和密码不匹配";

    }

} else {
    $temp["code"] = -1;

    $temp["msg"] = "用户名不存在";
}
echo json_encode($temp);
