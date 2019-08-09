export const logeo = (correo, contrasena) => {
  return firebase.auth().signInWithEmailAndPassword(correo, contrasena);
}
export const registro = (correo, contrasena) => {
  return firebase.auth().createUserWithEmailAndPassword(correo, contrasena);
}
export const loginGoogle = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
};

export const loginFacebook = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider)
};
export const observador = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('existe usuario activo');
     // aparece();
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