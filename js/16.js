//funcion

//declarar una funcion
function sumar() {
    console.log (10+10);
};
sumar();

//expresion de la funcion
const sumar2 = function(  ){
    console.log (5+5);
};
sumar2();

//IIFE (inmediatly invoked function expression)
(function(){
    console.log("Esto es una funcion IIFE")
})();

//arrow function
const sumar3 = (a,b) => a+b;
console.log(sumar3(5,10));


//callback function sirven 
//para ejecutar una funcion dentro de otra funcion
function sumar4(a,b,callback) {
    return callback(a+b);
};

// hoisting es una funcion que se puede llamar antes de declararlas