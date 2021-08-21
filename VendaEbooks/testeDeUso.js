const Product = require("./product");
const Ecommerce= require("./ecommerce");

const contosDoAmanha = new Product({
    name: "Contos do amanha",
    valor: 4,
    author: "Drácula",
    categories:[
        "ação",
        "suspense"
    ],
    description: "Um astronauta vai para a lua e encontra um portal"
});

console.log(contosDoAmanha);

const familiaAdams = new Product({
    name: "Histórica Familia Adams",
    valor: 4,
    author: "Drácula",
    categories:[
        "autobiografia",
        "suspense"
    ],
    description: "Contando a história da família Adams"
});

console.log(familiaAdams);

const ebookeria = new Ecommerce([contosDoAmanha, familiaAdams]);
console.log(ebookeria);

ebookeria.addProduct(new Product({
    name: "Mil e uma noites sem dormir",
    valor: 10,
    author: "Drácula",
    categories:[
        "romance",
        "aventura"
    ],
    description: "Contando os dias de um diario de vampiro sonâmbulo"
}));

