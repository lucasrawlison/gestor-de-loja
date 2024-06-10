function saveProduct(id){
    var titulo = document.getElementById("productTitle").textContent;
    var departamento = document.getElementById("productDepartamento").value;
    var tipo = document.getElementById("productTipo").value;
    var sexo = document.getElementById("productSexo").value;

    data = {
        "titulo" : titulo,
        "id" : id,
        "departamento" : departamento,
        "tipo" : tipo,
        "sexo" : sexo
    }

    
}