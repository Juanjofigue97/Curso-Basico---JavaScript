// Que son las funciones, cmo se declaran y como se utilizan

const nom = "Marcela";
function saludar(nombre){
    console.log(`Buenos dias ${nombre} ten buen dia`)
}

saludar('Juan Jose');
saludar(nom);

// 
let nombre_2 = "Juan"
console.log(nombre_2)

despedir(nombre_2)
console.log(nombre_2)

function despedir(nombre){
    nombre = "Diego"
    console.log(`Adios ${nombre}`);
}

let persona = { nombre: "Juan", apellido : "Figueroa"}

saludarPersona(persona)

console.log(persona)

function saludarPersona(objeto){
    console.log(`hola ${objeto.nombre} ${objeto.apellido} `);
}

/////

function imprimeNumero(numero){
    console.log(numero)
}

imprimeNumero()

function imprimir(...parametros){
    console.log(parametros)
}

imprimir(1 ,2 ,9, "hola", { id:9 });

function suma(...nums){
    return nums.reduce((a,b) => a+b);
}

const res = suma(1,2,3,4);

console.log(res);

function multiplicar(a = 0, b = 0){
    return a*b
}

console.log(multiplicar(4,9))