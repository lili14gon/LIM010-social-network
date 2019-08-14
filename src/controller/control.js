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
   console.log(user.email);
   console.log(user.photoURL);
   return user;
 };

export const observador = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('Existe usuario activo');
      // console.log(user);
      
    } else {
      console.log('No existe usuario activo');
    }
  });
};
export const createUser = (cred) => {
  const resultFirebase = firebase.firestore().collection('users');
  return resultFirebase.doc(cred.user.uid).set({
    name: cred.user.displayName,
  });
};
