/* eslint-disable no-console */
import MockFirebase from 'mock-cloud-firestore';
import {
  addPost, readPosts, deletePost, editPost, editPrivacity, editLikes, addComment, readComments,
} from '../src/model/model-firestore';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        abc123d: {
          text: 'Que dia es hoy',
          email: 'maria12@hotmail.com',
          idUsuario: 'AB4CrOuwhCSFA8t9APu7bRJqeZv4',
          like: '0',
          privacidad: 'private',
          time: '28/8/2019- 12:54:22',
          __collection__: {
            comment: {
              __doc__: {
                xyz123a: {
                  comentario: 'Gracias Foods Kids!',
                  correo: 'lili16@gmail.com',
                  idPost: 'abc123d',
                  idUsuario: 'OC3BrOuwhCSFA8t9APu7bRJqeYr1',
                  time: '29/8/2019- 15:5:15',
                },
                xyz456b: {
                  comentario: 'Hoy Foods Kids cumple un mes',
                  correo: 'etr604@gmail.com',
                  idPost: 'abc123d',
                  idUsuario: 'EB5CrOuwhCSFA8t9APu7bRJqeTy5',
                  time: '28/8/2019- 13:15:36',
                },
              },
            },
          },
        },
        abd543e: {
          text: 'Un dia para mejorar',
          email: 'lili16@gmail.com',
          idUsuario: 'OC3BrOuwhCSFA8t9APu7bRJqeYr1',
          like: '1',
          privacidad: 'Public',
          time: '29/8/2019- 10:21:21',
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
describe('addPost', () => {
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

describe('editLikes', () => {
  it('deberia aumentar el conteo de likes en 1', done => editLikes('abc123d', 1).then(() => {
    const callback = (posts) => {
      console.log(posts);
      const result = posts.find(elemento => elemento.text === 'ya es tarde');
      expect(result.like).toBe(1);
      done();
    };
    readPosts(callback);
  }));
});

describe('addComment', () => {
  it('debería poder agregar un comentario a un post', done => addComment('Nos reuniremos para celebrar mañana', 'maria12@hotmail.com',
    'abc123d', 'AB4CrOuwhCSFA8t9APu7bRJqeZv4', '29/8/2019- 16:30:37').then(() => {
    const callback = (comment) => {
      console.log(comment);
      const resultado = comment.find(elemento => elemento.comentario === 'Nos reuniremos para celebrar mañana');
      expect(resultado.comentario).toBe('Nos reuniremos para celebrar mañana');
      done();
    };
    readComments('abc123d', callback);
  }));
});
