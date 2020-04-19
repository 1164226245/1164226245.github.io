<?php
@include_once "config.php";

$id = $_GET['id'];

$sql = "SELECT * FROM goodsinfo WHERE id=$id";

$result = mysql_query($sql); 

$arr = mysql_fetch_array($result);  //此时返回的是一个单行的结果集

if ($arr) {

    $temp = array();

    $temp["id"] = $arr["id"];

    $temp["goodsname"] = $arr["goodsname"];

    $temp["goodsprice"] = $arr["goodsprice"];

    $temp['goodsnum'] = $arr['goodsnum'];

    $temp["goodsimg"] = $arr["goodsimg"];

    $data = array();

    $data["code"] = 1;

    $data["msg"] = "成功";

    $data["data"] = $temp;

    echo json_encode($data);
}

