
const characters = ['Goku', 'Vegeta', 'Trunks'];
const [, , character2] = characters;
console.log(character2);

const getArray = () => {
  return ['ABC', 123];
};
const [letters, numbers] = getArray();
console.log(letters, numbers);

const UseState = (value) => {
  return [value, () => { console.log('Hello World!') }];
};
const [value, setValue] = UseState('Goku');
console.log(value);
setValue();