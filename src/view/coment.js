import { nameEmail } from '../Model/Model-firebase.js';
import { deleteComment, editComment } from '../Model/Model-firestore.js';
// import { nameEmail } from '../Model/Model-firebase.js';

export const screenComent = (data) => {
  const divContainer = document.createElement('div');
  divContainer.innerHTML = '';
  const comentTemplate = `  
      <div class="creador-comment">
      <p class="email-comment" id="nombre">${data.correo}</p>
      <p class="clock-comment"><i class="clock-icon fa fa-clock-o" aria-hidden="true"></i> ${data.time}</p>
      </div>
      <div class="flex">
      <textarea id="comment" class="text-coment" type="text">${data.comentario}</textarea>
      <div class="flex-comment">
        <i id="btn-delete-comentario" class="buttons-comments fa fa-trash" aria-hidden="true"></i>
        <i id="edit-coment" class="buttons-comments fa fa-pencil-square-o" aria-hidden="true"></i>
        <i id="save" class="hide buttons-comments fa fa-floppy-o" aria-hidden="true"></i>
      </div>
      </div>
      `;
  divContainer.innerHTML = comentTemplate;
  divContainer.classList.add('container-comment');
  const eliminar = divContainer.querySelector('#btn-delete-comentario');
  const textArea = divContainer.querySelector('#comment');
  const edit = divContainer.querySelector('#edit-coment');
  const save = divContainer.querySelector('#save');
  console.log(nameEmail().email);
  console.log(data.idUsuario);

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
        save.classList.remove('hide');
        edit.classList.add('hide');
        textArea.disabled = false;
        // textArea.focus();
        textArea.select();
      });
      save.addEventListener('click', () => {
        editComment(data.idPost, data.id, textArea.value);
        edit.classList.remove('hide');
        save.classList.add('hide');
        textArea.disabled = true;
      });
    }
  }
  return divContainer;
};
