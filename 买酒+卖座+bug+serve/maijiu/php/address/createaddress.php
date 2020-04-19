<?php

@require_once "../config.php";

$userid = $_GET["userid"];

$consignee = $_GET["consignee"];

$region = $_GET["region"];

$address = $_GET["address"];

$housenumber = $_GET["housenumber"];

$phone = $_GET["phone"];

$fixedphone = $_GET["fixedphone"];

$email = $_GET["email"];

$label = $_GET["label"]; 

$sql = "insert  INTO  address(userid,consignee,region,address,housenumber,phone,fixedphone,email,label)  values ('$userid','$consignee','$region','$address','$housenumber','$phone','$fixedphone','$email','$label')";

mysql_query($sql); 

$num = mysql_affected_rows(); 

if ($num > 0) {
    $obj["code"] = 1;
    $obj["msg"] = "添加成功";
} else {
    $obj["code"] = 0;
    $obj["msg"] = "添加失败";
}

echo json_encode($obj);
