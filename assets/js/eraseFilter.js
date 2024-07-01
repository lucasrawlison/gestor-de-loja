function eraseFilter(){
    var filterTitle = document.getElementById("filterTitle").value ="";
    var filterDepartamento = document.getElementById("filterDepartamento");
    var filterTipo = document.getElementById("filterTipo");
    var filterStatus = document.getElementById("filterStatus");

    filterDepartamento.selectedIndex = 0;
    filterTipo.selectedIndex = 0;
    filterStatus.selectedIndex = 0;
}