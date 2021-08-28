const fetch = require("node-fetch");

const urlX = 'http://localhost:6000/getx'
const urlY = 'http://localhost:6000/gety'

const process = async () =>{ 
    // Tem que ser assincrono 
    //pois eu estou esperando o resultado de duas apis diferentes
    //entao para nao ocorrer o caso de uma ser mais rapido que a outra
    //eu falo que elas sao assincronas, ou seja, elas executam em final
    
    const x = await fetch(urlX)
    .then(res => res.json())
    .then(res => {return res.x})

    const y = await fetch(urlY)
        .then(res => res.json())
        .then(res => res.y)

    console.log(x)
    console.log(y)

    try{
        if(x === undefined){
            console.log("O valor de X não é definido")
        }
        else if( y === undefined){
            console.log('O valor de Y não é definido')
        }
    }
    catch{
        const resultado = x/y;
        console.log('A divisão de X por Y é: ', resultado)
    }
}

process()