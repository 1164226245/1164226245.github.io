<?php
require_once 'config.php';

$id = $_GET['id'];

$sql = "DELETE FROM myshoppingcar WHERE id='$id'";

$result = mysql_query($sql);
//mysql_affected_rows
$arr = mysql_affected_rows();

// echo json_encode($arr);

$data = array();

if ($arr) {

    $data['code'] = 1;

    $data['msg'] = "删除成功";

    $data['data'] = true;

} else {
    $data['code'] = 0;

    $data['msg'] = "删除失败";

    $data['data'] = false;
}

echo json_encode($data);
