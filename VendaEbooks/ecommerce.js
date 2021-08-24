//import  User from './user';
const User = require("./user")

class Ecommerce{
    registeredUsers = []
    
    createUser(user){
        const newUser = new User(user);
        this.registeredUsers.push(newUser);
        //this.registeredUsers.push(new User(user))
        console.log(newUser);
    }

    //arrow function
    //funcao anonima
    login = (email, password) => {
        console.log(email, password);
        const user = this.registeredUsers.find(user => user.email === email && user.password === password);
        return user;
    }
}

module.exports = Ecommerce;