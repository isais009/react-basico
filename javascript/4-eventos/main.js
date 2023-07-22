const mostrar = document.getElementById('mostrar-texto');
const ocultar = document.getElementById('ocultar-texto');

const texto = document.getElementById('texto');

ocultar.classList.add('ocultar');

mostrar.addEventListener('click', () => {
    // texto.style.display = 'block';
    texto.classList.add('mostrar');
    ocultar.classList.remove('ocultar');
    mostrar.classList.add('ocultar');
});

ocultar.addEventListener('click', () => {
    texto.classList.remove('mostrar');
    mostrar.classList.remove('ocultar');
    ocultar.classList.add('ocultar');
});


