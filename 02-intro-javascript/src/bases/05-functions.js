
// Functions in JS
// const sayHello = function (name) {
//   return `Hello, ${name}`
// }

const sayHello2 = (name) => {
  return `Hello, ${name}`
}

const sayHello3 = (name) => `Hello, ${name}`;

const sayHello4 = () => (`Hola Mundo`);

console.log(sayHello2('Vegeta'));
console.log(sayHello3('Goku'));
console.log(sayHello4());

const getUser = () => (
  {
    uid: 'ABC123',
    username: 'Paco',
  }
)

console.log(getUser());
 

const user = getUser();

console.log(user);


const getActiveUser = (name) => (
  {
    uid: 'ABC123',
    username: name
  }
);

const activeUser = getActiveUser('Fernando');
console.log(activeUser)