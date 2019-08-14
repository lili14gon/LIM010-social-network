
export const loginEmail = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}
export const loginRegister = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}
export const loginOut = () => {
  return firebase.auth().signOut();
}
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return firebase.auth().signInWithPopup(provider)
};
export const loginFacebook = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider)
};
export const emailVerification = () => {
  var user = firebase.auth().currentUser;
user.sendEmailVerification().then(function() {
}).catch(function(error) {
});
};

export const observador = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('existe usuario activo');
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      console.log(user);
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;

      // ...
    } else {
      console.log('no existe usuario activo');
    }
  });
};
// export const observer = () => {
//   var provider = new firebase.auth.FacebookAuthProvider();
//   return firebase.auth().signInWithPopup(provider)
// };
