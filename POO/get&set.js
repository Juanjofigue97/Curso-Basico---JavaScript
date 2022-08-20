class Persona{
    // Private -> #
    #nombre;
    #edad;

    // Protectec
    _isDeveloper = true
    constructor(nombre, edad){
        this.#nombre = nombre
        this.#edad = edad
    }

    saludo(){
        console.log(`hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }

    getName(){ // Funcion getter nos permite acceder de forma controlada 
        return this.#nombre
    }

    getEdad(){
        return this.#edad 
    }

    setEdad(new_edad){
        this.#edad = new_edad
    }
    // Getter and Setter


}

const persona = new Persona("Juan",45);

console.log(persona)
console.log(persona.nombre)
persona.saludo()

console.log(persona.getName())
console.log(persona.getEdad())

persona.setEdad(35)

console.log(persona.getEdad())




