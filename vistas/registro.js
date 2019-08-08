import { registroUsuario } from "../vistas.js";

export const screenRegister = ()=>{
    const divElemt = document.createElement('div');
    const registerPage = `  
      <figure>
        <img class="img" src="img/logo.png" alt=""/>
      </figure>
      <div id='login' class="flex-column flex">
          <h1 class="margin name text-color">- Foods Kids -</h1>
          <p>Bienvenido a <strong>Foods Kids </strong>red que te ayuda con la alimentacion de tus hijos </p>
        <form id="login-user" class="margin">
          <input class="inputs block" type="email" name="correo" id="email2" placeholder="Email">
          <input class="inputs block" type="password" name="contraseña" id="password2"  placeholder="Password">
          <button name="button" type="submit" id="registrar">Registrar</button>
          </form>`
          
    divElemt.innerHTML = registerPage;

    const buttonLog = divElemt.querySelector("#registrar");
  buttonLog.addEventListener('click', () => {
    registroUsuario();
  });
    return divElemt;
}