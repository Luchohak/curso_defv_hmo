let x = 3
let y = 10 
let z = 1

if (x == y && x == z){
    console.log("Los tres números son iguales")
} else if(x == y || y == z || z == x){
    console.log("Dos números son iguales")
} else {
    console.log("Los tres números son diferentes")
}