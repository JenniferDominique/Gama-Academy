const promiseHandler = (resolve, reject) =>{
    let index = 0
    //console.log("Antes do resolve")
    setTimeout(() => resolve(index), 3000)
    //console.log('Despois do serolve')
    //resolve()//sai depois dele ter terminado
}

const login = async () =>{
    //console.log("Antes do login")
    //const promise = new Promise(promiseHandler)
    //console.log("Depois do login")
    return new Promise(promiseHandler)
        .then((index) =>{
            console.log("Depois da promise", index)
        })
}

const process = () =>{
    console.log("Inicio de process")
    login()
    console.log("Fim do process")
}

process();