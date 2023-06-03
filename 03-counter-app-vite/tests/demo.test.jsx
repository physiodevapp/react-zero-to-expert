
describe('Pruebas en <DemoComponent /> ', () => { 
  
  test('Esta prueba no debe fallar', () => {
    // 1. Arrange
    const message1 = 'Hola mundo';
  
    // 2. Act
    const message2 = message1.trim();
  
    // 3. Assert
    expect(message1).toBe(message2)
  })

 })
