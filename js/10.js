//objetos 
const nombreProducto = "monitor 20 pulgadas";
const precio = 300;
const disponible = true;



const producto = {
    nombreProducto: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
};
//agrega propiedades
producto.imagen="imagen.jpg"; // agregar una propiedad al objetox

//elimina propiedades
delete producto.disponible; // eliminar una propiedad del objeto


// console.log(producto["nombreProducto"]); 
// console.log(producto.nombreProducto); // monitor 20 pulgadas muestra el valor de la propiedad
console.log(producto);

