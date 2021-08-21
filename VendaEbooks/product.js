class Product{
    name = "";
    valor = 0;
    author = "";
    categories = [];
    description = "";
    soldQuantity = 0
    

    /*
    constructor(name, valor){
        this.name = name;
        this.valor = valor;
    }
    */

    
    //Props ==> objeto
    constructor(product){
        this.name = product.name;
        this.valor = product.valor;
        this.author = product.author;
        this.categories = product.categories;
        this.description = product.description;
        this.soldQuantity = product.soldQuantity || 0;
    }
    

    /*
    //Desconstrutor
    constructor(product){
        this.attributes={
            ...this,
            ...product, //spead operator
        }
    }
    */
}

/*
const contosDoAmanha = new Product("Contos do Amanhã", 4);
console.log(contosDoAmanha);
*/

/*
const product = {
    name: "Contos do amanha",
    valor: 4,
    author: "Drácula",
    categories:[
        "ação",
        "suspense"
    ],
    description: "Um astronauta vai para a lua e encontra um portal"
}

const contosDoAmanha = new Product(product);
*/

/*
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
*/

module.exports = Product;