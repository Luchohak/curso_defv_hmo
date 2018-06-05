class Electrodomestico{
    constructor(precio, color, peso, consumo){
        this.precio = precio
        this.color = color
        this.peso = peso
        this.consumo = consumo
    }
}

class Lavadora extends Electrodomestico{
    constructor(precio, color, peso, carga, consumo){
        super(precio, color, peso, consumo)
        this.carga = carga
    }

    precioFinal(){
        return this.consumo * this.precio
    }
}

var lava = new Lavadora(12, "Blanco", 100, 20, 20)

console.log(lava.precioFinal())