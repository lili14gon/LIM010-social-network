// importamos la funcion que vamos a testear
import { loginRegister, }
  from '../src/controller/control.js';
describe('loginRegister', () => {
  it('debería poder registrarse con email y password', () => {
    return loginRegister('maria@hotmail.com, 12345456').then((email) => {
      expect(email, password).toBe('maria@hotmail.com');
    })
  })
})
