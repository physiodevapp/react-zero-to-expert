import { getGifs } from "../../src/helpers/getGifs"

describe('getGifs', () => { 
  test('should return gifs', async() => { 
    const gifs = await getGifs('One punch');
    // console.log(gifs)

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })

   })
 })