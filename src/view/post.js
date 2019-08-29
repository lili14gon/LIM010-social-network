/* eslint-disable no-console */

import {
  deletePost, editPost, addComment, readComent, editLikes, editPrivacity,
} from '../model/model-firestore.js';
import { nameEmail } from '../model/model-firebase.js';
import { screenComent } from './coment.js';
import { timePublic } from '../controller.js';
// import { viewDeletePost } from '../controller.js';

export const screenPost = (datoPost) => {
  const divContainer = document.createElement('div');
  let postTemplate = '';
  if (datoPost.privacidad === 'public' || datoPost.idUsuario === nameEmail().uid) {
    postTemplate = `   
      <div class="header-post">
        <div class="flex-creador">
        <div class="flex-creador-privicity">
          <p id="nombre" class="creador">Publicado por ${datoPost.email} | </p>
          <p id="privacidad-no-user">${datoPost.privacidad}</p>
          <select class="hide select" id="post-privacy-user" >
  <option value="public" id="public">public</option>
  <option value="private" id="private">private</option>
</select></div>
          <p class="clock"><i class="fa fa-clock-o" aria-hidden="true"></i> ${datoPost.time}</p>
        </div>
          <i id="btn-delete" class="delete fa fa-trash" aria-hidden="true"></i>
      </div>
      <textarea class="textarea-post" name="comentarios" id="newcoment">${datoPost.text}</textarea>
      <div class="comandos-post">
        <i id="like" class="btn-img fa fa-heart-o" aria-hidden="true"></i>
        <i id="dislike" class=" fa fa-heart" aria-hidden="true"></i>
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
    const postPrivacyUser = divContainer.querySelector('#post-privacy-user');
    postPrivacyUser.value = datoPost.privacidad;
    const privacidadNoUser = divContainer.querySelector('#privacidad-no-user');
    if (datoPost.idUsuario !== nameEmail().uid) {
      eliminar.classList.add('hide');
      editar.classList.add('hide');
      textArea.disabled = true;
    } else {
      textArea.disabled = true;
      postPrivacyUser.classList.remove('hide');
      privacidadNoUser.classList.add('hide');
      // const newPrivacity = privacidadNoUser.value;
      postPrivacyUser.addEventListener('click', (event) => {
        const indice = event.target.value;
        editPrivacity(datoPost.id, indice);
      });
      // eliminar.classList.remove('hide');
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
    like.addEventListener('click', (event) => {
      event.preventDefault();
      like.classList.add('hide');
      dislike.classList.remove('hide');
      const valor = datoPost.like + 1;
      editLikes(datoPost.id, valor);
    });
    // count.innerHTML = '';
    // dislike.addEventListener('click', () => {
    //   const valor = datoPost.like - 1;
    //   editLikes(datoPost.id, valor);
    //   like.classList.remove('hide');
    //   dislike.classList.add('hide');
    // });
    const comentar = divContainer.querySelector('#button-coment');
    comentar.addEventListener('click', () => {
      const comentario = divContainer.querySelector('#comment-new').value;
      // console.log(comentario);
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
    // const call = (dato) => {
    //   coment.innerHTML = '';
    //   dato.forEach(element => {
    //     coment.appendChild(screenComent(element));
    //   });
    // };
    // readComent(datoPost.id, call);
    readComent(datoPost.id, (dato) => {
      coment.innerHTML = '';
      dato.forEach((element) => {
        coment.appendChild(screenComent(element));
      });
    });
  }
  return divContainer;
};
