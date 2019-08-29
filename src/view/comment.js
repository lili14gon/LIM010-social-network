import { currentUser } from '../model/Model-firebase.js';
import { deleteComment, editComment } from '../model/Model-firestore.js';

export const viewComment = (objComment) => {
  const commentContainer = document.createElement('div');
  commentContainer.innerHTML = '';
  const commentTemplate = `  
    <div class="creador-comment">
      <p class="email-comment" id="nombre">${objComment.correo}</p>
      <p class="clock-comment"><i class="clock-icon fa fa-clock-o" aria-hidden="true"></i> ${objComment.time}</p>
    </div>
    <div class="flex">
      <textarea id="comment" class="text-coment" type="text">${objComment.comentario}</textarea>
      <div class="flex-comment">
        <i id="btn-delete-comentario" class="buttons-comments pointer fa fa-trash" aria-hidden="true"></i>
        <i id="edit-coment" class="buttons-comments pointer fa fa-pencil-square-o" aria-hidden="true"></i>
        <i id="save" class="hide buttons-comments pointer fa fa-floppy-o" aria-hidden="true"></i>
      </div>
    </div>
    `;
  commentContainer.innerHTML = commentTemplate;
  commentContainer.classList.add('container-comment');
  const eliminar = commentContainer.querySelector('#btn-delete-comentario');
  const textArea = commentContainer.querySelector('#comment');
  const edit = commentContainer.querySelector('#edit-coment');
  const save = commentContainer.querySelector('#save');
  if (currentUser().email !== objComment.idUsuario) {
    eliminar.classList.add('hide');
    edit.classList.add('hide');
    textArea.disabled = true;
  } else {
    textArea.disabled = true;
    eliminar.addEventListener('click', () => {
      deleteComment(objComment.idPost, objComment.id);
    });
    if (currentUser().email !== objComment.correo) {
      edit.classList.add('hide');
    } else {
      edit.classList.remove('hide');
      edit.addEventListener('click', () => {
        save.classList.remove('hide');
        edit.classList.add('hide');
        textArea.disabled = false;
        textArea.select();
      });
      save.addEventListener('click', () => {
        editComment(objComment.idPost, objComment.id, textArea.value);
        edit.classList.remove('hide');
        save.classList.add('hide');
        textArea.disabled = true;
      });
    }
  }
  return commentContainer;
};
