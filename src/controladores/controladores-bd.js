export const logeo = (correo,contrasena) =>{
    firebase.auth().signInWithEmailAndPassword(correo, contrasena)
    .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
       });
}
export const registro = (correo,contrasena) =>{
    firebase.auth().createUserWithEmailAndPassword(correo, contrasena)
    .catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}
