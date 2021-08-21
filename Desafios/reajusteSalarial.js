// A gerência resolveu aumentar o salários de seus colaboradores,
//porém a porcentagem de aumento será proporcional ao antigo salário
//com os seguintes critérios:

//Salários até R$280 (incluido): aumento de 20%
//Salários entre R$280 e R$700: aumento de 15%
//Salários entre R$700 e R$1500: aumento de 10%
//Salários de R$1500 em diante: aumento de 5%

reajusteSalarial = salarioAntigo => {
    console.log(`Antigo salário era R$ ${salarioAntigo}`);
    let porcentagem;
    
    if (salarioAntigo <= 280){
        porcentagem = 20;
    }
    else if(salarioAntigo <= 700){
        porcentagem = 15;
    }
    else if(salarioAntigo <= 1500){
        porcentagem = 10;
    }
    else{
        porcentagem = 5;
    }

    let aumento = (salarioAntigo * porcentagem)/100;
        
    console.log(`Irá receber o aumento de ${porcentagem} %`);
    console.log(`Terá um aumento de R$ ${aumento}`);
    console.log(`Novo salário é R$ ${salarioAntigo + aumento}`);
    console.log("_______________________________________");
}

reajusteSalarial(280);
reajusteSalarial(586);
reajusteSalarial(1200);
reajusteSalarial(2500);