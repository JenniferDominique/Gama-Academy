class User{
    /*
    //ASSIM A GENTE CONSEGUE GARANTIR QUE INGUEN VA INSERIR ATRIBUTOS INVALIDOS
    constructor({name: userName = "", email, password}){
        this.name = userName;
        this.email = email;
        this.password = password;
    }
    */
    constructor(user){
        //Desconstructor
        const{name:userName = "", password} = user;
        //eh igual a 
        //const name = user.name
        //renomeando a variavel dentro do codigo
        //variavel do objeto : variavel do meu codigo

        this.name = userName;
        this.email = user.email || ""; 
        //__Shorthand__
        //Se nao for fornecido o email ele preence com vazio
        //__Ternario__
        //<condicao> ? return true : return false
        //this.email = user.email ? user.email : ""
        this.password = password;
    }

    
}

module.exports = User;
//export default User;