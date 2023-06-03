import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

import heroesData from '../../src/data/heores'

describe('Pruebas en 08-imp-exp', () => {

  test('should getHeroById return hero by Id', () => {

    const id = 1;
    const hero = getHeroeById(id);
    // console.log(hero) 

    expect(hero).toEqual(
      {
        id: 1,
        name: 'Batman',
        owner: 'DC'
      }
    )

  })

  test('should getHeroById return undefined if not found', () => {

    const id = 100;
    const hero = getHeroeById(id);
    // console.log(hero)

    expect(hero).toBeFalsy()

  })

  test('should getHeroesByOwner return heroes by owner', () => {

    const owner = 'DC';

    const heroes = getHeroesByOwner(owner);

    // console.log(heroes)

    expect(heroes.length).toBe(3)

    expect(heroes).toEqual([
      {
        id: 1,
        name: 'Batman',
        owner: 'DC'
      },
      {
        id: 3,
        name: 'Superman',
        owner: 'DC'
      },
      {
        id: 4,
        name: 'Flash',
        owner: 'DC'
      }
    ])

    expect(heroes).toEqual(heroesData.filter((heroe) => heroe.owner === owner))

  })

  test('should getHeroesByOwner return undefined if not found', () => {

    const owner = 'Marvel';

    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2)

  })

})