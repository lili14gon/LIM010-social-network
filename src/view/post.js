import { deletePost, editPost, addComment, readComent, editLikes } from '../Model/Model-firestore.js';
import { nameEmail } from '../Model/Model-firebase.js';
import { screenComent } from './coment.js';
import { timePublic } from '../controller.js';
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
      <div class="header-post">
        <div class="flex-creador">
          <p id="nombre" class="creador">Publicado por ${datoPost.email} | ${datoPost.privacidad}</p>
          <p class="clock"><i class="fa fa-clock-o" aria-hidden="true"></i> ${datoPost.time}</p>
        </div>
          <i id="btn-delete" class="delete fa fa-trash" aria-hidden="true"></i>
        <!--<a id="btn-delete"><img class="imgPequeño" src="../img/papelera.png" /></a>-->
      </div>
      <textarea class="textarea-post" name="comentarios" id="newcoment">${datoPost.text}</textarea>
      <div class="comandos-post">
        <i id="like" class="btn-img fa fa-heart-o" aria-hidden="true"></i>
        <i id="dislike" class="btn-img fa fa-heart" aria-hidden="true"></i>
        <!--<a id="like"><img class="imgPequeño" src="../img/corazon-blanco.png" /></a>-->
        <!--<a id="dislike"><img class="imgPequeño" src="../img/corazon-rojo.png" /></a>-->
        <p id="count" class="count" >${datoPost.like}</p>
        <i id="editar" class="btn-img fa fa-pencil-square-o" aria-hidden="true"></i>
        <i id="guardar" class="hide btn-img fa fa-floppy-o" aria-hidden="true"></i>
        <!--<button type="" class="inpu" id="editar">editar</button>-->
       <!--<button type="" class="hide" id="edita-guarda">guardar</button>-->    
      </div>
      <div id="textarea-comment" class="textarea-comment">
        <textarea id="comment-new" class="text-coment" type="text" placeholder="Escribe tu comentario" /></textarea>
        <i id="button-coment" class="btn-comment fa fa-comment-o" aria-hidden="true"></i>
        <!--<button type="" class="" id="button-coment">comentar</button>-->
      </div>
      <div id="coment" class="background"></<div>
    `;
    divContainer.innerHTML = postTemplate;
    divContainer.classList.add('container-posts');
    const textArea = divContainer.querySelector('#newcoment');
    const editar = divContainer.querySelector('#editar');
    const eliminar = divContainer.querySelector('#btn-delete');
    const guardar = divContainer.querySelector('#guardar');
    // const likes = divContainer.querySelector('#likes');
    
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
        // cont += 1;
        // if (cont === 1) {
        // editar.innerText = 'guardar';
        guardar.classList.remove('hide');
        editar.classList.add('hide');
        textArea.disabled = false;
        // textArea.focus();
        textArea.select();
      });
      guardar.addEventListener('click', () => {
        editPost(datoPost.id, textArea.value);
        editar.classList.remove('hide');
        guardar.classList.add('hide');
        textArea.disabled = true;
      });
    }
    const like = divContainer.querySelector('#like');
    const dislike = divContainer.querySelector('#dislike');
    dislike.classList.add('hide');
    like.addEventListener('click', () => {
      like.classList.add('hide');
      dislike.classList.remove('hide');
      const valor = datoPost.like + 1;
      editLikes(datoPost.id, valor);
      console.log('holitasssssssssssssssssssss');
    });
    dislike.addEventListener('click', () => {
      const valor = datoPost.like - 1;
      editLikes(datoPost.id, valor);
      like.classList.remove('hide');
      dislike.classList.add('hide');
    });
    const comentar = divContainer.querySelector('#button-coment');
    comentar.addEventListener('click', () => {
      const comentario = divContainer.querySelector('#comment-new').value;
      console.log(comentario);
      const date = timePublic();
      addComment(comentario, nameEmail().email, datoPost.id, datoPost.email, date)
        .then((response) => {
          divContainer.querySelector('#comment-new').value = '';
          console.log('se agrego a tu colleccion', response.id);
        }).catch((error) => {
          console.log('no se agrego', error);
        });
    });
    const coment = divContainer.querySelector('#coment');
    const call = (dato) => {
      coment.innerHTML = '';
      dato.forEach(element => {
        coment.appendChild(screenComent(element));
      });
    };
    readComent(datoPost.id, call);
  }
  return divContainer;
};
