<?php
include("dbConnect.php");

$json = file_get_contents('php://input');
$data = json_decode($json, true);


$query = "SELECT * FROM departamentos ORDER BY id";


$response = $connect->query($query);
$i=0;
while($departamento = $response->fetch_assoc()){
    $departamentos[$i] = $departamento;
}

echo json_encode($departamentos);


?>