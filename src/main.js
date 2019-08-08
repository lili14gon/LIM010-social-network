
// import { myFunction } from './lib/index.js';
import {screenLogin} from './vistas/login.js';
import {screenRegister} from './vistas/registro.js';
// myFunction();

window.addEventListener('load', () =>{
const firebaseConfig = {
    apiKey: "AIzaSyCJhteyRg-JGLrv4nRXm4NoitbnBXiOfrg",
    authDomain: "p1-red-social.firebaseapp.com",
    databaseURL: "https://p1-red-social.firebaseio.com",
    projectId: "p1-red-social",
    storageBucket: "",
    messagingSenderId: "380076541838",
    appId: "1:380076541838:web:8c591a8b9d53bb4b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  init();
 // const caja=document.getElementById('root');
//   caja.appendChild(screenLogin());
});
const init = () => {
  window.addEventListener('load', changeView(window.location.hash))
  if (("onhashchange" in window)) window.onhashchange = () => changeView(window.location.hash)
 // window.addEventListener('hashchange',()=>console.log(window.location.hash))
}

const changeView = (router) =>{
if(router==='#/'){
  return vista ("#login"); 
}
else if( router==='#/register'){
  return vista (router);
  }
}

const vista = (parameter)=>{
  const caja=document.getElementById('root');
  switch (parameter) {
    case '#login':
        caja.appendChild(screenRegister());
      break;
    case registro:
        caja.appendChild(screenLogin());
      break;
    default:
        caja.appendChild(screenLogin());
      break;
  }
}