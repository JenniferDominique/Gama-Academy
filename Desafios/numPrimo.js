//Descobrir qual é o milésimo primeiro número primo

//Num. primo = somente divisível por 1 e por ele mesmo

let primosEncontrados = 0;
let dividendo;
let ehPrimo;

for(dividendo = 2; primosEncontrados < 1001; dividendo++){

    ehPrimo = true;

    for(let divisor = 2; dividendo > divisor; divisor++){
        if(dividendo % divisor == 0){
            ehPrimo = false;
            break;
        }
    }

    if(ehPrimo == true){
        primosEncontrados ++;
    }
}

console.log(`O 1001º numero primo é ${--dividendo}`)
// --dividendo
//O -- eh antes porque
//Altera a ordem de prioridade
//Primiro ele decrementa e depois imprime o console.log


