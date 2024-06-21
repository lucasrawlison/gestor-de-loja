function fileUpload(){
    var fileSubmitContainer = document.getElementById("fileSubmitContainer");
    var productId = fileSubmitContainer.getAttribute("productId");
    var files = fileAdd();
    console.log(files);
    var qtd = files.length;
    var formData = new FormData();

    
    files.forEach(file => {
        formData.append('images[]', file);
    });
    
    formData.append('length', qtd);
    formData.append('productId', productId);
    console.log([...formData.entries()]);

    fetch("scripts/fileUpload.php", {method: "POST", body: formData})
        .then(function(response){
            return response.text();
        })
        
        .then(function(data){
            console.log(data);
            loadProduct(productId);
        })

}


var files = [];

function fileAdd(file){
    if(typeof file !== "undefined"){
        files.push(file);
        console.log(files);
        return files;
        
    }else{
        return files;
    }
}

function unsetFiles(){
    files =  [];
    console.log(files);
}

