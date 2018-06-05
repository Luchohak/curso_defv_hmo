class Figure{
    constructor(base, altura){
        this.base = base
    }
}

class Triangle extends Figure{
    constructor(base, altura){
        super(base)
        this.altura = altura
    }

    area(){
        let area = (this.base * this.altura) / 2
        return area
    }
    perimetro(){
        let perimetro = this.base + (this.altura * 2)
        return perimetro
    }
}

class Square{
    constructor(lado){
        this.lado = lado
    }

    area(){
        return this.lado * this.lado
    }
    perimetro(){
        return this.lado + this.lado + this.lado + this.lado
    }
}

class Rectangle extends Figure{
    constructor(base, altura){
        super(base)
        this.altura = altura
    }

    area(){
        return this.base * this.altura
    }
    perimetro(){
        return (this.base * 2) + (this.altura * 2)
    }
}

class Person{
    constructor(nombre, edad, rfc, sexo, peso, altura){
        this.nombre = nombre
        this.edad = edad
        this.rfc = rfc
        this.peso = peso
        this.altura = altura
    }

    IMC(){
        return (this.peso / this.altura) * (this.peso / this.altura)
    }
    esMayorDeEdad(){
        if(this.edad > 18){
            return true
        } else {
            return false
        }
    }
    calculateRfc(){
        this.rfc = this.nombre.charAt(2)
        return this.rfc
    }
}


var triangulin = new Triangle(3, 4)
var cuadradin = new Square(5.5)
var rectangulin = new Rectangle(82, 12)
var vatito = new Person("Esteban", 23, "", "Macho Machin", 86, 175)

console.log(triangulin.area())
console.log(triangulin.perimetro())

console.log(cuadradin.area())
console.log(cuadradin.perimetro())

console.log(rectangulin.area())
console.log(rectangulin.perimetro())

console.log(vatito.IMC())
console.log(vatito.esMayorDeEdad())
console.log(vatito.calculateRfc())

