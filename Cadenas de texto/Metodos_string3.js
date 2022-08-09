// Metodos de cadena de texto (parte3)
// match -> "encuentro" regexr.com
let texto_largo = "Iba un día un perro por la calle, cuando se encontró en el suelo un hermoso pedazo de carne; rápidamente lo agarró entre sus dientes y se alejó corriendo para comérselo tranquilo.";
console.log(texto_largo.match(/cuando/g));

// Existe la palabra dentro del texto
console.log(texto_largo.includes("perro"));

// saber si un texto empieza por algo

console.log(texto_largo.startsWith("Iba"));

console.log(texto_largo.endsWith("tranquilo."));

