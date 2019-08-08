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