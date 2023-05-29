console.log('hola mundo!')

// Scope, variables and constants

const nombre = 'Fernando';
let apellido = 'Herrera';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado)

if (true) {
  let valorDado = 6;

  console.log(valorDado)
}

console.log(valorDado);