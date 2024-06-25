<?php
include("dbConnect.php");

$json = file_get_contents('php://input');
$data = json_decode($json, true);
// $data['query'] = "SELECT * FROM products ORDER BY id";

$query = "DELETE FROM products WHERE id='$_POST['id']'";

if($connect->query($query)){
    $response['status'] = 1;
}else{
    $response['status'] = 0;
}

$queryReturn = "SELECT * FROM products ORDER BY id DESC";
$return = $connect->query($queryReturn);
$product = $return->fetch_assoc();
$response["id"] = $product["id"];



echo json_encode($response);


?>