import { deletePost, editPost, addComment, readComent } from '../Model/Model-firestore.js';
import { nameEmail } from '../Model/Model-firebase.js';
import { screenComent } from './coment.js';
// import { viewDeletePost } from '../controller.js';

export const screenPost = (datoPost) => {
  const divContainer = document.createElement('div');
  let postTemplate = '';
  // if (datoPost.idUsuario === nameEmail().uid) {
  //   postTemplate = `  
  //    <div class="post"> 
  //   <div class="button-post"><p id="nombre">${datoPost.email}</p><a id="btn-delete"><img class="google" src="../img/papelera.png" /></a>
  //     <p>${datoPost.privacidad}</p>
  //     </div>
  //     <div class="postPublic">
  //     <label id="comentario" class="estilotextarea">${datoPost.text}</label>
  //     <textarea class="hide"name="comentarios" required  placeholder="¿Que quieres compartir?" id="newcoment">${datoPost.text}</textarea>
  //     </div>
  //     <div class="header-post">
  //        <button type="" class="inpu" id="likes">likes</button>
  //        <button type="" class="inpu" id="editar">editar</button>
  //        <button type="" class="hide" id="edita-guarda">guardar</button>

  //      </div>
  //      <div id="coment"></<div>
  //    </div>`;
  // } else if (datoPost.privacidad === 'public') {
  //   postTemplate = `  
  //    <div class="post">
  //   <div class="button-post"><p id="nombre">${datoPost.email}</p>
  //   <p>${datoPost.privacidad}</p>
  //     </div>
  //     <div class="postPublic">
  //     <label id="comentario" class="estilotextarea">${datoPost.text}</label>

  //     </div>
  //     <div class="header-post">
  //        <button type="" class="inpu" id="likes">likes</button>
  //      </div>
  //      <div id="coment"></<div>
  //    </div>`;
  // } else {
  //   postTemplate = '';
  // }
  // divContainer.innerHTML = postTemplate;
  // divContainer.classList.add('container-home');
  // if (datoPost.idUsuario === nameEmail().uid) {
  //   const eliminar = divContainer.querySelector('#btn-delete');
  //   eliminar.addEventListener('click', () => {
  //     deletePost(datoPost.id);
  //   });
  //   const editar = divContainer.querySelector('#editar');
  //   const label = divContainer.querySelector('#comentario');
  //   const textArea = divContainer.querySelector('#newcoment');
  //   const btnSave = divContainer.querySelector('#edita-guarda');
  //   editar.addEventListener('click', () => {
  //     label.classList.add('hide');
  //     textArea.classList.remove('hide');
  //     editar.classList.add('hide');
  //     btnSave.classList.remove('hide');
  //   });
  //   btnSave.addEventListener('click', () => {
  //     const newComentario = textArea.value;
  //     editPost(datoPost.id, newComentario);
  //   });
  // }
  if (datoPost.privacidad === 'public' || datoPost.idUsuario === nameEmail().uid) {
    postTemplate = `  
     <div class="post"> 
    <div class="button-post"><p id="nombre">${datoPost.email}</p><a id="btn-delete"><img class="imgPequeño" src="../img/papelera.png" /></a>
      <p>${datoPost.privacidad}</p>
      </div>
      <div class="postPublic">
      <textarea class="estilotextarea"name="comentarios" id="newcoment">${datoPost.text}</textarea>
      </div>
      <div class="header-post">
         <button type="" class="inpu" id="likes">likes</button>
         <button type="" class="inpu" id="editar">editar</button>
         <button type="" class="hide" id="edita-guarda">guardar</button>     
      </div>
      <div id="textarea-comment">
      <textarea id="comment-new" class="text-coment" type="text" placeholder="Escribe tu comentario" /></textarea>
      <button type="" class="" id="button-coment">comentar</button>
      </div>
       <div id="coment"></<div>
     </div>`;
    divContainer.innerHTML = postTemplate;
    divContainer.classList.add('container-home');
    const textArea = divContainer.querySelector('#newcoment');
    const editar = divContainer.querySelector('#editar');
    const eliminar = divContainer.querySelector('#btn-delete');
    // const likes = divContainer.querySelector('#likes');
    let cont = 0;
    if (datoPost.idUsuario !== nameEmail().uid) {
      eliminar.classList.add('hide');
      editar.classList.add('hide');
      textArea.disabled = true;
    } else {
      textArea.disabled = true;
      eliminar.addEventListener('click', () => {
        deletePost(datoPost.id);
      });
      editar.addEventListener('click', () => {
        cont += 1;
        if (cont === 1) {
          editar.innerText = 'guardar';
          textArea.disabled = false;
          // textArea.focus();
          textArea.select();
        } else {
          editPost(datoPost.id, textArea.value);
          cont = 0;
          editar.innerText = 'editar';
          textArea.disabled = true;
        }
      });
    }
    const comentar = divContainer.querySelector('#button-coment');
    comentar.addEventListener('click', () => {
      const comentario = divContainer.querySelector('#comment-new').value;
      console.log(comentario);
      addComment(comentario, nameEmail().email, datoPost.id, datoPost.email)
        .then((response) => {
          divContainer.querySelector('#comment-new').value = '';
          console.log('se agrego a tu colleccion', response.id);
        }).catch((error) => {
          console.log('no se agrego', error);
        });
    });
    const coment = divContainer.querySelector('#coment');
    const call = (dato) => {
      dato.forEach(element => {
        coment.appendChild(screenComent(element));
      });
    };
    readComent(datoPost.id, call);
  }
  return divContainer;
};
