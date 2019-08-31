/* eslint-disable no-console */
import MockFirebase from 'mock-cloud-firestore';
import { addPost, readPosts } from '../src/model/model-firestore';

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
      console.log(posts);
      done();
    };
    readPosts(callback);
  }));
});
