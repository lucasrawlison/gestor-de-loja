<?php

if($_SERVER['REQUEST_METHOD'] == "POST"){
    if(isset($_FILES["images"])){
        echo json_encode($_FILES);
        $images = $_FILES["images"];
        $nameCont = count($images);
        
        echo json_decode($_FILES["length"]);
        echo json_encode($images["name"][0]);
        


        // echo json_encode($_FILES["images"]["name"][0]);
    }
}


?>