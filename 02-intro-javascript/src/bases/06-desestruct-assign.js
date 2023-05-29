// Destructuring assignment

const person = {
  name: 'Tony',
  age: 45,
  alias: 'Ironman',
  rol: 'Soldier'
}

// const { name: name2, age, alias } = person;
// console.log(name2);
// console.log(age);
// console.log(alias);

const UseContext = ({ name: name2, age, alias, rol = 'Captain' }) => {
  // console.log(person)

  console.log(name2, age, alias, rol);

  return {
    aliasName: alias,
    age,
    latlng: {
      lat: 14.3232,
      lng: -12.3232
    }
  }
}

const { aliasName, age, latlng: {lat, lng} } = UseContext(person);

console.log(aliasName, age, lat, lng)
