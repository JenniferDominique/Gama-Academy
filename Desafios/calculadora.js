//Criar uma calculadora com todas as funcoes possiveis

//Soma
const soma = function (a, b){
    return console.log(`${a} + ${b} = ${a + b}`);
}

//Subtracao
const subtracao = (a, b) =>{
    return console.log(`${a} - ${b} = ${a - b}`);
}

//Multiplicacao
const multiplicacao = (a, b) =>{console.log(`${a} x ${b} = ${a * b}`)}

//Divisao
const divisao = (a, b) =>{console.log(`${a} / ${b} = ${a / b}`)}

//Resto da divisao
const restoDivisao = (a, b) =>{console.log(`Resto de ${a} / ${b} = ${a % b}`)}

//Potencia
const potencia = (a, b) =>{console.log(`${a} ^ ${b} = ${a ** b}`)}

//Porcentagem
const porcentagem = (porcentagem, valor) =>{
    return console.log(`${porcentagem}% de ${valor} = ${(valor * porcentagem) / 100}`);
}

//Maior que
const maiorQue = (a, b) =>{console.log(`${a} > ${b} = ${a > b}`)}

//Menor que
const menorQue = (a, b) =>{console.log(`${a} < ${b} = ${a < b}`)}

//Igual a 
const igual = (a, b) =>{console.log(`${a} == ${b} = ${a == b}`)}

//__________Execucoes e Resultados_______________
console.log("_______Resultados________");

soma(78, 15);
subtracao(27, 13);
multiplicacao(78, 2);
divisao(80, 4);
restoDivisao(50, 4);
potencia(5, 2);
porcentagem(50, 200);
maiorQue(56, 65);
menorQue(26, 47);
igual(32, 23)