import { types } from "../../../src/heroes/types/types";


describe('types.js test', () => { 
  test('should return reducer valid types options', () => { 
    screen
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    })
   })
 })