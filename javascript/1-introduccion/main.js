
// Imprimir en pantalla
// console.log('Hola mundo desde el archivo main.js');



// Tipos de datos: String | Boolean | Double | Float

// variables
let nombre = "Isaias";
let numero = 100;
let numero2 = 10.3;
var nombre2 = "David";
numero = "texto";

// Constante
const pi = 3.14159;


// console.log(typeof nombre, nombre);
// console.log(typeof numero, numero);
// console.log(typeof numero2, numero2);
// console.log(typeof nombre2, nombre2);
// console.log(typeof pi, pi);



// Arreglos
const semanas = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];



// Valor en cada iteracion, posicion, arreglo actual
semanas.forEach(function(dia, pos, lista){
    // console.log(pos, dia, lista);
});




// funcion normal
function suma(){
    return 1+2;
}


// funcion flecha
const resta = () => {
    return 2-1;
}


//Recorrer con funcion flecha
semanas.forEach((dia, pos) => {
    console.log(pos, dia);
});


const semanas2 = semanas.map((dia, pos) => {
    const index = pos + 1;
    return index + ".- " + dia;
});

// ['1.- Lunes', '2.- Martes', '3.- Miercoles'....]

semanas2.forEach((dia) => {
    console.log(dia);
});
