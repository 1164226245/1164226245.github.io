<?php
@require_once "config.php";

//进入结算页面需要的购物数据

$ids = $_GET["ids"];

$sql = "SELECT  *  FROM myshoppingcar where id in ($ids)";

$result = mysql_query($sql);

$list = array();

while ($arr = mysql_fetch_array($result)) {

    $temp = array();

    $temp['id'] = $arr['id'];

    $temp['goodsname'] = $arr['goodsname'];

    $temp['goodsid'] = $arr['goodsid'];

    $temp['goodsprice'] = $arr['goodsprice'];

    $temp['goodsimg'] = $arr['goodsimg'];

    $temp['goodsnum'] = $arr['goodsnum'];

    $list[] = $temp;
}

$data = array();

$data["code"] = 1;

$data["msg"] = "成功";

$data["data"] = $list;

echo json_encode($data);

?>
