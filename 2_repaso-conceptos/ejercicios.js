// Guarda en variables el nombre de las siguientes mascotas:

// 1. Pedrito
// 2. Rufo
// 3. Chancla
var m1 = 'Pedrito';
var m2 = 'Rufo';
var m3 = 'Chancla';

// Muestra en consola, accediendo a las variables, un mensaje como el siguiente:
// "Mis mascotas son Pedrito, Rufo y Chancla. Les quiero mucho"

//console.log("Mis mascotas son " + m1 + " ," + m2 + " Y " + m3 ". Les quiero mucho");

console.log(`Mis mascota son ${m1}, ${m2}, Y ${m3}. Y las quiero mucho`);

// Input y Output

// Pedir mediante prompts el nombre de dos mascotas y mostrar en consola un mensaje como el siguiente:
var mascota1 = prompt('Nombre de la primera mascota');
var mascota2 = prompt('Nombre de la segunda mascota');

// "Quiero mucho a mis mascotas mascota1 y mascota2"
console.log(`Quiero mucho a mis mascotas: ${mascota1} y ${mascota2}`);

// var mascotaUsuario1 = prompt("Dime el nombre de tu primera mascota");
// var mascotaUsuario2 = prompt("Dime el nombre de tu segunda mascota");

// console.log("Quiero mucho a " + mascotaUsuario1 + " y " + mascotaUsuario2);

// NOTA: mascota1 y mascota2 corresponden a los nombres introducidos mediante prompts

// Conversión de Tipos de Datos

// Guarda la cadena de texto "100" en una variable
var dato = '100';
// Muestra el contenido de esta variable en consola
console.log(dato);
// Muestra el TIPO DE DATO de esta variable en consola
console.log(typeof dato);

// Transforma la variable de string a number
//var datoTransformado = parseInt(dato);
var datoTransformado = Number(dato);
console.log(datoTransformado);
console.log(typeof datoTransformado);
// Muestra nuevamente el contenido de esta variable en consola

// ¿Qué diferencias notas al mostrar en consola la variable antes y después de transformarla? ¿Qué es entonces un tipo de dato?


