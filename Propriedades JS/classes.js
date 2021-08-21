class CarrinhoDeCompra {
    itens = []
    valorTotalDaCompra = 0

    adicionarItem (item, valor){
        this.itens.push(item); 
        //Push - adiciona um novo item na lista na ultima posicao
        this.valorTotalDaCompra = this.valorTotalDaCompra + valor;
    }

    removerItem (item, valor){
        const index = this.itens.indexOf(item);
        //Descobrindo o index do item na lista de itens
        this.itens.splice(index, 1); 
        //Remove um item da lista e atualiza a lista com esses valores
        //splice(o indice do primeiro item a ser removido, quantidade de intens a ser removido)

        this.valorTotalDaCompra -= valor;
    }

    darDesconto(porcentagem){
        this.valorTotalDaCompra = this.valorTotalDaCompra - ((this.valorTotalDaCompra * porcentagem) / 100);
        console.log("Desconto adicionado");
        console.log("Novo valor é R$", this.valorTotalDaCompra);
    }
}

class Supermercado{
    pessoasDentro = [];

    abrirPortaPara(pessoa){
        this.pessoasDentro.push(pessoa);
    }
}

class Produto{
    peso = 0
    valor = 0
}

//-------Produto--------
const pao = new Produto();
pao.peso(50);
pao.valor(1.50);

const leite = new Produto();
leite.valor(4.50);
leite.peso(1);


//_________Carrinho da Luiza_________________

const carrinhoDaLuiza = new CarrinhoDeCompra()

carrinhoDaLuiza.adicionarItem("Jabuticaba", 12);
carrinhoDaLuiza.adicionarItem("Pão de queijo", 2,50);
carrinhoDaLuiza.adicionarItem("Refrigerante", 5);
carrinhoDaLuiza.adicionarItem("Bolacha recheada", 1.5);

console.log(carrinhoDaLuiza.itens);
console.log("R$", carrinhoDaLuiza.valorTotalDaCompra);

carrinhoDaLuiza.removeItem("Refrigerante", 5);

console.log(carrinhoDaLuiza.itens);
console.log("R$", carrinhoDaLuiza.valorTotalDaCompra);


//_________Carrinho do Juca_________________

const carrrinhoDoJoao = new CarrinhoDeCompra();

carrrinhoDoJoao.adicionarItem("Abacate", 3);

console.log(carrrinhoDoJoao.itens);
console.log(carrrinhoDoJoao.valorTotalDaCompra);
