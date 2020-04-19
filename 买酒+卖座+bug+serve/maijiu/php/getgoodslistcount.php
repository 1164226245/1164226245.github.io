<?php

@require_once("config.php");

$search = $_GET["search"];

$sql="SELECT COUNT(goodsid) FROM  goodsinfo  WHERE  goodsname LIKE '%$search%'";

$result  = mysql_query($sql);

$item = mysql_fetch_array($result);

$obj = array();

$obj["count"]=$item["0"];

echo  json_encode($obj);

?>