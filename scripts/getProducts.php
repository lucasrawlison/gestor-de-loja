<?php
session_start();
include("dbConnect.php");
$json = file_get_contents('php://input');
$data = json_decode($json, true);
// $data['query'] = "SELECT * FROM products WHERE id = 10 ORDER BY id";
// $data['img'] = 1;


if (isset($data['productId'])){
    $productId = $data['productId'];
    $query = "SELECT * FROM products WHERE id='$productId' ORDER BY id DESC";
}else{

    $query = $_SESSION['lastQuery'];
}

$response = $connect->query($query);


if(isset($data['img'])){
    $products = $response->fetch_assoc();
    if($products['img'] == 1){

        $imgQuery = "SELECT * FROM imagens WHERE bem_id='$products[id]'";
        $imgResponse = $connect->query($imgQuery);
        $imgCont = 0;
        while($image = $imgResponse->fetch_assoc()){
            $images[$imgCont] = $image;
            $imgCont++;
        }
    
        $products['image'] = $images;
    }
}
else{
    $i=0;
    while($product = $response->fetch_assoc()){
        $products[$i] = $product;
        $i++;
    }

}

if (isset($data['productId'])){
    
    $depQuery = "SELECT * FROM departamentos ORDER BY id";
    
    $depResponse = $connect->query($depQuery);
    $depCont=0;
    while($departamento = $depResponse->fetch_assoc()){
        $departamentos[$depCont] = $departamento;
        $depCont++;
        
    }
    
    $products["departamentos"] = $departamentos;
    
    
    
    $typeQuery = "SELECT * FROM tipos ORDER BY id";
    
    $typeResponse = $connect->query($typeQuery);
    $typeCont=0;
    while($type = $typeResponse->fetch_assoc()){
        $types[$typeCont] = $type;
        $typeCont++;
    }
    
    $products["types"] = $types;

}


echo json_encode($products);


?>