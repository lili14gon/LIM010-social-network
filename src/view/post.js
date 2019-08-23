
import { deletePost, editPost } from '../Model/Model-firestore.js';
import { nameEmail } from '../Model/Model-firebase.js';
// import { viewDeletePost } from '../controller.js';

export const screenPost = (datoPost) => {
  const divContainer = document.createElement('div');
  let postTemplate = '';
  console.log(datoPost.idUsuario);
  console.log(typeof (datoPost.idUsuario));
  console.log(nameEmail());
  console.log(typeof (nameEmail().uid));

  if (datoPost.idUsuario === nameEmail().uid) { 
    postTemplate = `  
     <div class="post">
    <div class="button-post"><p id="nombre">${datoPost.email}</p><a id="btn-delete"><img class="google" src="../img/papelera.png" /></a>
      </div>
      <div class="postPublic">
      <label id="comentario" class="estilotextarea">${datoPost.text}</label>
      <textarea class="hide"name="comentarios" required  placeholder="¿Que quieres compartir?" id="newcoment">${datoPost.text}</textarea>
      </div>
      <div class="header-post">
         <button type="" class="inpu" id="likes">likes</button>
         <button type="" class="inpu" id="editar">editar</button>
         <button type="" class="hide" id="edita-guarda">guardar</button>
       </div>
     </div>`;
  }
  else {
    postTemplate = `  
     <div class="post">
    <div class="button-post"><p id="nombre">${datoPost.email}</p>
      </div>
      <div class="postPublic">
      <label id="comentario" class="estilotextarea">${datoPost.text}</label>
      </div>
      <div class="header-post">
         <button type="" class="inpu" id="likes">likes</button>
       </div>
     </div>`;
  }
  divContainer.innerHTML = postTemplate;
  divContainer.classList.add('container-home');
  if (datoPost.idUsuario === nameEmail().uid) {
    const eliminar = divContainer.querySelector('#btn-delete');
    eliminar.addEventListener('click', () => {
      deletePost(datoPost.id);
    });
    const editar = divContainer.querySelector('#editar');
    const label = divContainer.querySelector('#comentario');
    const textArea = divContainer.querySelector('#newcoment');
    const btnSave = divContainer.querySelector('#edita-guarda');
    editar.addEventListener('click', () => {
      label.classList.add('hide');
      textArea.classList.remove('hide');
      editar.classList.add('hide');
      btnSave.classList.remove('hide');
    });
    btnSave.addEventListener('click', () => {
      const newComentario = textArea.value;
      editPost(datoPost.id, newComentario);
    });

  }
  return divContainer;
};
