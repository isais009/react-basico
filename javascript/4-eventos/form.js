const formulario = document.getElementById('formulario');


// const arr = [];
// arr.forEach((item, pos, arrglo) => {

// });

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(formulario['nombre'].value);
    console.log(formulario['pass'].value);
    console.log(formulario['desc'].value);

});

