// aqui exportaras las funciones que necesites
import { loginEmail, loginRegister, observador, loginOut } from './control.js';

export const viewLogin = () => {
  event.preventDefault();
  const correo = document.getElementById('email').value;
  const contrasena = document.getElementById('password').value;
  const errores = document.getElementById('error');
  loginEmail(correo, contrasena)
    .then(function () {
      observador();
      console.log('Bienvenido');
      //document.getElementById('root').innerHTML = 'hola';
      return changeRoute('#/home');
    })
    .catch(function(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      if(correo==='' || contrasena ===''){
        document.getElementById('error').innerHTML='Ingresa los campos completos';
      }
      else if(errorMessage){
        document.getElementById('error').innerHTML = 'La contraseña no es válida o el usuario no tiene una cuenta.';
      }
      //console.log(errorMessage);
      //console.log(errorCode);
    });
};
export const salir= ()=>{
  loginOut()
  .then(function() {
       // Sign-out successful.
       console.log('saliendo....')
       return changeRoute('#/login');
     }).catch(function(error) {
     // An error happened.
      console.log(error)
     });
}



export const viewRegister = () => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  loginRegister(email, password)
  .then(function () {
    if (name != '') {
      //console.log(user);
      const newName = MaysPrimera(name.toLowerCase());
      document.getElementById('screen-register').innerHTML = `
      <h1 class="register-ok">Ya eres parte de Foods Kids!</h1>
      <p class="ok">Bienvenido(a) ${newName}</p>
      <img src="./img/confeti.gif">
      <a class="ir-login" href="#/login" id="registrate">Ir a Log in</a>`;
    } else {
      document.getElementById('screen-register').innerHTML = `
      <h1 class="register-ok">Ya eres parte de Foods Kids!</h1>
      <p class="ok">Te has registrado correctamente</p>
      <img src="./img/confeti.gif">
      <a class="ir-login" href="#/login" id="registrate">Ir a Log in</a>`;
      //return changeRoute('#/home');
    }
  })
  .catch(function (error) {
     // Handle Errors here.
     const errorCode = error.code;
     const errorMessage = error.message;
     if (errorMessage === 'The email address is badly formatted.') {
      document.getElementById('error').innerHTML = 'Completa correctamente los campos.'
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
      document.getElementById('email').classList.add('focus');
      document.getElementById('password').classList.add('focus');
     } else if (errorCode === 'auth/weak-password') {
      document.getElementById('error').innerHTML = 'La contraseña debe tener 6 caracteres o más.'
      document.getElementById('password').value = '';
      document.getElementById('email').classList.remove('focus');
      document.getElementById('password').classList.add('focus');
    } 
     //document.getElementById('error').innerHTML = errorMessage;
   });
}
export const changeRoute = (route) => {
  location.hash = route;
};

const MaysPrimera = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}




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
// }
