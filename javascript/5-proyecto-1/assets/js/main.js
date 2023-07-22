const formulario = document.getElementById('formulario');
const articulos = document.getElementById('articulos');



formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const titulo = formulario['titulo'].value;
    const desc = formulario['desc'].value;
    const img = URL.createObjectURL(formulario['imagen'].files[0]);

    const articulo = document.createElement('article');
    articulo.innerHTML = `
        <h2 class="titulo-articulo">${titulo}</h2>
        <img src="${img}" alt="${titulo}">
        <p class="desc-articulo">${desc}</p>
    `;

    articulos.appendChild(articulo);
});