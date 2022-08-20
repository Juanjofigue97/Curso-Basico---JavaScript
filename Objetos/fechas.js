// Fechas

const fecha = new Date();

console.log(fecha);


// Date(año,mes,dia,hora,minutos,segundos,milisegundos)

const fecha2 = new Date(1997, 0, 2, 1, 23, 52, 192);
console.log(fecha2);

const fecha3 = new Date(-1000000000);
console.log(fecha3);

const fecha4 = new Date("October 13, 1979 12:15:15");
console.log(fecha4);

console.log(fecha > fecha2)

// Comparar dos fechas

const fecha5 = new Date(1997, 0, 2, 1, 23, 52, 192);
console.log(fecha2.getTime() == fecha5.getTime());

// obtener el mes,dia, año

// dia
console.log(fecha2.getDate());
// Mes
console.log(fecha2.getMonth()+1);
// Año
console.log(fecha2.getFullYear());

// 
console.log(fecha2.toLocaleDateString('en-BG'))
