// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"

function vacia(){
    return true
}

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

async function damePromesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

// - Una función generadora de índices pares automáticos

function* genIn(){
    let id = 0;
    while(true){
        id += 2
        if(id === 20){
            return id
        }
        yield id // esperando hasta que se vuelva a llamar
    }
}

const indices = genIn()

console.log(indices.next().value)
console.log(indices.next().value)
console.log(indices.next().value)
console.log(indices.next().value)
console.log(indices.next().value)
console.log(indices.next().value)
console.log(indices.next().value)
console.log(indices.next().value)
console.log(indices.next().value)
console.log(indices.next().value)