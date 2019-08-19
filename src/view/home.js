import { viewExit } from '../view.js';
import { nameEmail } from '../controller/control.js';
// import { comentar } from '../controller/control.js';

export const screenHome = () => {
  const divContainer = document.createElement('div');
  divContainer.innerHTML = '';
  const homeTemplate = `  
  <div class="header">
    <select>
      <option value=0>Fulana Suarez</option>
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
        <img src='${nameEmail().photoURL}'/>
      </div>
      <div class="email-user">
        <p id="name-user">${nameEmail().email}</p>
      </div>
    </div>
    <div class="colunm-post">
      <p><textarea class="estilotextarea"name="comentarios" required  placeholder="¿Que quieres compartir? id="comentario"></textarea></p>
      <p><input type="button" value="compartir"class="inpu" id="compartir"></p>
    </div>
    <div id="comentariosContenedor"></div>
  </div>`;
  // console.log(nameEmail().photoURL);
  divContainer.innerHTML = homeTemplate;
  divContainer.classList.add('container-home');
  //  console.log(nameEmail());
  // divContainer.querySelector('#name-user').innerHTML = nameEmail().email;
  divContainer.querySelector('#cerrar').addEventListener('click', () => {
    // firebase.auth().signOut().then((x) => {
    //   console.log(x);
    // })
    //   .catch(function (error) {
    //     // Handle Errors here.
    //     let errorCode = error.code;
    //     let errorMessage = error.message;
    //     // ...
    //   });
    viewExit();
  });
  return divContainer;
};

// const textComentario = divContainer.querySelector('#comentario');

// const buttonCompartir = divContainer.querySelector('#compartir');
// const comentariosContenedor = divContainer.querySelector('#comentarioContenedor');
// buttonCompartir.addEventListener('click',() => {
//   comentar(textComentario.value).then(() => {
//     const texto = `<p>${textComentario.value}</p>`
//     comentariosContenedor.innerHTML(comentariosContenedor.innerHTML += texto)
//   });
// });


/* <i class="fa fa-picture-o" aria-hidden="true"></i>
<i class="fa fa-paper-plane" aria-hidden="true"></i>
<i class="fa fa-heart-o" aria-hidden="true"></i>
<i class="fa fa-heart" aria-hidden="true"></i>
${user.email} */
