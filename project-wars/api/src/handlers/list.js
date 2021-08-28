const users = require("../states/users")

const list = async (req, res) => {
    console.log("calling list")
    
    await new Promise (r => setTimeout(r, 2000)) // Espera 2 segundos
        .then(() => console.log("Terminei de esperar"))
    
    console.log('retornando list')

    try{
        console.log(users[1].nome)
    } 
    catch(error){
        console.log('Ops! Algo quebrou')
        console.log(error)
    }
    finally{
        console.log('Depois de todas as tentativas, roda eu :)')
    }
    
    res.send(users)
}

module.exports = list;