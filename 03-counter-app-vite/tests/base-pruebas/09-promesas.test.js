import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-Promesas', () => {

  test('should getHeroByIdAsync return hero', (done) => {

    const id = 1;

    getHeroeByIdAsync(id)
      .then((hero) => {

        expect(hero).toEqual(
          {
            id: 1,
            name: 'Batman',
            owner: 'DC'
          }
        )

        done(); // Puede ser done o cualquer otra palabra como argumento del callback en el test
      })

  })

  test('should getHeroByIdAsync return error if not found', (done) => {

    const id = 100;

    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy()

        done()
      })
      .catch((error) => {

        console.log(error);

        expect(error).toBe('No se pudo encontrar el héroe ' + id )

        done();
      })

  })

})