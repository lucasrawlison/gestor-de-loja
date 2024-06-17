function convertValue(value){
    var currentValue = value.replace(/R\$|\.|,|\s/g, '');
    console.log(currentValue);
    var number = currentValue.slice(0, -2) + '.' + currentValue.slice(-2);
   
    return parseFloat(number);
}