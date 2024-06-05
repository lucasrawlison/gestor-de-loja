function loadProduct(productId){
    data = {
        "query": `SELECT * FROM products WHERE id='${productId}' ORDER BY id`
    }
    var loadingScreen = document.getElementById("loadingScreen");
    if(!loadingScreen.classList.contains("show")){
        loadingScreen.classList.add("show");
    }
        
    console.log("aqui");
    
    fetch("scripts/getProducts.php", {method:"POST", headers: {'Content-type':'application/json'}, body: JSON.stringify(data)})
        .then(function(response){
            
            return response.json();
        })

        .then(function(product){
            var product = product[0];
            var loadingScreen = document.getElementById("loadingScreen");
            loadingScreen.classList.remove("show");
        })


}