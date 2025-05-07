
const producto = {
    nombreProducto: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
};

const precioProducto = producto.precio;

// console.log(precioProducto);

//destructuring
const { nombreProducto, precio } = producto 
//se tiene que poner el nombre de la propiedad entre llaves y se le asigna el valor a la variable

console.log(nombreProducto, precio); 