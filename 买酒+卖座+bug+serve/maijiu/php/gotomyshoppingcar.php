<?php

@require_once "config.php";

$userid = $_GET["userid"];
$goodsid = $_GET["goodsid"];
$goodsname = $_GET["goodsname"];
$goodsnum = $_GET["goodsnum"];
$goodsprice = $_GET["goodsprice"];
$goodsimg = $_GET["goodsimg"];

//先判断
$sql = "SELECT  count(*) from  myshoppingcar WHERE  userid = $userid  and goodsid =$goodsid";

$result = mysql_query($sql);

$item = mysql_fetch_array($result);

// echo json_encode($item);

// die();

if ($item[0] > 0) {

    $str = "update myshoppingcar set goodsnum = goodsnum + $goodsnum WHERE userid =$userid and goodsid=$goodsid";
    
} else {
    $str = "insert into myshoppingcar(userid,goodsid,goodsname,goodsnum,goodsprice,goodsimg) values ($userid,$goodsid,'$goodsname',$goodsnum,$goodsprice,'$goodsimg')
        ";
}
//echo  $str
//更新
//新增

mysql_query($str);

$count = mysql_affected_rows();

$obj = array();

// $sum=$goodsnum

if ($count > 0) {

    $obj["code"] = 1;

    $obj["msg"] = "加入成功";

    $sql = "select sum(goodsnum)   from  myshoppingcar  where  userid =$userid";

    $result = mysql_query($sql);

    $item = mysql_fetch_array($result);


    $obj["sum"] = $item["0"];

    // echo json_encode($obj);

    // $obj["sum"] = "goodsnum=goodsnum"+$goodsnum;

} else {
    $obj["code"] = 0;
    $obj["msg"] = "加入失败";
}

echo json_encode($obj);
