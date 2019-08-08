import { loginPrincipal } from "../vistas.js";

export const screenLogin = () => {
  const divElemt = document.createElement('div');
  divElemt.innerHTML = '';
  const loginPage = `  
        <img class="img" src="img/logo.png" alt=""/>
        <form id="screen-login" class="flex-form">
          <h1 class="margin name text-color">- Foods Kids -</h1>
          <p>Bienvenido a <strong>Foods Kids </strong>red que te ayuda con la alimentacion de tus hijos </p>
          <input class="inputs block" type="email" name="correo" id="email" placeholder="Email">
          <input class="inputs block" type="password" name="contraseña" id="password"  placeholder="Password">
          <button name="button" type="submit" id="ingresar">log in</button>
          <h4>O bien ingresa con..</h4>
          <div>
          <a id="fb" href="#"><img class="facebook" src="./img/fb.png"/></a>
          <a id="goog" href="#"><img class="google" src="./img/google+.png" /></a>
          </div>
        <label class="flex registro">¿No tienes una cuenta?&nbsp;<a class="color3" href="#/register" id="registrate">Registrate</a></label>
      </form>`;

  divElemt.innerHTML = loginPage;

  const buttonLogInEmail = divElemt.querySelector("#ingresar");
  buttonLogInEmail.addEventListener('click', () => {
    loginPrincipal();
  });
  
  return divElemt;
}