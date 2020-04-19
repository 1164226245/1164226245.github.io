<?php
///goods/php/goodslist.php?search=&type=&rank=id&order=asc&pagesize=8&pageindex=1
@require_once "config.php";

$search = $_GET['search'];

// $type = $_GET['type'];

$rank = $_GET['rank'];

$order =$_GET['order'];

$pagesize =$_GET['pagesize'];

$pageindex=$_GET['pageindex'];  

$sql="SELECT * FROM goodsinfo WHERE goodsname like '%$search%' order by  $rank $order limit $pageindex,$pagesize";

$result = mysql_query($sql);

$list = array();

while ($arr = mysql_fetch_array($result)) {

    $temp = array();

    $temp['id'] = $arr['id'];

    $temp['goodsname'] = $arr['goodsname'];

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
