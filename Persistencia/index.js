// localStorage.setItem("nombre" , "Juan-Jose")
// localStorage.setItem("nombre" , "Miguel")

console.log(localStorage.getItem("nombre"))

// localStorage.setItem("persona",JSON.stringify({nombre: "Juan", edad:32}))

console.log(JSON.parse(localStorage.getItem("persona")))


// JSON.stringify => Convierte un objeto/array en un string
// JSON.parse => Convierte un objeto/array en convertido a traves de stringify

localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-sesion", "Juan")

/* Cookies */

document.cookie = "nombreCookie=JuanCookie"
document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023,0,1).toUTCString()
console.log(document.cookie)

