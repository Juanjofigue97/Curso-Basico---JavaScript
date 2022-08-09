let str = "hola soy un string";
// lenght -> cantidad de tamaño de str 
console.log(str.length);

// obtener partes de cadenas de caracteres

let slice_str = str.slice(0,-5);
console.log(slice_str);

let substring_str = str.substring(0,12);
console.log(substring_str);

// Remplazar parte del contenido de una cadena de texto

let cadena = "Juan: hola mi nombre es Juan";

console.log(cadena.replace('Juan','Jose'));

// Al utilizar la expresion regular /g se remplaza todas las instancias que encuentra


let cuento = "Iba un día un perro por la calle, cuando se encontró en el suelo un hermoso pedazo de carne; rápidamente lo agarró entre sus dientes y se alejó corriendo para comérselo tranquilo.";

console.log(cuento.replace(/un/g,'ellos'));