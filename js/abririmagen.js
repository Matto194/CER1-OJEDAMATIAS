const btnCierra = document.querySelector('#btn-cierra');
const imagenes = document.querySelectorAll('#galeria img');
const lightbox = document.querySelector('#contenedor-p');
const imagenActiva = document.querySelector('#imagen_activa');
let indiceImagen = 0;

const abrirImagen = (event) => {
    imagenActiva.src = event.target.src;
    lightbox.style.display = 'flex';
    indiceImagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', abrirImagen);
});

btnCierra.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
