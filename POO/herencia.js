// itinerancia - herencia
class Persona{
    _nombre
    _edad
    constructor(nombre, edad){
        this._nombre = nombre
        this._edad = edad
    }

    saludo(){
        console.log(`hola, mi nombre es ${this._nombre}, tengo ${this._edad} años.`)
    }
}
class Desarrollador extends Persona{
    constructor(nombre, edad , lenguaje){
        super(nombre,edad)
        this.lenguaje = lenguaje
    }
    saludo(){ //override
        super.saludo()
        console.log(`y soy desarrolador de ${this.lenguaje}`)
    }   
}
const nuevodev = new Desarrollador("Juan",25, "Javascript")

console.log(nuevodev)
nuevodev.saludo()

// Poliformismo => Varias formas



