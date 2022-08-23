const boton = document.querySelector("#btn")

console.log(boton)
boton.addEventListener("click",() =>{
    console.log("click en el boton")
})

$(() =>{
    $("#btn").click(()=>{
        console.log("Hola, estoy utilizando jQuery")
    })
})