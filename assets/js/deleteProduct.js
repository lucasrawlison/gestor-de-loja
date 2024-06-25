function deleteProduct(productId) {
    var deleteProductBg = document.getElementById("deleteProductBg");
    var deleteMsg = document.getElementById("deleteMsg");
    deleteMsg.textContent = `Deseja deletar o item de ID ${productId}?`;
    
    deleteProductBg.classList.add("show");

    var buttons = document.querySelectorAll(".choice-button");
    

    buttons.forEach(button => {
        button.addEventListener("click", function(){
            if(button.id === "no"){
                var deleteProductBg = document.getElementById("deleteProductBg");
                deleteProductBg.classList.remove("show");
            }
            if(button.id === "yes"){
                console.log("yes");
                
                data ={
                    "id" : productId
                }
                fetch("deleteProduct.php", {method: "POST", headers: {'Content-type': 'application/json'}, body: JSON.stringify(data)})
                    .then(function(response){
                        return response.json();
                    })
            
                    .then(function(data){
                        console.log(data)
                                
                    })




            }
        })
    });
    
    
    
    
    
    


}
deleteProduct()