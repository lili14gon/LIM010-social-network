import { viewRegister } from '../controller.js';

export const screenRegister = () => {
  const divContainer = document.createElement('div');
  const registerTemplate = `  
    <img class="logo" src="../img/icon1.png" alt="logo de la web foods kids"/>
    <img class="img" src="../img/logo1.png" alt="logo food kids de la web"/>
    <form id="screen-register" class="flex-form">
      <img class="foods-kids" src="../img/foods-kids.png" alt="nombre foods kids de la página web"/>
      <h1 class="welcome2">- Registro -</h1>
      <input class="inputs" type="text" name="name" id="name" placeholder="Name">
      <input class="inputs" type="email" name="email" id="email" placeholder="Email (*)">
      <input class="inputs" type="password" name="password" id="password" placeholder="Password (*)">
      <p class="obligatorio">Campos obligatorios (*)</p>
      <button class="btn-login" name="button" type="submit" id="registrar">Sing up</button>
      <p class="error" id="error"></p>
      </form>`;
  divContainer.innerHTML = registerTemplate;
  divContainer.classList.add('center');

  const buttonLog = divContainer.querySelector('#registrar');
  buttonLog.addEventListener('click', () => {
    viewRegister();
  });
  return divContainer;
};
