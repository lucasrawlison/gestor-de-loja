function fileReader(){
    document.getElementById("fileInput").addEventListener("change", function(){
        console.log(document.getElementById("fileInput"));
        const file = this.files[0];
        console.log(file);
        fileAdd(file);
        var fileSubmitContainer = document.getElementById("fileSubmitContainer");
        
        if(!fileSubmitContainer.classList.contains("show")){
            fileSubmitContainer.classList.add("show");
        }
        document.getElementById("fileName").textContent = file.name;
        
        // ---------------- LEITOR ----------
        
        const reader = new FileReader();
        reader.onload = function(e){
            // console.log(e);
            var picturesDisplay = document.getElementById("picturesDisplay");
            var fileForm = document.getElementById("fileForm");
            fileForm.remove();
            
            picturesDisplay.innerHTML += 
            `
            <div id="i_${file.name}_${file.lastModified}" class="pictures-container">
            <span onclick="deleteTempImg('${file.name}', ${file.lastModified});" class="delete-image-bt">EXCLUIR</span>
            <img src="${e.target.result}" alt="image_${file.name}">
            <span class="img-description">${file.name}</span>
            </div>
            <form id="fileForm" class="add-picture" action="">
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                </svg>
                <input type="file" name="fileInput" id="fileInput" accept="image/jpg, image/png, image/jpeg" placeholder="">
                <span id="fileName"></span>
                
            </form>


            `
            fileReader();
        }
        
        reader.readAsDataURL(file);

    })

}
