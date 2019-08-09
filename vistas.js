// aqui exportaras las funciones que necesites
import { logeo, registro,observador } from './controles.js';

export const loginPrincipal = () => {
  //event.preventDefault();
  const correo = document.getElementById('email').value;
  const contrasena = document.getElementById('password').value;
  logeo(correo, contrasena)
  observador()
    .then(change=()=> {
      return changeRoute('#/principal');
      //console.log('Bienvenido');
    })
    .catch(error=()=> {
      alert(error);
    })
};

export const registroUsuario = () => {
  //event.preventDefault();
  const email = document.getElementById('email2').value;
  const password = document.getElementById('password2').value;
  registro(email, password)
  .then(function () {
    //document.getElementById('error').innerHTML = 'Te has registrado';
    return changeRoute('#/home');
  })
  .catch(function (error) {
    var errorCode = error . código ;
    var errorMessage = error . mensaje ;
    document.getElementById('error').innerHTML = errorCode;
    alert(errorMessage)
  });
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

const aparece = () => {
  const root = document.getElementById('root');
  root.innerHTML = `
  <p>Bienvenido!</p>
  <button id="cerrar">Cerrar sesión</button>
  `;
}
