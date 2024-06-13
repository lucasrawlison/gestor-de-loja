function loadProduct(productId){
    if(!productId){
        console.log("sem id");
        var productScreenBg = document.getElementById("productScreenBg");
        productScreenBg.classList.add("show");
        var loadingScreen = document.getElementById("loadingScreen");

        var productTitle = document.getElementById("productTitle");
        var idDesc = document.getElementById("productId");
        var productDepartamento = document.getElementById("productDepartamento");
        var productTipo = document.getElementById("productTipo");
        var productSexo = document.getElementById("productSexo");
        var saveButtonContainer = document.getElementById("saveButtonContainer");

        productTitle.value = "";
        productDepartamento.innerHTML = `
        <option value="">--Selecione--</option>
        <option value="Roupa">Roupa</option>
        <option value="Calçado">Calçado</option>
        `;
        productTipo.innerHTML = `
        <option value="">--Selecione--</option>
        <option value="Regata">Regata</option>
        <option value="Camisa">Camisa</option>
        `;
        productSexo.innerHTML = `
        <option value="">--Selecione--</option>
        <option value="">Masculino</option>
        <option value="">Feminino</option>
        `;

          saveButtonContainer.innerHTML = `<div id="saveButton" onclick="saveProduct();">SALVAR</div>`


        idDesc.textContent = "# Novo Produto"
        loadingScreen.classList.remove("show");
    }else{
    
    
    
    data = {
        "query": `SELECT * FROM products WHERE id='${productId}' ORDER BY id`
    }
    var loadingScreen = document.getElementById("loadingScreen");
    if(!loadingScreen.classList.contains("show")){
        loadingScreen.classList.add("show");
    }
    var productScreenBg = document.getElementById("productScreenBg");

    productScreenBg.classList.add("show");
        
    console.log("aqui");
    
    fetch("scripts/getProducts.php", {method:"POST", headers: {'Content-type':'application/json'}, body: JSON.stringify(data)})
        .then(function(response){
            
            return response.json();
        })

        .then(function(product){
            var product = product[0];
            var loadingScreen = document.getElementById("loadingScreen");
            var productTitle = document.getElementById("productTitle");
            var productId = document.getElementById("productId");
            var productDepartamento = document.getElementById("productDepartamento");
            var productTipo = document.getElementById("productTipo");
            var productSexo = document.getElementById("productSexo");
            var saveButtonContainer = document.getElementById("saveButtonContainer");

            










            saveButtonContainer.innerHTML = `<div id="saveButton" onclick="saveProduct(${product.id})">SALVAR</div>`

            productSexo.innerHTML =
            `
            <option value="${product.sexo}">${product.sexo}</option>`;

            productTipo.innerHTML = 
            `
            <option value="${product.tipo}">${product.tipo}</option>
            `;

            productDepartamento.innerHTML = 
            `
            <option value="${product.departamento}">${product.departamento}</option>
            `;

            productId.textContent = `Product ID: #${product.id}`;
            productTitle.value = product.titulo;



            loadingScreen.classList.remove("show");
        })

    }
}