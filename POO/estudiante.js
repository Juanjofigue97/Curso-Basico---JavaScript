// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una clase llamada "Estudiante" que tenga:

class Estudiante{
    nombre
    asignatura = ['Javascript', 'HTML','CSS']

    constructor(nombre){
        this.nombre = nombre
    }

    obtenDatos(){
        return {
            nombre: this.nombre,
            asignatura: this.asignatura
    }
}
}

const est1 = new Estudiante('Juan')

console.log(est1.obtenDatos())

// - Una variable llamada nombre

// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

// - Crea una nueva instancia de "Estudiante"

// - Haz la llamada al método obtenDatos