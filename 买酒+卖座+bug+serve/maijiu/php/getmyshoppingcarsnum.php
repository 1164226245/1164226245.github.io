<?php
@require_once("config.php");

$userid = $_GET["userid"];

$sql ="select sum(goodsnum)   from  myshoppingcar  where  userid =$userid";

$result  = mysql_query($sql);

$item = mysql_fetch_array($result);

$data = array();

$data["sum"]=$item["0"];

$data["code"] = 1;

$data["msg"] = "成功";

echo json_encode($data);

?>