function saveProduct(id){
    if(!id){
        var titulo = document.getElementById("productTitle").value;
        var departamento = document.getElementById("productDepartamento").value;
        var tipo = document.getElementById("productTipo").value;
        var sexo = document.getElementById("productSexo").value;
    
        data = {
            "titulo" : titulo,
            "departamento" : departamento,
            "tipo" : tipo,
            "sexo" : sexo
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
            loadingScreen.classList.remove("show");
        })

    }else{

    



    var titulo = document.getElementById("productTitle").value;
    var departamento = document.getElementById("productDepartamento").value;
    var tipo = document.getElementById("productTipo").value;
    var sexo = document.getElementById("productSexo").value;

    data = {
        "titulo" : titulo,
        "id" : id,
        "departamento" : departamento,
        "tipo" : tipo,
        "sexo" : sexo
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
            console.log(response);
            loadingScreen.classList.remove("show");
        })
    }

}