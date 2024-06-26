<?php
include("dbConnect.php");

$json = file_get_contents('php://input');
$data = json_decode($json, true);
// $data['query'] = "SELECT * FROM products ORDER BY id";
$productId = $data['productId'];
$query = "UPDATE products SET deletado=1 WHERE id='$productId'";

if($connect->query($query)){
    $response['status'] = 1;
}else{
    $response['status'] = 0;
}

echo json_encode($response);


?>