<?php
include("dbConnect.php");
if($_SERVER['REQUEST_METHOD'] == "POST"){
    $productId = $_POST["productId"];

// conta qtd arquivos
    $length = count($_FILES["images"]["name"]);
    // echo $length;


    $uploadDir = "../uploads/products_images/" . $productId . "/"; //seta o diretório de upload
    $dir = "uploads/products_images/" . $productId . "/"; //localização do diretório para inserir no banco de dados

// checa a existência do diretório
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true); //cria o diretório caso não exista
    }

// ----------------------

    
    for ($i=0; $i < $length; $i++) { 
        // echo json_encode($_FILES["images"]["tmp_name"][$i]);
        $fileName = $_FILES["images"]["name"][$i]; //captura o nome do arquivo no array

        $fileType = pathinfo($fileName, PATHINFO_EXTENSION); //pega o nome do arquivo e separa apenas a extensão

        $newFileName = uniqid() . "." . $fileType; //cria um novo nome aleatório para o arquivo

        $target = $uploadDir . $newFileName; //define o local de salvar o arquivo


        if(move_uploaded_file($_FILES["images"]["tmp_name"][$i], $target)){  // executa e testa se o upload deu certo
            $path = "https://hardteste-sheetonline.shop/" . $dir . $newFileName; //localização onde a imagem será salva, junto com o nome do arquivo
            $query = "INSERT INTO imagens (bem_id, path, nome) VALUES ('$productId', '$path', '$newFileName')";
            $return = $connect->query($query);

            $query2 = "UPDATE products SET img=1 WHERE id = '$productId'";
            $return2 = $connect->query($query2);
                      
            
            
            echo "Arquivo enviado com sucesso";

        }else{
            echo "Erro no envio do arquivo";
        }
    }
    

}

?>