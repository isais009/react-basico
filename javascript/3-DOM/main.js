const titulo = document.getElementById('titulo');
const texto = document.getElementById('texto');
// let titulo = document.getElementById('titulo');


// Mostrar contenido
console.log(titulo.textContent);
// console.log(texto.textContent);



// Estilos desde JS
// titulo.style.color = 'white';
// titulo.style.backgroundColor = 'red';
// titulo.style.display = 'none';
// titulo.style.display = 'block';


// titulo.className = 'titulo';
titulo.classList.add('titulo');
titulo.classList.add('fondo');

// titulo.classList.remove('fondo');

