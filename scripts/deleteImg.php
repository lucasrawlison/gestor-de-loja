<?php
include("dbConnect.php");

$json = file_get_contents('php://input');
$data = json_decode($json, true);
// $data['query'] = "SELECT * FROM products ORDER BY id";
$imgId = $data['imgId'];
$bem_id = $data['bemId'];

$query = "UPDATE imagens SET deletado=1 WHERE id='$imgId'";

if($connect->query($query)){
    $response['status'] = 1;
}else{
    $response['status'] = 0;
}



$query2 = "SELECT * FROM imagens WHERE bem_id='$bem_id' AND deletado=0 LIMIT 1";
$result = $connect->query($query2);

if($result->num_rows > 0){
    $response['imgStatus'] = 1;
}else{
    $response['imgStatus'] = 0;
    $query3 = "UPDATE products SET img=0 WHERE id='$bem_id'";
    if($connect->query($query3)){
        $response['status'] = 1;
    }else{
        $response['status'] = 0;
    }
}

echo json_encode($response);

?>