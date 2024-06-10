function loadProduct(productId){
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