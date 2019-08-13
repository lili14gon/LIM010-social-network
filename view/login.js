import { viewLogin, viewFacebook, viewGoogle } from "../view.js";

export const screenLogin = () => {
  const divContainer = document.createElement('div');
  divContainer.innerHTML = '';
  const loginTemplate = `  
  <img class="logo" src="img/icon1.png" alt="logo de la web foods kids"/>
  <img class="img" src="img/logo1.png" alt="logo food kids de la web"/>
  <form id="screen-login" class="flex-form">
  <img class="foods-kids" src="img/foods-kids.png" alt="nombre foods kids de la página web"/>
    <p class="welcome"> ¡Bienvenido!</p>
    <p class="welcome-description"> ¡Bienvenido a la red que te ayuda con la alimentación de los engreidos de casa!</p>
    <input class="inputs" type="email" name="correo" id="email" placeholder="Email">
    <input class="inputs" type="password" name="contrasena" id="password"  placeholder="Password">
    <p class="error" id="error"></p>
    <button class= "btn-login" name="button" type="submit" id="login">Log in</button>
    <p class="registro">O bien ingresa con..</p>
    <div class="btn-fb-google">
      <a id="fb" href="#"><img class="facebook" src="./img/fb.png"/></a>
      <a id="goog" href="#"><img class="google" src="./img/google+.png" /></a>
    </div>
    <label class="registro">¿No tienes una cuenta?&nbsp;<a class="bold" href="#/register" id="registrate">Regístrate.</a></label>
  </form>`;

  divContainer.innerHTML = loginTemplate;
  divContainer.classList.add('center');

  const buttonLogInEmail = divContainer.querySelector('#login');
  buttonLogInEmail.addEventListener('click', () => {
    viewLogin();
  });
  const buttonLogInFacebbok = divContainer.querySelector('#fb');
  buttonLogInFacebbok.addEventListener('click', () => {
    viewFacebook();
  });
  const buttonLogInGoogle = divContainer.querySelector('#goog');
  buttonLogInGoogle.addEventListener('click', () => {
    viewGoogle();
  });
  return divContainer;
}