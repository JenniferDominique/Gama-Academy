let lista = [1, 2, 5];
let listaIncluir = [3 , 4];
//Resultado esperado: [1, 2, 3, 4, 5]

for (let i = 0; i < listaIncluir.length; i++){
    
    for (let j = 0; j < lista.length; j++){
        if(lista[j] >= listaIncluir[i]){
            lista.splice(j, 0, listaIncluir[i]);
            //splice - funcao do js para inserir itens em uma lista em posicoes estrategicas
            //vou pegar na posicao j, 
            //eu nao quero remover nada (0), 
            //mas incluir o item na posicao i da lista listaIncluir
            j++;
        }
    }
}

console.log(lista);