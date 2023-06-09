import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas 07-deses-arr', () => { 
  test('should return string and number', () => { 
    
    const [letters, numbers] = retornaArreglo()

    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    expect(typeof letters).toBe('string');
    expect(letters).toEqual(expect.any(String));

    expect(typeof numbers).toBe('number');
    expect(numbers).toEqual(expect.any(Number));


   })
 })