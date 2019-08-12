import { viewRegister } from "../view.js";

export const screenRegister = ()=>{
    const divElemt = document.createElement('div');
    const registerPage = `  
    <img class="logo" src="img/icon1.png" alt="logo de la web foods kids"/>
    <img class="img" src="img/logo1.png" alt="logo food kids de la web"/>
    <form id="screen-register" class="flex-form">
      <img class="foods-kids" src="img/foods-kids.png" alt="nombre foods kids de la página web"/>
      <h1 class="welcome2">- Registro -</h1>
      <input class="inputs" type="email" name="correo" id="email2" placeholder="Email">
      <input class="inputs" type="password" name="contrasena" id="password2" placeholder="Password">
      <button class="btn-login" name="button" type="submit" id="registrar">Ok</button>
      <p id="error"></p><a href="#/home" id="volver"></a>
      </form>`;
          
    divElemt.innerHTML = registerPage;
    divElemt.classList.add('center');

  const buttonLog = divElemt.querySelector("#registrar");
  buttonLog.addEventListener('click', () => {
    viewRegister();
  });
    return divElemt;
}