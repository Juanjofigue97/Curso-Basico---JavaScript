localStorage.setItem("nombre" , "Juan-Jose")
localStorage.setItem("apellido" , "Figueroa")


localStorage.setItem("persona",JSON.stringify({nombre: "Juan-Jose", apellido:"Figueroa"}))

sessionStorage.setItem("persona",JSON.stringify({nombre: "Juan-Jose", apellido:"Figueroa"}))

var fecha = new Date()
var minutos = fecha.getTime()+60000 *2

//var addmin = fecha.getTime() +  60000 * 2

document.cookie = "nombreCookie=JuanCookie"
document.cookie = "nombreCaducidad2=Nombre;expires=" + new Date(fecha.getTime()+60000).toUTCString()
document.cookie = "nombreCaducidad=JUan;expires=" + new Date(minutos).toUTCString()

console.log(document.cookie)


// // Solucion
// const nombre = "Gorka"
// const apellido = "Villar"

// const datos = {
//     nombre,
//     apellido
// }

// // sessionStorage.setItem("datos", JSON.stringify(datos))
// // localStorage.setItem("datos", JSON.stringify(datos))

// const now = new Date()
// // document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(now.getTime() + 2 * 60000)}`