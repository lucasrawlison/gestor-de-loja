var inputs = document.querySelectorAll(".moneyValueInput");
inputs.forEach(input =>{

    input.addEventListener("keydown", function(event){
        event.preventDefault();
        var keyPressed = event.key;
        console.log(keyPressed);
        if (!isNaN(keyPressed)){
            
            var currentValue = removeCaracters();
            if(currentValue.length <= 12){
                var currentValue = replaceNumber(currentValue, keyPressed);
                replaceValue(currentValue);
    
            }
        }
    
        if(keyPressed === "Backspace"){
            if(input.value == ""){
                input.value == "R$ 0,00";
            }else{
                var currentValue = removeCaracters();
                var currentValue = deleteNumber(currentValue);
                replaceValue(currentValue);
    
            }
        }
    })
    
    function deleteNumber(currentValue){
        if(currentValue.length === 3){
            var currentValue = `0${currentValue.slice(0, -1)}`;
        }else{
    
            var currentValue = currentValue.slice(0, -1);
        }
        return currentValue;
    }
    
    
    
    function removeCaracters(keyPressed){
    
        var value = input.value;
        var currentValue = value.replace(/R\$|\.|,|\s/g, '');
        console.log(currentValue);
        return currentValue;
    }
    
    function replaceNumber(currentValue, keyPressed){
        if(currentValue[0] === "0"){
            var sliced = currentValue.substring(1);
            var currentValue = `${sliced}${keyPressed}`;
            console.log(currentValue);
            return currentValue;
        }else{
            var currentValue = `${currentValue}${keyPressed}`;
            console.log(currentValue);
            return currentValue;
        }
    
    
    }
    
    function inserirPontos(string) {
        string = string.split('').reverse().join('');
        let novaString = [];
        let contador = 0;
        let contador2 = 0;
    
        if (string.length % 3 == 0){
            var limite = (string.length / 3 ) - 1;
            for (let char of string) {
                novaString.push(char);
                contador++;
                if (contador === 3 && contador2 < limite) {
                    contador2++
                    novaString.push('.');
                    contador = 0;
                }
            }
    
        }else{
            for (let char of string) {
                novaString.push(char);
                contador++;
                if (contador === 3) {
                    novaString.push('.');
                    contador = 0;
                }
            }
    
        }
    
    
        novaString = novaString.reverse();
        let resultado = novaString.join('');
        console.log(`O inteiro é :${resultado}`);
        return resultado;
    }
    
    function replaceValue(currentValue){
        var integer = currentValue.slice(0, -2);
        
        var integer = inserirPontos(integer);
        
        var cents = currentValue.slice(-2);
        var newValue = `R$ ${integer},${cents}`;
        input.value = newValue;
    
    }
})

