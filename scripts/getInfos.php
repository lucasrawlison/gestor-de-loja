<?php
include("dbConnect.php");

$json = file_get_contents('php://input');
$data = json_decode($json, true);


$query = "SELECT * FROM departamentos ORDER BY id";
$query2 = "SELECT * FROM tipos ORDER BY id";


$response = $connect->query($query);
$i=0;
while($departamento = $response->fetch_assoc()){
    $departamentos[$i] = $departamento;
    $i++;
}

$response2 = $connect->query($query2);
$cont=0;
while($tipo = $response2->fetch_assoc()){
    $tipos[$cont] = $tipo;
    $cont++;
}

$return["tipos"] = $tipos;
$return["departamentos"] = $departamentos;


echo json_encode($return);




?>