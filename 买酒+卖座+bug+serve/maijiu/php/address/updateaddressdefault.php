<?php
@require_once "../config.php";

// id: address_id,
// userid: loginId
$id = $_GET["id"];

$userid = $_GET["userid"];

// $sql = "SELECT isdefault from  address where id =$id and userid='$userid'";

$sql = "SELECT isdefault from  address where userid='$userid'";

$result = mysql_query($sql);

$item = mysql_fetch_array($result);

// echo json_encode($item);
// die();

if ($item[0] > 0) {
    // $str = "insert into myshoppingcar(userid,goodsid,goodsname,goodsnum,goodsprice,goodsimg) values ($userid,$goodsid,'$goodsname',$goodsnum,$goodsprice,'$goodsimg')
    // ";
    $str = "UPDATE address  SET isdefault = '0' where userid='$userid'";
  
} else {
  
    $str = "UPDATE address  SET isdefault = '1' where  id=$id";
}
mysql_query($str);

$count = mysql_affected_rows();

$obj = array();

if ($count > 0) {
    $obj["code"] = 1;
    $obj["msg"] = "设置默认地址成功";
} else {
    $obj["code"] = 0;

    $obj["msg"] = "设置默认地址失败";
}
echo json_encode($obj);
