<?php

@require_once "../config.php";

$id = $_GET["id"];

$consignee = $_GET["consignee"];

$region = $_GET["region"];

$address = $_GET["address"];

$housenumber = $_GET["housenumber"];

$phone = $_GET["phone"];

$fixedphone = $_GET["fixedphone"];

$email = $_GET["email"];

$label = $_GET["label"];

$sql = "SELECT * from  address WHERE id='$id' AND consignee = '$consignee' AND region='$region' AND address='$address'  AND housenumber='$housenumber'  AND phone='$phone'  AND fixedphone='$fixedphone'  AND email='$email'  AND label='$label'";

$result = mysql_query($sql);

$arr = mysql_affected_rows(); 

$arr = mysql_fetch_array($result);

if ($arr) {

    $str = "SELECT * from  address WHERE id='$id' AND consignee = '$consignee' AND address='$address'  AND housenumber='$housenumber'  AND phone='$phone'  AND fixedphone='$fixedphone'  AND email='$email'  AND label='$label'";

    mysql_query($str);

    $count = mysql_affected_rows();

    $data = array();

    if ($count > 0) {

        $data['code'] = 0;

        $data['msg'] = "地址修改失败";

        $data['data'] = true;

    } else {
        $data['code'] = 1;

        $data['msg'] = "地址修改成功";

        $data['data'] = false;

    }

    echo json_encode($data);

} else {
   
    $str = "UPDATE address set consignee = '$consignee', region = '$region',address='$address',
    housenumber='$housenumber',phone='$phone',fixedphone='$fixedphone',email='$email',label='$label' WHERE id ='$id'";

    mysql_query($str);

    $count = mysql_affected_rows();

    $data = array();

    if ($count > 0) {

        $data['code'] = 1;

        $data['msg'] = "地址修改成功";

        $data['data'] = true;

    } else {
        $data['code'] = 0;

        $data['msg'] = "地址修改失败";

        $data['data'] = false;

    }

    echo json_encode($data);

}


