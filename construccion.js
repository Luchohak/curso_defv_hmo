class Construccion{
    constructor(num_puertas, num_ventanas, num_pisos, altura, largo, ancho){
        this.num_puertas = num_puertas 
        this.num_ventanas = num_ventanas
        this.num_pisos = num_pisos
        this.altura = altura
        this.largo = largo
        this.ancho = ancho
    }

    setDireccion(direccion){
        this.direccion = direccion
    }
    getDireccion(){
        return this.direccion
    }
    metrosCuadrados(){
        return this.ancho * this.largo
    }
}

class Casa extends Construccion{
    constructor(num_puertas, num_ventanas, num_pisos, altura, largo, ancho){
        super(num_puertas, num_ventanas, num_pisos, altura, largo, ancho)
    }
}

class Edificio extends Construccion{
    constructor(num_puertas, num_ventanas, num_pisos, altura, largo, ancho){
        super(num_puertas, num_ventanas, num_pisos, altura, largo, ancho)
    }
}

var edif = new Edificio(10, 5, 2, 3, 4, 4)
console.log(edif.metrosCuadrados())
edif.setDireccion("Nueva direccion")
console.log(edif.getDireccion())