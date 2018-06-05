var centiAFaren = (centigrados, farenheit) => (centigrados * (9/5) + 32)

var tabladelSiete = num => {
    for(var i = 0; i < 10; i++){
        console.log(num * (i+1))
    }
}

var decimalABinario = (num_decimal) => {
    var div = num_decimal / 2
    var lista = []
    
        if(div%1){
            //Escribir un 0 si el resultado es par
            lista.append('0')
        } else {
            lista.append('1')
        }
}

var cuentaParametros = (...params) => {
    console.log(params.length)
}

var arrayEnteros = (...enteros) => {
    var suma = 0
    for(var i = 0; i < enteros.length; i++){
        console.log(enteros[i])
        suma += enteros[i]
    }
    console.log(suma / enteros.length)
}


tabladelSiete(8)
cuentaParametros(1, 2, 3, 4)
arrayEnteros(1,2,3,4,5,6)