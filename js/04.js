//strings cadenas de texto

/*La palabra clave new en JavaScript (y TypeScript) sirve para crear una nueva instancia de un objeto a partir de una función constructora o una clase. Básicamente, le dice al intérprete que debe:

Crear un nuevo objeto vacío.

Asignarle el prototipo correcto.

Ejecutar la función constructora o clase con ese objeto como contexto (this).

Devolver ese nuevo objeto.
*/

const mercancia = {
     producto: "cerveza",
     product2 : String("ron"),
     product3: new String("vodka"),
     product4: 'whiske"jack daniels"',
};

console.log(mercancia); 
//cundo es verde es una funcion ya que se le asigna un valor
//cuando es azul es un objeto 
