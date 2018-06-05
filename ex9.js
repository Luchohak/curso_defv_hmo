let f0 = 0
let f1 = 1
let sumaFibo = 0

for(let i = 0; i < 10; i++){
    sumaFibo += f0 + f1
    f0 = f1 
    f1 = f0 + f1
    console.log(f0 + " " + f1)
}

console.log("Resultado" + sumaFibo)