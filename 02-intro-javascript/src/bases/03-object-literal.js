

const person = {
  name: 'Tony',
  surname: 'Stark',
  age: 45,
  direction: {
    city: 'New York',
    zip: 1234567890,
    lat: 14.323232,
    lng: 34.121212
  }
};

// console.table( persona );

const person2 = { ...person };
person2.name = 'Peter';

console.log(person);
console.log(person2);