class Perro{
    constructor(color, pelaje, raza, tamano){
        console.log('Se ejecutó el constructor')
        this.color = color
        this.pelaje = pelaje
        this.raza = raza
        this.tamano = tamano   
    }

    nacer(){
        console.log("Nacido")
    }

    ladrar(){
        console.log(this.raza + ": Ruuff!")
    }



}

var firulais = new Perro("Negro", "Liso", "Pug", "Chico")
var emiliano = new Perro("Blanco", "Chino", "Labrador", "Grande")

firulais.ladrar()
emiliano.ladrar()