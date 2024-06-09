function productSizeSelect(){
     var buttons = document.querySelectorAll(".button");
     buttons.forEach(button => {
        button.addEventListener("click", function(){
            if(!button.classList.contains("selected")){
                button.classList.add("selected");
            }else{
                button.classList.remove("selected");
            }

        
        })
    
    })
}

productSizeSelect();