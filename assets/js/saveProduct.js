function saveProduct(id){
    if(!id){
        var status = document.getElementById("productStatus").value;
        var titulo = document.getElementById("productTitle").value;
        var departamento = document.getElementById("productDepartamento").value;
        var tipo = document.getElementById("productTipo").value;
        var sexo = document.getElementById("productSexo").value;
        var productValue = convertValue(document.getElementById("productValue").value);
        var productPreviousValue = convertValue(document.getElementById("productPreviousValue").value);
    
        data = {
            "status" : status,
            "titulo" : titulo,
            "departamento" : departamento,
            "tipo" : tipo,
            "sexo" : sexo,
            "valor" : productValue,
            "valorAnterior" : productPreviousValue
        }

        var loadingScreen = document.getElementById("loadingScreen");
        if(!loadingScreen.classList.contains("show")){
            loadingScreen.classList.add("show");
        }
        
        fetch("scripts/createProduct.php", {method:"POST", headers: {'Content-type':'application/json'}, body: JSON.stringify(data)})
        .then(function (response){
            
            return  response.json();
        })

        .then(function (response){
            console.log(response);
            loadProduct(response.id);
        })

        .catch(error => {
            console.error("erro", error);
            alert('Falha ao tentar salvar o produto')
        });
        

    }else{

    

    var titulo = document.getElementById("productTitle").value;
    var departamento = document.getElementById("productDepartamento").value;
    var tipo = document.getElementById("productTipo").value;
    var sexo = document.getElementById("productSexo").value;
    var productValue = convertValue(document.getElementById("productValue").value);
    var productPreviousValue = convertValue(document.getElementById("productPreviousValue").value);
        
    data = {
        "titulo" : titulo,
        "id" : id,
        "departamento" : departamento,
        "tipo" : tipo,
        "sexo" : sexo,
        "valor" : productValue,
        "valorAnterior" : productPreviousValue

    }
    
    var loadingScreen = document.getElementById("loadingScreen");
    if(!loadingScreen.classList.contains("show")){
        loadingScreen.classList.add("show");
    }

    fetch("scripts/saveProduct.php", {method:"POST", headers: {'Content-type':'application/json'}, body: JSON.stringify(data)})
        .then(function (response){
            return  response.json();
        })

        .then(function (response){
            loadProduct(id);
            loadingScreen.classList.remove("show");
        })
    }

}