<?php
include("dbConnect.php");

$json = file_get_contents('php://input');
$data = json_decode($json, true);
// $data['query'] = "SELECT * FROM products WHERE id = 10 ORDER BY id";
// $data['img'] = 1;
$query = $data['query'];
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

echo json_encode($products);


?>