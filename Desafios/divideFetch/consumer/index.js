const fetch = require("node-fetch");

const url = 'http://localhost:6000/numbers'


const process = async () => {
    const resultado = await fetch(url)
    .then(res => res.json())
    
    const x = resultado.x;
    const y = resultado.y;

    console.log("X: ", x)
    console.log("Y: ", y)

    try{
        if(x == undefined){
            console.log('O valor de X não é definido')
        }
    }
    catch{
        const resposta = x/y;
        console.log("X/Y = ", resposta)
    }
}

process()