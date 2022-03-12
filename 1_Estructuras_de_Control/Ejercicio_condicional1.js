/* let edad = parseInt(prompt("cual es tu edad"))
if(edad < 4){
    alert("Eres muy joven")
} else if(edad >= 4 && edad <=99){
    alert("Diviertete")
}else{
    alert("Eres muy grande ")
} */

// otra forma de hacerlo en forma ternario
let edad = parseInt (prompt("cual es tu edad"))
edad < 4 ? alert("Muy joven") : edad <= 99 ? alert("Diviertete") 
: alert ("Lo siento pero para el dominio no hay limites ")

