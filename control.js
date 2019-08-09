export const loginEmail = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}
export const loginRegister = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}
export const loginGoogle = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
};

export const loginFacebook = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider)
};