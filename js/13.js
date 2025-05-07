
const producto = {
    nombreProducto: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
};


const medida = {
    peso: '1kg',
    medida: '1m'
};
//rest operators
const nuevoProducto = { ...producto, ...medida};
 //se hace una copia del objeto y se le asigna a nuevoProducto
