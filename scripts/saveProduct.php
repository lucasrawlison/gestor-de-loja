<?php
include("dbConnect.php");

$json = file_get_contents('php://input');
$data = json_decode($json, true);
// $data['query'] = "SELECT * FROM products ORDER BY id";

$query = "UPDATE products SET titulo='$data[titulo]', tipo='$data[tipo]', departamento='$data[departamento]', sexo='$data[sexo]' WHERE id='$data[id]'";

if($connect->query($query)){
    $response = 1;
}else{
    $response = 0;
}



echo json_encode($response);


?>