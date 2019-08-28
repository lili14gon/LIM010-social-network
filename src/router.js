import { screenLogin } from './view/login.js';
import { screenRegister } from './view/register.js';
import { screenHome } from './view/home.js';
import { readPost } from './Model/Model-firestore.js';
// const array = [1, 2, 3, 4];
const viewTmp = (router) => {
  const root = document.getElementById('root');
  root.innerHTML = '';
  switch (router) {
    case '#/login':
      root.innerHTML = '';
      root.appendChild(screenLogin());
      break;
    case '#/register':
      root.appendChild(screenRegister());
      break;
    case '#/home':
      // const call = (array1) => {
      //   console.log(array1);
      //   root.innerHTML = '';
      //   root.appendChild(screenHome(array1));
      // }
      readPost((call) => {
        root.innerHTML = '';
        root.appendChild(screenHome(call));
      });
      break;
    default:
      root.innerHTML = 'Hola';
      break;
  }
};

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/login');
  }
  return viewTmp(hash);
};

export const init = () => {
  changeTmp(window.location.hash);
  window.addEventListener('hashchange', () => changeTmp(window.location.hash));
};
