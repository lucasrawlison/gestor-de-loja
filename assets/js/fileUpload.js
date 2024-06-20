function fileUpload(){
    var files = fileAdd();
    console.log(files);
    var qtd = files.length;
    var formData = new FormData();

    
    files.forEach(file => {
        formData.append('images[]', file);
    });
    
    formData.append('length', qtd);
    console.log([...formData.entries()]);

    fetch("scripts/fileUpload.php", {method: "POST", body: formData})
        .then(function(response){
            return response.text();
        })
        
        .then(function(data){
            console.log(data);
        })

}

i=0;
var files = [];

function fileAdd(file){
    if(typeof file !== "undefined"){
        files[i] = file;
        console.log(files);
        i++
        return files;
        
    }else{
        return files;
    }
}

