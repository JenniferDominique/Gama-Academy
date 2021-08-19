//Criar uma calculadora com todas as funcoes possiveis

//Soma
const soma = function (a, b){
    return a + b;
}

//Subtracao
const subtracao = (a, b) =>{
    return a - b;
}

//Multiplicacao
const multiplicacao = (a, b) =>{
    return a * b;
}

//Divisao
const divisao = (a, b) =>{
    return a / b;
}

//Resto da divisao
const restoDivisao = (a, b) =>{
    return a % b;
}

//Potencia
const potencia = (a, b) =>{
    return a ** b;
}

//Porcentagem
const porcentagem = (porcentagem, valor) =>{
    return (valor * porcentagem) / 100;
}

//__________Execucoes e Resultados_______________
console.log("_______Resultados________");
r = 10
e = 3
s = 4
p = 50

console.log(`${e} + ${s} = ${soma(e, s)}`);
console.log(`${p} - ${s} = ${subtracao(p, s)}`);
console.log(`${s} x ${r} = ${multiplicacao(s, r)}`);
console.log(`${p} / ${s} = ${divisao(p, s)}`);
console.log(`Resto de ${p} / ${e} = ${restoDivisao(p, e)}`);
console.log(`${s} ^ ${e} = ${potencia(s, e)}`);
console.log(`${r} % de ${p} = ${porcentagem(r, p)}`);