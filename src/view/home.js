import { viewExit, createPost } from '../controller.js';
import { nameEmail } from '../Model/Model-firebase.js';
import { screenPost } from './post.js';
// import { screenComent } from './coment.js';

export const screenHome = (post) => {
  const divContainer = document.createElement('div');
  divContainer.innerHTML = '';
  const homeTemplate = `  
  <div class="header">
    <select>
      <option value=0>${nameEmail().displayName}</option>
    </select>
    <img class="foods-kids" src="../img/foods-kids.png" alt="nombre foods kids de la página web"/>
    <div class="exit-container">
      <img class="exit-img" src="../img/desconectarte.png">
      <button class="exit-input" id="cerrar">Cerrar sesión</button>
    </div>
  </div>
  <div class="main">
    <div class="container-user">
      <div class="color-img">
      </div>
      <div class="email-user">
      <div><img class="img-perfil" src='${nameEmail().photoURL}'/></div>
        <p id="name-user">${nameEmail().email}</p>
      </div>
    </div>
    <div class="total">
    <div class="colunm-post">
      <textarea class="estilotextarea"name="comentarios" required  placeholder="¿Que quieres compartir?" id="comentario"></textarea>
       <input type="submit" value="compartir"class="btn-compartir" id="compartir">
       <select id="post-privacy" class="">
      <option value="public" id="public">Public</option>
      <option value="private" id="private">Private</option>
    </select>
    </div>
    <div id="comentariosContenedor"></div>
  </div>
  </div>`;
  // console.log(nameEmail().photoURL);
  divContainer.innerHTML = homeTemplate;
  divContainer.classList.add('container-home');
  //  console.log(nameEmail());
  // divContainer.querySelector('#name-user').innerHTML = nameEmail().email;
  divContainer.querySelector('#cerrar').addEventListener('click', () => {
    viewExit();
  });
  const buttonCompartir = divContainer.querySelector('#compartir');
  // const comentariosContenedor = divContainer.querySelector('#comentarioContenedor');
  buttonCompartir.addEventListener('click', () => {
    createPost();
  });

  const totalView = divContainer.querySelector('#comentariosContenedor');

  for (let i = 0; i < post.length; i += 1) {
    totalView.appendChild(screenPost(post[i]));
  }

  // post.forEach(element => {
  //   totalView.appendChild(screenPost(screenComent(element)));
  // });

  return divContainer;
};

/* <i class="fa fa-picture-o" aria-hidden="true"></i>
<i class="fa fa-paper-plane" aria-hidden="true"></i>
<i class="fa fa-heart-o" aria-hidden="true"></i>
<i class="fa fa-heart" aria-hidden="true"></i>
${user.email} */
