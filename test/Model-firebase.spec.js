// import { loginEmail } from '../src/controller/control.js';

// describe('loginEmail', () => {
//   it('debería ser una función', () => {
//     expect(typeof loginEmail).toBe('function');
//   });
// });
// importamos la funcion que vamos a testear
import {
  loginEmail,
  loginRegister,
  loginOut,
  loginGoogle,
  loginFacebook,
  nameEmail,
} from '../src/Model/Model-firebase.js';

// configurando firebase mock
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
const mockdatabase = new firebasemock.MockFirebase();
mockfirestore.autoFlush();
mockauth.autoFlush();
global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore,
);

// iniciando tests
describe('loginEmail', () => {
  it('debería ser una función', () => {
    expect(typeof loginEmail).toBe('function');
  });
  it('Debería poder iniciar sesión', () => {
    loginEmail('etr604@gmail.com', '123456').then((user) => {
      expect(user.email).toBe('etr604@gmail.com');
    });
  });
});
describe('loginRegister', () => {
  it('debería ser una función', () => {
    expect(typeof loginRegister).toBe('function');
  });
  it('Debería poder registrar usuario', () => {
    loginRegister('etr604@gmail.com', '123456').then((user) => {
      expect(user.email).toBe('etr604@gmail.com');
    });
  });
});
describe('loginOut', () => {
  it('debería ser una función', () => {
    expect(typeof loginOut).toBe('function');
  });
  it('Debería poder Cerrar Sesión', () => {
    loginEmail('etr604@gmail.com', '123456').then(() => {
      loginOut().then((response) => {
        expect(response).toBe('undefined');
      });
    });
  });
});
describe('loginGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof loginGoogle).toBe('function');
  });
  it('Debería poder Iniciar Sesión con una cuenta de Google', () => {
    loginGoogle('etr604@gmail.com').then((user) => {
      expect(user.providerData[0].providerId).toBe('google.com');
    });
  });
});
describe('loginFacebook', () => {
  it('debería ser una función', () => {
    expect(typeof loginFacebook).toBe('function');
  });
  it('Debería poder Iniciar Sesión con una cuenta de Facebook', () => {
    loginFacebook('etr604@gmail.com').then((user) => {
      expect(user.providerData[0].providerId).toBe('facebook.com');
    });
  });
});
describe('nameEmail', () => {
  it('debería ser una función', () => {
    expect(typeof nameEmail).toBe('function');
  });
  it('debería devolver usuario con sesión activa', () => {
    loginEmail('etr604@gmail.com', '123456').then(() => {
      nameEmail().then((user) => {
        expect(user.email).toBe('etr604@gmail.com');
      });
    });
  });
});
