function optionSelect(optionName){
    // console.log(optionName);
    hideScreens();
    screen = document.getElementById(optionName + "Screen");
    screen.classList.add("show");
}

function hideScreens(){
    var screens = document.querySelectorAll(".screen");
    screens.forEach(screen => {
        screen.classList.remove("show");
    });
}