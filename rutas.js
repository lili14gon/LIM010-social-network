import { screenLogin } from './vistas/login.js'
import { screenRegister } from './vistas/registro.js'
import { logeo } from './controles.js';

export const init = () => {
  changeTmp(window.location.hash);
   window.addEventListener('hashchange', () => changeTmp(window.location.hash));
  //if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash);
} 
const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/home');
  } else {
    return viewTmp(hash);
  }
};

const viewTmp = (router) => {
  const root = document.getElementById('root');
  root.innerHTML = '';
  switch (router) {
    case '#/home':
      root.innerHTML = '';
      root.appendChild(screenLogin());
      break;
    case '#/register':
      root.appendChild(screenRegister());
      break;
    default:
      root.innerHTML= 'Hola';
      break;
  }
}