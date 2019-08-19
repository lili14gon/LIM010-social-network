// export const crearUsuarioConEmailYPasswoard = (email, password) => {
//   return firebase.auth().createUserWithEmailAndPassword(email, password);
// };


const loginEmail = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

// eslint-disable-next-line max-len
const loginRegister = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

const loginOut = () => firebase.auth().signOut();

const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

const loginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

const nameEmail = () => firebase.auth().currentUser;

export {
  loginEmail,
  loginRegister,
  loginOut,
  loginGoogle,
  loginFacebook,
  nameEmail,
};

// export const comentar = (comentario) => {
//   return firebase.firestore().collection('post').add({
//     texto: comentario
//   });
// },

// export const observador = () => {
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       // console.log('Existe usuario activo');
//       // console.log(user);
//     } else {
//       // console.log('No existe usuario activo');
//     }
//   });
// };
