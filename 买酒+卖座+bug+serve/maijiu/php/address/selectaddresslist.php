<?php
@require_once("../config.php");

$userid = $_GET["userid"];

$str = "select  * from  address where userid =$userid";

$result = mysql_query($str);

$list = array();

while($item = mysql_fetch_array($result)){

    $obj = array();

    $obj["id"]=$item["id"];

    $obj["userid"]=$item["userid"];

    $obj["isdefault"]=$item["isdefault"];

    $obj["consignee"]=$item["consignee"];

    $obj["region"]=$item["region"];

    $obj["address"]=$item["address"];

    $obj["housenumber"]=$item["housenumber"];

    $obj["phone"]=$item["phone"];

    $obj["fixedphone"]=$item["fixedphone"];

    $obj["email"]=$item["email"];

    $obj["label"]=$item["label"];
    
    $list[] = $obj;
}

echo  json_encode($list);
?>