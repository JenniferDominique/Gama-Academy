// no final do algoritmo x ter o valor de y e y ter o valor de x

let x = 5;
let y = 8;
let z = 2;

console.log("x = " + x)
console.log("y = " + y)
console.log("z = " + z)

y = y - x
x = x + y
y = x - y

console.log("-------Depois da troca-------")
console.log("x = " + x)
console.log("y = " + y)
console.log("z = " + z)
