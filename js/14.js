//arrays

const numeros = [1,2,3,4,5,6,7,8,9,10];

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
// console.log(num); 
//  const arreglo = ["hola", 10, true, null, undefined, {nombre: "Juan"}, [1,2,3]]; //arreglo con diferentes tipos de datos


//  numeros.forEach( function(numero){
   //     console.log(numero);
   //    });
   //    //recorre el arreglo y muestra cada elemento
   
   numeros.push(60,70,80,90,100); 
   //agrega elementos al final del arreglo

   numeros.unshift(0); 
   //agrega un elemento al inicio del arreglo

   numeros.pop(); 
   //elimina el ultimo elemento del arreglo

   meses.shift(); 
   //elimina el primer elemento del arreglo

   meses.splice(2, 1); 
   // posicion y cantidad de elementos a eliminar

   console.table(numeros);
   console.table(meses);

   const nuevoArreglo = [...meses, 'junio']
   //const nuevoArreglo = ['junio',...meses, ] unshift


   console.log(nuevoArreglo);