import { salir } from "../view.js";

// import { } from "../view.js";
// import {  } from "../control.js"

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
      <button id="cerrar">cerrar sesion</button>
    </div>
  </div>
  <div class="main">
    <div class="container-user">
      <div class="color-img"></div>
      <div class="email-user">
        <p>Correo user name </p>
      </div>
    </div>
    <div class="colunm-post">
    <textarea  class="text"name="textarea" rows="5" cols="70">¿Que quieres compartir?</textarea>
    <button id="compartir">Compartir</button>
    </div>
  </div>`;

  divContainer.innerHTML = homeTemplate;
  divContainer.classList.add('container-home');
 divContainer.querySelector('#cerrar').addEventListener('click', () => {
  salir();
});
  return divContainer;
}

/* <i class="fa fa-picture-o" aria-hidden="true"></i>
<i class="fa fa-paper-plane" aria-hidden="true"></i>
<i class="fa fa-heart-o" aria-hidden="true"></i>
<i class="fa fa-heart" aria-hidden="true"></i>
${user.email} */