// const firebasemock = require('firebase-mock');
// // const mockauth = new firebasemock.MockFirebase();
// const mockfirestore = new firebasemock.MockFirestore();
// const mockdatabase = new firebasemock.MockFirebase();
// mockfirestore.autoFlush();
// // mockauth.autoFlush();
//   // use null if your code does not use RTDB
//   path => (path ? mockdatabase.child(path) : null),
//   // () => mockauth,
//   () => mockfirestore,
import MockFirebase from 'mock-cloud-firestore';
import { addPost } from '../src/model/Model-firestore';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        abc123d: {
          email: 'maria12@hotmail.com',
          like: '0',
          privacidad: 'private',
          text: 'Que bueno es hoy',
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

describe('addPost', () => {
  it('debería crear un post', () => {
    addPost('Que bueno es hoy', 'lili_lu16@hotmail.com', 'OC3BrOuwhCSFA8t9APu7bRJqeYr1',
      'public', 1, '28/08/2019- 12:30:12').then((post) => {
      firebase.firestore().collection('post').doc(post.id).get()
        .then((data) => {
          expect(data).toBe({
            email: 'lili_lu16@hotmail.com',
            idUsuario: 'OC3BrOuwhCSFA8t9APu7bRJqeYr1',
            like: 1,
            privacidad: 'public',
            text: 'Que bueno es hoy',
            time: '28/08/2019- 12:30:12',
          });
        });
    });
  });
});
