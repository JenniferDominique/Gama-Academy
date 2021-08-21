class BombaCombustivel{
   
    constructor(capacidade, preco){
        this.capacidade = capacidade;
        this.quantidade = capacidade; //quantidade que tem na bomba
        //Quando a bomba for criada ela já estará com a sua quantidade cheia até sua capacidade
        this.preco = preco; //por litro
    }

    //Encher a bomba (sempre encher por completo)
    encherBomba(){
               
        if (this.quantidade == this.capacidade){
            console.log("A bomba já está cheia em sua capacidade máxima");
        }
        else{
            let litros = this.capacidade - this.quantidade;
            this.quantidade += litros;

            console.log(`A bomba será enchido com ${litros} litros.` );        
        }
    }

    //Ajustar o valor do litro
    // - Não pode ser preço zero ou negativo
    ajustarValor(novoValor){
        if(novoValor > 0 && typeof(novoValor) == 'number'){
            this.preco = novoValor;
            console.log(`O preço foi ajustado para R$ ${novoValor} por litro`);
        }
        else{
            console.log("O valor tem que ser um numero maior do que zero");
        }
    }

    //Encher o carro e exibir o valor que custou
    encherCarro(litros){
        if(this.quantidade == 0){
            console.log("Desculpe, mas nossas bombas estão vazias");
        }
        else if(litros <= 0){
            console.log("Insira um valor maior do que zero litros");
        }
        else if (litros > this.quantidade){
            console.log(`Desculpe mas nossa bomba só tem ${this.quantidade} litros`);
        }
        else{
            let custo = litros * this.preco;
            this.quantidade = this.quantidade - litros;

        console.log(`Total de R$ ${custo} em ${litros} litros`);
        }
    }
}

const postoVemDisel = new BombaCombustivel(1000, 4.32);

postoVemDisel.encherCarro(10);
postoVemDisel.ajustarValor(6.98);
postoVemDisel.encherCarro(25);
postoVemDisel.encherBomba();