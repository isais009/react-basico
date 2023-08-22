if(getItem('post') === null){
    saveItem('post', []);
}

let posts = getItem('post');

const formulario = document.getElementById('formulario');
const articulos = document.getElementById('articulos');


posts.forEach((post) => {
    const articulo = document.createElement('article');
    articulo.innerHTML = `
        <h2 class="titulo-articulo">${post.titulo}</h2>
        <img src="${post.img}" alt="${post.titulo}">
        <p class="desc-articulo">${post.desc}</p>
    `;

    articulos.appendChild(articulo);
});


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    articulos.innerHTML = '';

    const titulo = formulario['titulo'].value;
    const desc = formulario['desc'].value;
    const img = URL.createObjectURL(formulario['imagen'].files[0]);

    const post = { titulo, desc, img };

    posts.push(post);

    saveItem('post', posts);

    formulario['titulo'].value = '';
    formulario['desc'].value = '';

    posts.forEach((post) => {
        const articulo = document.createElement('article');
        articulo.innerHTML = `
            <h2 class="titulo-articulo">${post.titulo}</h2>
            <img src="${post.img}" alt="${post.titulo}">
            <p class="desc-articulo">${post.desc}</p>
        `;

        articulos.appendChild(articulo);
    });
});













// Sesion de usuario
// const usuario = {
//     id: 23,
//     nombre: 'Isaias',
//     correo: 'isaias@gmail.com'
// }


// saveItem('localUser', usuario);


// console.log(getItem('localUser'));