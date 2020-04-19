<?php
@require_once("config.php");

$num  = $_GET["num"];

$id = $_GET["id"];

$sql = "update  myshoppingcar SET goodsnum = goodsnum+($num) where  id=$id";

//echo  $sql;

mysql_query($sql);

$count = mysql_affected_rows();

$obj = array();

if($count>0){
    
    $obj["code"]=1;

    $obj["msg"]="更新成功";

}else{

    $obj["code"]=0;

    $obj["msg"]="更新失败"; 
}

echo  json_encode($obj);

?>