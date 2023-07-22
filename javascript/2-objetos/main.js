const usuario = {
    nombre: 'Isaias',
    apellido: 'Chavez',
    contacto: {
        correo: 'isaias@gmail.com',
        telefono: '67836382'
    },
    getNombre: function(){
        console.log(this.nombre);
    },
    getCorreo: () => {
        // console.log(usuario.contacto.correo);
        console.log(usuario.contacto.correo);
    }
};


console.log(usuario.nombre);
console.log(usuario['nombre']);