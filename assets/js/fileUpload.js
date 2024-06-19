function fileUpload(){
    var files = fileAdd();
    console.log(files);
    var qtd = files.length;
    var cont = 0;
    var formData = new FormData();

    
    files.forEach(file => {
        formData.append('images[]', file);
        cont++
    });
    
    formData.append('length[]', qtd);
    console.log(formData);

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

