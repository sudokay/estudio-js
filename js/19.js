// function sumar (n1, n2){
//     return n1 + n2;
// const resultado = sumar(5, 10);
// console.log(resultado);

let total = 0;

function agregarCarrito(precio) {
return total += precio;
}

function calcularImpuesto(total) {
    return total * 1.16;
};
    
total = agregarCarrito(800);
total = agregarCarrito(100);
total = agregarCarrito(100);


console.log(total);

const totalaPagar = calcularImpuesto(total);
console.log(`total a pagar ${totalaPagar}`)
