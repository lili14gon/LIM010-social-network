export const loginEmail = (email, password) => {
  const resultFirebase = firebase.auth().signInWithEmailAndPassword(email, password);
  return resultFirebase;
};

export const loginRegister = (email, password) => {
  const resultFirebase = firebase.auth().createUserWithEmailAndPassword(email, password);
  return resultFirebase;
};

export const loginOut = () => {
  const resultFirebase = firebase.auth().signOut();
  return resultFirebase;
};

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const loginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// export const emailVerification = () => {
//   const user = firebase.auth().currentUser;
//   user.sendEmailVerification().then(() => {
//   }).catch(() => {
//     // console.log(error);
//   });
// };

export const nameEmail = () => {
  const user = firebase.auth().currentUser;
  // console.log(user.email);
  // console.log(user.photoURL);
  return user;
};

// export const observador = () => {
//   const autentification = firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       // console.log('Existe usuario activo');
//       // console.log(user);
//     } else {
//       // console.log('No existe usuario activo');
//     }
//   });
//   return autentification;
// };

// export const observador = () => {
//   firebase.auth().onAuthStateChanged();
// };

export const savePost = (text, id) => {
  const db = firebase.firestore();
  db.collection('post').add({
    texto: text,
    usuario: id,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    }).catch((error) => {
      console.log('Error adding document: ', error);
    });
  // console.log('hola');
};
export const readPost = () => {
  const db = firebase.firestore();
  db.collection('post').get().then((querySnapshot) => {
    const array = [];
    querySnapshot.forEach((doc) => {
      array.push(doc.data());
      console.log(`${doc.id} => ${doc.data()}`);
    });
    console.log(array);
    console.log(querySnapshot);
    console.log(typeof (querySnapshot));
    return array;
  });
};
