import {  viewExit } from "../view.js"
import { emailVerification } from "../control.js"

export const screenHome = () => {
  const divContainer = document.createElement('div');
  divContainer.innerHTML = '';
  const homeTemplate = `  
  <div class="header">
    <select>
      <option value=0>Fulana Suarez</option>
    </select>
    <img class="foods-kids" src="img/foods-kids.png" alt="nombre foods kids de la página web"/>
    <div class="exit-container">
      <img class="exit-img" src="img/desconectarte.png">
      <button class="exit-input" id="cerrar">Cerrar sesión</button>
    </div>
  </div>
  <div class="main">
    <div class="container-user">
      <div class="color-img"></div>
      <div class="email-user">
      <p id="correo-electronico"></p>
      </div>
    </div>
    <div class="colunm-post">
    <p><textarea class="estilotextarea"name="Comentarios" required  placeholder="¿Que quieres compartir?"></textarea>
    </p>
    <p><input type="submit" value="Compartir"class="inpu"></p>
    </div>
  </div>`;

  divContainer.innerHTML = homeTemplate;
  divContainer.classList.add('container-home');
  // divContainer.querySelector('#correo').innerHTML=observador().then((response)=>{console.log(response)});
 // observador().then((response)=>{console.log(response)}).catch((error)=>{console.log(error)});
  //console.log(emailVerification().email);
  divContainer.querySelector('#correo-electronico').innerHTML=emailVerification().email;
  
  divContainer.querySelector('#cerrar').addEventListener('click', () => {
    viewExit();
  });
  return divContainer;
}

/* <i class="fa fa-picture-o" aria-hidden="true"></i>
<i class="fa fa-paper-plane" aria-hidden="true"></i>
<i class="fa fa-heart-o" aria-hidden="true"></i>
<i class="fa fa-heart" aria-hidden="true"></i>
${user.email} */