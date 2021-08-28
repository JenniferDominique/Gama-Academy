const fetch = require("node-fetch");

const process = async () =>{
    const postParams = {
        method: "POST",
        body: JSON.stringify({
            "nome": "Juci",
            "cpf": "222.222.222-22"
        }),
        headers: { 'Content-Type': 'application/json' }
    }

    fetch("http://localhost:5000/create", postParams)
    //callback encadeada
    .then(res => res.json())
    .then(res => console.log("resultado do create", res))
                

    const nomePessoa = await fetch("http://localhost:5000/list")
        .then((res) => res.json())
        .then(res => {
            console.log("resultado do list", res)
            return res[0].nome
        })

    console.log('depois da chamada de list')
    console.log('nome', nomePessoa);

}




process()


// async / await

