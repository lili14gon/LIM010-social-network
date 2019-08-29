import { addPost, readPosts } from '../src/model/model-firestore.js';

const firebasemock = require('firebase-mock');

// const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
const mockdatabase = new firebasemock.MockFirebase();
mockfirestore.autoFlush();
// mockauth.autoFlush();
global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  // () => mockauth,
  () => mockfirestore,
);

describe('addPost', () => {
  it('debería retornar un objeto', () => {
    expect(typeof addPost('hola como estar', 'etr604@gmail.com')).toBe('object');
  });
  it('debería ser una función', () => {
    expect(typeof addPost).toBe('function');
  });
  it('Deberia de poder agregar una post e email', () => {
    addPost('Bienvenidos a Foods Kids', 'etr604@gmail.com', '8Rylj3xirgTtD5Eo1AJxQbGpgO2', 'public', 2, '28/8/219 - 8:38:20')
      .then((data) => {
        expect(data).toBe('Bienvenidos a Foods Kids', 'etr604@gmail.com', '8Rylj3xirgTtD5Eo1AJxQbGpgO2', 'public', 2, '28/8/219 - 8:38:20');
      });
  });
});
describe('readPosts', () => {
// it('debería retornar un objeto', () => {
//   expect(typeof addPost('hola como estar', 'etr604@gmail.com')).toBe('object');
// });
  it('debería ser una función', () => {
    expect(typeof addPost).toBe('function');
  });
  it('Deberia de poder obtener las actualizaciones de datos tiempo real', () => {
    readPosts('hola como estar', 'etr604@gmail.com').then((data) => {
      expect(data).toBe('hola como estar', 'etr604@gmail.com');
    });
  });
});
