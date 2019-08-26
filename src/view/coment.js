import { nameEmail } from '../Model/Model-firebase.js';
import { deleteComment, editComment } from '../Model/Model-firestore.js';
// import { nameEmail } from '../Model/Model-firebase.js';

export const screenComent = (data) => {
  const divContainer = document.createElement('div');
  divContainer.innerHTML = '';
  const comentTemplate = `  
      <div class="">
      <p id="nombre">${data.correo}</p>
      <textarea id="comment" class="text-coment" type="text">${data.comentario}</textarea>
      <a id="btn-delete-comentario"><img class="imgPequeño" src="../img/papelera.png" /></a>
      <button type="" class="" id="edit-coment">Editar</button>
      </div>
      `;
  divContainer.innerHTML = comentTemplate;
  const eliminar = divContainer.querySelector('#btn-delete-comentario');
  const textArea = divContainer.querySelector('#comment');
  const edit = divContainer.querySelector('#edit-coment');
  console.log(nameEmail().email);
  console.log(data.idUsuario);
  let contador = 0;
  if (nameEmail().email !== data.idUsuario) {
    eliminar.classList.add('hide');
    edit.classList.add('hide');
    textArea.disabled = true;
  } else {
    textArea.disabled = true;
    eliminar.addEventListener('click', () => {
      deleteComment(data.idPost, data.id);
    });
    if (nameEmail().email !== data.correo) {
      edit.classList.add('hide');
    } else {
      edit.classList.remove('hide');
      edit.addEventListener('click', () => {
        contador += 1;
        if (contador === 1) {
          edit.innerText = 'Guardar';
          textArea.disabled = false;
          textArea.select();
        } else {
          editComment(data.idPost, data.id, textArea.value);
          contador = 0;
          edit.innerText = 'Editar';
          textArea.disabled = true;
        }
      });
    }
  }
  return divContainer;
};
