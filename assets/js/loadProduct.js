function loadProduct(productId){
    if(!productId){
        var loadingScreen = document.getElementById("loadingScreen");
        if(!loadingScreen.classList.contains("show")){
            loadingScreen.classList.add("show");
        }
        console.log("sem id");
        var productScreenBg = document.getElementById("productScreenBg");
        productScreenBg.classList.add("show");

        fetch("scripts/getInfos.php")
        .then(function(response){
            
            return response.json();
        })

        .then(function(response){
            console.log(response.departamentos);
            var loadingScreen = document.getElementById("loadingScreen");
    
            var productTitle = document.getElementById("productTitle");
            var idDesc = document.getElementById("productId");
            var productDepartamento = document.getElementById("productDepartamento");
            var productStatus = document.getElementById("productStatus");
            var productTipo = document.getElementById("productTipo");
            var productSexo = document.getElementById("productSexo");
            var productValue = document.getElementById("productValue");
            var productPreviousValue = document.getElementById("productPreviousValue");
            var saveButtonContainer = document.getElementById("saveButtonContainer");
    
    
    
    
    
            productValue.value = "R$ 0,00";
            productPreviousValue.value = "R$ 0,00";
            productTitle.value = "";
    
    
            productStatus.innerHTML = 
            `
            <option value="">--Selecione--</option>
            <option value="Disponível">Disponível</option>
            <option value="Esgotado">Esgotado</option>
            <option value="Rascunho">Rascunho</option>
            `;
    
            productDepartamento.innerHTML = 
            `
            <option value="--Selecione--">--Selecione--</option>
            `;
            
            response.departamentos.forEach(departamento => {
                
                if(departamento.titulo != response.departamento){
                    productDepartamento.innerHTML += 
                    `
                    <option value="${departamento.titulo}">${departamento.titulo}</option>
                    `;
                    
                }
                
                
            });
            productTipo.innerHTML = `
            <option value="">--Selecione--</option>
            <option value="Regata">Regata</option>
            <option value="Camisa">Camisa</option>
            `;
            productSexo.innerHTML = `
            <option value="">--Selecione--</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            `;
    
              saveButtonContainer.innerHTML = `<div id="saveButton" onclick="saveProduct();">SALVAR</div>`
    
            idDesc.textContent = "# Novo Produto"
            switchInputOptions(productDepartamento, response.departamentos, response.tipos, productTipo);
    
            loadingScreen.classList.remove("show");
        })


    }else{
    
    console.log(productId);
    
    data = {
        "productId" : productId,
        "img": 1
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

            console.log(product);
            var loadingScreen = document.getElementById("loadingScreen");
            var productTitle = document.getElementById("productTitle");
            var productId = document.getElementById("productId");
            var productDepartamento = document.getElementById("productDepartamento");
            var productStatus = document.getElementById("productStatus");
            var productTipo = document.getElementById("productTipo");
            var productSexo = document.getElementById("productSexo");
            var saveButtonContainer = document.getElementById("saveButtonContainer");
            var productValue = document.getElementById("productValue");
            var productPreviousValue = document.getElementById("productPreviousValue");
            var productPreviousValue = document.getElementById("productPreviousValue");
            var picturesDisplay = document.getElementById("picturesDisplay");
            var fileSubmitContainer = document.getElementById("fileSubmitContainer");
            fileSubmitContainer.setAttribute("productId", product.id);
            
            


            
            
            
            
            
            
            saveButtonContainer.innerHTML = `<div id="saveButton" onclick="saveProduct(${product.id})">SALVAR</div>`

            productStatus.innerHTML = 
            `
            <option value="${product.status}">${product.status}</option>
            `;
            
            productSexo.innerHTML =
            `
            <option value="${product.sexo}">${product.sexo}</option>`;
            
            
            productDepartamento.innerHTML = 
            `
            <option value="${product.departamento}">${product.departamento}</option>
            `;
            
            product.departamentos.forEach(departamento => {
                
                if(departamento.titulo != product.departamento){
                    productDepartamento.innerHTML += 
                    `
                    <option value="${departamento.titulo}">${departamento.titulo}</option>
                    `;
                    
                }
                
                
            });
            
            
            productTipo.innerHTML = 
            `
            <option value="${product.tipo}">${product.tipo}</option>
            `;

            product.types.forEach(tipo => {
            
                if(tipo.titulo != product.tipo){
                    productTipo.innerHTML += 
                    `
                    <option value="${tipo.titulo}">${tipo.titulo}</option>
                    `;
                    
                }
                
                
            });



            
            
            
            
            
            
            
            
            picturesDisplay.innerHTML= "";
            
            
            if('image' in product){
                
                product.image.forEach(image => {
                    picturesDisplay.innerHTML += 
                    `
                    <div class="pictures-container">
                    <img src="${image.path}" alt="image_${image.nome}">
                    </div>
                    `;
                });
                
                picturesDisplay.innerHTML += 
                `
                <form id="fileForm" class="add-picture" action="">
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                </svg>
                <input type="file" name="fileInput" id="fileInput" accept="image/jpg, image/png, image/jpeg" placeholder="">
                <span id="fileName"></span>
                
                </form>
                `;
            }else{
                picturesDisplay.innerHTML += 
                `
                <form id="fileForm" class="add-picture" action="">
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                </svg>
                <input type="file" name="fileInput" id="fileInput" accept="image/jpg, image/png, image/jpeg" placeholder="">
                <span id="fileName"></span>
                
                
                </form>
                `;
            }
            
            
            
            
            
            productId.textContent = `Product ID: #${product.id}`;
            productTitle.value = product.titulo;
            productValue.value = convertNumber(product.valor); 
            productPreviousValue.value = convertNumber(product.valor_anterior);
            
            switchInputOptions(productDepartamento, product.departamentos, product.types, productTipo);
            fileReader();
            loadingScreen.classList.remove("show");
            
        })
        
        .catch(error => {
            console.error("erro", error);
            alert('Falha ao tentar carregar o produto')
        });
        
        
        
    }
}

function convertNumber (number){
    
    number = Number(number).toFixed(2);
    number = "R$ " + number.slice(0, -3) + "," + number.slice(-2);
    return number;

}

function switchInputOptions(productDepartamento, departamentos, tipos, productTipo){
    productDepartamento.addEventListener("input", function(){
        productTipo.innerHTML = "";
        departamentos.forEach(departamento => {
            if(productDepartamento.value == departamento.titulo){
                var departamentoId = departamento.id;
                console.log(departamentoId);

                tipos.forEach(tipo => {
                    if(tipo.departamento_id == departamentoId){
                        console.log(tipo.titulo);
                        console.log(productTipo);
                        productTipo.innerHTML += `<option value="${tipo.titulo}">${tipo.titulo}</option>`;
                    }
                })
                    
                
            }
        });

    })
    

}

