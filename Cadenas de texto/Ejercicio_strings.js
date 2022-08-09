// Ejercicio cadenad de caracteres

let nombre = "Juan";
let apellido = "Figueroa";
let estudiante  = `${nombre} ${apellido}`
let estudianteMayus = nombre.concat(" ",apellido).toUpperCase();
let estudianteMinus = nombre.concat(" ",apellido).toLowerCase();
let numero = estudiante.length;
let primera = nombre[0];
let ultima = apellido.slice(-1);

// \s+ -> espacio
let sinespa = estudiante.replace(/\s+/g,"").trim();

let esNombre = "Juan Figueroa"
if (esNombre == estudiante){
    var varboleana = true;
} else{
    var varboleana = false;
}



// Verificaciones
console.log(nombre);
console.log(apellido);
console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(numero);
console.log(primera);
console.log(ultima);
console.log(sinespa);
console.log(varboleana);


// Solicion

const nombre1 = "Gorka"
const apellido1 = "Villar"
const estudiante1 = nombre.concat(" ").concat(apellido)

const estudianteMayus1 = estudiante.toUpperCase()
const estudianteMinus1 = estudiante.toLowerCase()

const estudianteLength = estudiante.length

// Todas válidas
// const inicialNombre = nombre[0]
// const inicialNombre = nombre.at(0)
const inicialNombre = nombre1.substring(0, 1)
// Todas válidas
// const finalApellido = apellido[apellido.length - 1]
// const finalApellido = nombre.at(apellido.length - 1)
const finalApellido = apellido1.substring(apellido1.length - 1, apellido1.length)

// Todas válidas
// const estudianteSinEspacios = estudiante.replace(" ", "")
const estudianteSinEspacios = estudiante1.replace(/ /g, "")

const nombreEnEstudiante = estudiante1.includes(nombre)



