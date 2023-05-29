
import { getHeroById } from './bases/08-imp-exp'

// Promises
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const hero = getHeroById(2)
//     resolve(hero)
//     // reject('hero was not found')
//   }, 2000);
// });

// promise.then((resp) => {
//   console.log('Hero is ', resp)
// })
// .catch(console.error);

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id)
      if (!hero) {
        reject('hero was not found')
      } else {
        resolve(hero)
      }
    }, 2000);
  });
};

getHeroByIdAsync(1)
.then(console.log)
.catch(console.error)