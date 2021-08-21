class Ecommerce{
    produts
    loggedUsers

    constructor(produts){
        this.produts = produts
    }

    addProduct(product){
        this.produts.push(product);
    }
}

module.exports = Ecommerce;