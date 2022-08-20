const persona = {
    nombre: "Juan",
    edad: 34,
    isDeveloper: true,
    saludo: function(){
        console.log('hello')
    }
}

//console.log(persona)

persona.saludo()

const otra_persona = {
    nombre: "Jose",
    edad: 13,
    isDeveloper: false,
    saludo: function(){
        console.log('Hola')
    }
}
otra_persona.saludo()

const creaPersona = (nombre,edad, isDeveloper) => {
    return {
        nombre,
        edad,
        isDeveloper,
        saludo: function(){
            console.log(`Hola ${nombre}`)
        } 
    }
}

const nuevapersona2 = creaPersona('Carlos',23,true)
nuevapersona2.saludo()