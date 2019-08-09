import { viewLogin } from "../view.js";
import { loginFacebook } from "../control.js"

export const screenLogin = () => {
  const divElemt = document.createElement('div');
  divElemt.innerHTML = '';
  const loginPage = `  
  <img class="logo" src="img/icon1.png" alt="logo de la web foods kids"/>
  <img class="img" src="img/logo1.png" alt="logo food kids de la web"/>
  <form id="screen-login" class="flex-form">
  <img class="foods-kids" src="img/foods-kids.png" alt="nombre foods kids de la página web"/>
    <p class="welcome"> ¡Bienvenido!</p>
    <p class="welcome-description"> ¡Bienvenido a la red que te ayuda con la alimentación de los engreidos de casa!</p>
    <input class="inputs" type="email" name="correo" id="email" placeholder="Email">
    <input class="inputs" type="password" name="contrasena" id="password"  placeholder="Password">
    <button class= "btn-login" name="button" type="submit" id="ingresar">Log in</button>
    <p class="registro">O bien ingresa con..</p>
    <div class="btn-fb-google">
      <a id="fb" href="#"><img class="facebook" src="./img/fb.png"/></a>
      <a id="goog" href="#"><img class="google" src="./img/google+.png" /></a>
    </div>
    <label class="registro">¿No tienes una cuenta?&nbsp;<a class="bold" href="#/register" id="registrate">Regístrate.</a></label>
  </form>`;

  divElemt.innerHTML = loginPage;
  divElemt.classList.add('center');

  const buttonLogInEmail = divElemt.querySelector("#ingresar");
  buttonLogInEmail.addEventListener('click', () => {
    viewLogin();
  });
  const buttonLogInFacebbok = divElemt.querySelector("#fb");
  buttonLogInFacebbok.addEventListener('click', () => {
    loginFacebook();
  });
  
  return divElemt;
}