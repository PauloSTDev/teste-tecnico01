const entrada = 30;
var resultadoFinal = 0;

console.log("Entrada:", entrada);

//Função: Soma dos numeros menores que o entrada
function looping (divisor, numInput){
    var result = numInput;
    var somaDivisivel = divisor;
    //Lopping: Soma os valores enquanto for menor que o entrada
    while (somaDivisivel < numInput) {
        result =+ result + somaDivisivel;
        somaDivisivel =+ somaDivisivel + divisor;
    };
    //console.log("Resultado Final:", result);
    return result;
}

//Função: Inicia Validações
function validacao() {
    //Validação: Input divisivel tanto por 3 quanto por 5
    if ((entrada%3 == 0) && (entrada%5 == 0)) {
        console.log("Divisivel por 3 e por 5!");
        var resultadoDivTres = looping(3, entrada);
        var resultadoDivCinco = looping(5, entrada);
        resultadoFinal = resultadoDivCinco + resultadoDivTres;
        return console.log("Resultado Final:",resultadoFinal);
    }
    
    //Validação: entrada divisivel apenas por 3
    if (entrada%3 == 0 && entrada%5 != 0){
        console.log("Divisivel apenas por 3!");
        return console.log("Resultado Final:",resultadoFinal = looping(3, entrada));
    }
    
    //Validação: entrada divisivel apenas por 5
    if (entrada%5 == 0 && entrada%3 != 0){
        console.log("Divisivel apenas por 5!");
        return console.log("Resultado Final:",resultadoFinal = looping(5, entrada));
    }
    
    //Validação: Input indivisivel tanto por 3 quanto por 5
    else{
        console.log("Não é divisivel");
    }
}

//Executa o programa
validacao();