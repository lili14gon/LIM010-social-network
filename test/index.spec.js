// importamos la funcion que vamos a testear
import { loginEmail } from '../src/controller/control.js';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof loginEmail).toBe('function');
  });
});
