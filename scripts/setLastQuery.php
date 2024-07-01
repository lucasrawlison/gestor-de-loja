<?php
session_start();
include("dbConnect.php");
$json = file_get_contents('php://input');
$data = json_decode($json, true);








$query = $data['query'];

$_SESSION['lastQuery'] = $query;

if(isset($_SESSION['lastQuery'])){
    $response = 0;
    echo json_encode($_SESSION['lastQuery']);
}
?>