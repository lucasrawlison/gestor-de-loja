function deleteImg(id, bemId){
    var data = {
        "imgId" : id,
        "bemId" : bemId
    };

    fetch("scripts/deleteImg.php", {method: "POST", headers: {'Content-type': 'application/json'}, body: JSON.stringify(data)})
        .then(function(response){
            return response.json();    
        })
        
        .then(function(response){
            console.log(response);   
            var imgDiv = document.getElementById(`img_${id}_bem_${bemId}`);
            imgDiv.remove();
        })

        .catch(error => {
            console.log(error);
        });
    


        
}