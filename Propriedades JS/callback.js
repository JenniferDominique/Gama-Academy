const login = (callMassage) => {
    let index = 0;
    console.log("Antes do while")
    while(index<100000){
        index++
    }
    console.log('Despois do while')
    
    callMassage();
}

const loginResponseMassage = () =>{
    console.log("Aqui eu vou mostrar a mensagem que o login retornou")
}

login(loginResponseMassage)