// Bucles for
// i = i + 1
// i += 1
// i++


for(let i = 0; i< 10; i = i + 2){
    // Esto es el buble
    console.log('i =', i);
}

let lista = [1,4,6,3,7,10,12];

// for (inicializacion, condicion, paso)

for(i = 0; i<lista.length; i++){
    console.log(lista[i])
}

// for ... of

for(valor of lista){
    console.log(valor)
}

// Estructura for Each

lista.forEach(valor =>{
    console.log(valor)
})

let persona = {
    nombre: "Gorka",
    apellido: "Figue",
    edad: 25,
    isDeveloper: true
}


// Estructura for...in

for(let propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad])
}