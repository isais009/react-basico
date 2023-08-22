const nombre = 'Isaias';


// Crear un key en localStorage
localStorage.setItem('nombre', nombre);

// Obtener el valor
const valorLocalStorage = localStorage.getItem('nombre');

if(valorLocalStorage === null){
    console.log('No existe');
}else{
    console.log(valorLocalStorage);
}


// Eliminar por key
localStorage.removeItem('nombre');



function saveItem(key, value){
    try{
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }catch(error){
        console.log(error);
        console.log('Error al guardar');
        return false;
    }
}


function getItem(key){
    try{
        const data = localStorage.getItem(key);
        return JSON.parse(data);
    }catch(error){
        console.log(error);
        console.log('Error al obtener');
        return null;
    }
}



function postElement(){
    const articulo = document.createElement('article');
    articulo.innerHTML = `
        <h2 class="titulo-articulo">${titulo}</h2>
        <img src="${img}" alt="${titulo}">
        <p class="desc-articulo">${desc}</p>
    `;

    articulos.appendChild(articulo);
}