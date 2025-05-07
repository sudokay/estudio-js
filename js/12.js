"use strict";
const producto = {
    nombreProducto: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
};

Object.freeze(producto); // congela el objeto y no se puede modificar

producto.imagen = "imagen.jpg"; // agregar una propiedad al objeto

console.log(producto); // { nombreProducto: 'monitor 20 pulgadas', precio: 300, disponible: true, imagen: 'imagen.jpg' }