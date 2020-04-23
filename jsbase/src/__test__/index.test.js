const randomString = require('../')

describe('Probar funcionalidades de randomStrings', () => {
  test('Probar la funcionalidad de randomString', () => {
    expect(typeof (randomString())).toBe('string');
  });
  test('Comprobar que no existe una ciudad', () => {
    expect(randomString()).not.toMatch(/Bogota/);
  });
})