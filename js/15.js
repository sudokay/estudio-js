const meses =["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
    {nombre: "Monitor 20 Pulgadas", precio: 500},
    {nombre: "tablet", precio: 300},
    {nombre: "teclado", precio: 500},
    {nombre: "celular", precio: 1500},
    {nombre: "cargador", precio: 2500},
    {nombre: "Pc", precio: 800},
];

//forEach

meses.forEach(function(mes){
    if (mes == 'Marzo') {
        console.log("Marzo encontrado");
    } 
});

//includes
let resultado = meses.includes("Marzo");
console.log(resultado);

//some ideal para arregos de objetos
resultado = carrito.some(function(producto){
    return producto.nombre === 'celular';
});
//reduce
resultado = carrito.reduce((total,producto) =>{
    return total + producto.precio 
},0);

//filter
resultado=carrito.filter(producto => {
    return producto.precio >500
})
console.log(resultado);