/* eslint-disable no-console */
import MockFirebase from 'mock-cloud-firestore';
import {
  addPost, readPosts, deletePost, editPost, editPrivacity,
} from '../src/model/model-firestore';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        abc123d: {
          email: 'maria12@hotmail.com',
          like: '0',
          privacidad: 'private',
          text: 'Que dia es hoy',
          time: '28/8/2019- 12:54:22 ',
        },
        abd543e: {
          email: 'lili16@gmail.com',
          like: '1',
          privacidad: 'Public',
          text: 'Un dia para mejorar',
          time: '29/8/2019- 10:21:21 ',
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
describe('createData', () => {
  it('debería crear un post', done => addPost('Que bueno es hoy', 'lili_lu16@hotmail.com', 'OC3BrOuwhCSFA8t9APu7bRJqeYr1',
    'public', 1, '28/08/2019- 12:30:12').then(() => {
    const callback = (posts) => {
    // console.log(posts);
      const resultado = posts.find(elemento => elemento.text === 'Que bueno es hoy');
      expect(resultado.text).toBe('Que bueno es hoy');
      done();
    };
    readPosts(callback);
  }));
});

describe('deletePost', () => {
  it('deberia de eliminar un post con el id de post', done => deletePost('abd543e').then(() => {
    const callback = (posts) => {
      console.log(posts);
      const resultado = posts.find(elemento => elemento.id === 'abd543e');
      expect(resultado).toBe(undefined);
      done();
    };
    readPosts(callback);
  }));
});

describe('editPost', () => {
  it('deberia de editar el texto del posts con el id de post', done => editPost('abc123d', 'ya es tarde').then(() => {
    const callback = (posts) => {
      console.log(posts);
      const resultado = posts.find(elemento => elemento.text === 'ya es tarde');
      expect(resultado.text).toBe('ya es tarde');
      done();
    };
    readPosts(callback);
  }));
});

describe('editPrivacity', () => {
  it('deberia cambiar la privacidad', done => editPrivacity('abc123d', 'public').then(() => {
    const callback = (posts) => {
      console.log(posts);
      const result = posts.find(elemento => elemento.text === 'ya es tarde');
      expect(result.privacidad).toBe('public');
      done();
    };
    readPosts(callback);
  }));
});
