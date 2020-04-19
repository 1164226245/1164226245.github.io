<?php
@require_once("config.php");
$ids = $_GET["ids"];
$sql = "DELETE from myshoppingcar where id in ($ids)";
mysql_query($sql);

$count = mysql_affected_rows();

$obj=array();

if($count>0){
    $obj["code"]=1;
    $obj["msg"]="删除成功";
}else{
    $obj["code"]=0;
    $obj["msg"]="删除失败";
}
echo  json_encode($obj);

?>