// aqui exportaras las funciones que necesites
import { loginEmail, loginRegister, observador } from './control.js';

export const viewLogin = () => {
  event.preventDefault();
  const correo = document.getElementById('email').value;
  const contrasena = document.getElementById('password').value;
  const errores = document.getElementById('error');
  loginEmail(correo, contrasena)
    .then(function () {
      observador();
      console.log('Bienvenido');
      return changeRoute('#/principal');
    })
    .catch(function(error){
      
      const errorCode = error.code;
      const errorMessage = error.message;
      if(correo==='' || contrasena ===''){
       errores.innerHTML='ingresa los campos completos';
      }
      else if(errorMessage){
     errores.innerHTML = 'La contraseña no es válida o el usuario no tiene una cuenta.';
      }
      console.log(errorMessage);
      //console.log(errorCode);
    });
}

export const viewRegister = () => {
  event.preventDefault();
  const email = document.getElementById('email2').value;
  const password = document.getElementById('password2').value;
  const volver = document.getElementById("volver");
  const errores = document.getElementById('error');
  loginRegister(email, password)
    .then(function () {
      errores.innerHTML = 'Te has registrado';
      volver.innerHTML = 'volver';
      console.log('ya registrado');
      console.log(location.hash);
    })

    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      //alert(errorMessage)
      console.log(errorMessage);
      console.log(errorCode);
      if(email==='' || password ===''){
        errores.innerHTML='ingrese los campos completos para crear la cuenta';
       }
       else if(errorMessage){
      errores.innerHTML = 'La contraseña debe tener como minimo 6 caracteres';
       }
    })

}
export const changeRoute = (route) => {
  location.hash = route;
};

// export const observador = () => {
//   firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//       aparece();
//       // User is signed in.
//       var displayName = user.displayName;
//       var email = user.email;
//       console.log(user);
//       var emailVerified = user.emailVerified;
//       var photoURL = user.photoURL;
//       var isAnonymous = user.isAnonymous;
//       var uid = user.uid;
//       var providerData = user.providerData;
//       // ...
//     } else {
//       console.log('no existe usuario activo');
//     }
//   });
// };
// observador();

// const aparece = () => {
//   const root = document.getElementById('root');
//   root.innerHTML = `
//   <p>Bienvenido!</p>
//   <button id="cerrar">Cerrar sesión</button>
//   `;
//}
