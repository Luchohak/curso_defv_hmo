class Largometraje{

    constructor(tiempo){
        this.tiempo = tiempo
    }

    getTiempo(){
        return this.tiempo
    }
}

class Pelicula extends Largometraje{
    constructor(tiempo, genero){
        super(tiempo)
        this.genero = genero
    }
}

class Documental extends Largometraje{
    constructor(tiempo, director){
        super(tiempo)
        this.director = director
    }
}

class Cine{
    constructor(largometraje){
        this.largometraje = largometraje
    }
    reproducir(){
        return `Reproduciendo... ${this.largometraje.getTiempo()}`
    }
}

var muvi = new Pelicula(120, "comedia")
var docu = new Documental(100, "Iñarritu")
var cineChilo = new Cine(muvi)

console.log(cineChilo.reproducir())