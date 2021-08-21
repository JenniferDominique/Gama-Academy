// Desejo procurar um texto com estrutura específica
//dentro de uma mensagem desestruturada

const textoNaoEstruturado = 'Meu CPF é 123.456.789-12';

const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');
//formato da mensagem a ser identificada

console.log(textoNaoEstruturado.match(regex));

//Resposta:
//["123.456.789-12"]