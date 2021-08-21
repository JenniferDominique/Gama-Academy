//Faça um script que receba uma data no formato
//"dd/mm/aaaa" e escreva a data por extenso.
//Ex.: para a entrada "22/04/1983" deve ser escrito
//"22 de abril de 1983"

dataPorExtenso = data => {
    dataLista= data.split('/');
    //console.log(dataLista);
    
    dia = dataLista[0];
    mes = parseInt(dataLista[1]);
    ano = dataLista[2];

    let meses = ["janeiro", 'fevereiro','março', 'abril', 'maio', 'junho', 'julho', 'agosto','setembro','outubro','novembro','dezembro'];

    console.log(`${dia} de ${meses[mes - 1]} de ${ano}`);
    //[mes - 1] para acessar a posicao do array
}

dataPorExtenso('22/01/1983');
dataPorExtenso('14/03/2001');
dataPorExtenso('21/08/2021');