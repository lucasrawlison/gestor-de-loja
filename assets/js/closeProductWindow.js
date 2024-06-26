function closeProductWindow(){
    var window = document.getElementById("productScreenBg");
    optionSelect("cadastro");
    unsetFiles();
    window.classList.remove("show");
    getProducts();
}