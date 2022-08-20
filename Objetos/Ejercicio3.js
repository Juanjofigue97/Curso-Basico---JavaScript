// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
const fechaAhora = new Date();
console.log(fechaAhora);

// - La fecha de tu nacimiento
const fechaNacimiento = new Date(1997,1,4);
console.log(fechaNacimiento);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const Comparar = fechaAhora > fechaNacimiento;
console.log(Comparar);


// - Una variable que contenga el día de tu nacimiento
const fechaDia = fechaNacimiento.getDate()
console.log(fechaDia);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

const fechaMes = fechaNacimiento.getDay()
console.log(fechaMes);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const fechaAnyo = fechaNacimiento.getFullYear()
console.log(fechaAnyo);


