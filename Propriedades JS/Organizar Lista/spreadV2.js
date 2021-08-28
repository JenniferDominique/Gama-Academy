let lista = [1, 2, 5];
let listaIncluir = [3 , 4];
//Resultado esperado: [1, 2, 3, 4, 5]

const listaResult = [1, 2, ...listaIncluir,5]
// ... - spread operator

console.log(listaResult);