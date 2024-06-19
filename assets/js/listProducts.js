function getProducts(){


data = {
    "query": "SELECT * FROM products ORDER BY id"
}

fetch("scripts/getProducts.php", {method:"POST", headers: {'Content-type':'application/json'}, body: JSON.stringify(data)})
    .then(function(response){
        return response.json();
    })

    .then(function(products){
        console.log(products);
        
        var list = document.getElementById("list-body");
        
        products.forEach(product => {
            list.innerHTML += 
            `
            <div class="list-row" ondblclick="loadProduct(${product.id});">
            <div class="row-container"><span>${product.id}</span></div>
            <div class="row-container"><span>${product.titulo}</span></div>
            <div class="row-container"><span>${product.departamento}</span></div>
            <div class="row-container"><span>${product.tipo}</span></div>
            <div class="row-container"><span>${convertNumber(product.valor)}</span></div>
            </div>
            `
        });
        
    })

    .catch(error => {
        console.log(error);
        alert('Falha na leitura dos produtos')
    });


}

getProducts();


