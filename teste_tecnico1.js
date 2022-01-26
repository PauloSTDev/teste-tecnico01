const entrada = 10;
var resultadoFinal = 0;

//Apresenta a entrada
console.log("Entrada:", entrada);

//Função: Somar os divisores
function somarDivisor(a, b) {
    const somaFixa = a;
    while(a < b) {
        resultadoFinal = a + resultadoFinal;
        //console.log("Somando:", a);
        //console.log("Resultado:", resultadoFinal);
        a = a + somaFixa;
    }
}

//Função: Soma dos numeros divisores de 3 e 5 menores que a entrada
function executarPrograma (primeiroDivisor, segundoDivisor, numInput){

    //Soma os divisores de 3
    somarDivisor(primeiroDivisor, numInput);

    //Soma os divisores de 5
    somarDivisor(segundoDivisor, numInput);

    //Apresenta a resultado final
    console.log("Resultado Final:", resultadoFinal);
}

//Executa o programa
executarPrograma(3, 5, entrada);
