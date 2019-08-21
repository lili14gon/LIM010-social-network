import { readPost } from '../Model/Model-firestore.js';

export const screenPost = () => {
  const divContainer = document.createElement('div');
  divContainer.innerHTML = '';
  const postTemplate = `  
      <div class="colunm-post">
      <div><p id="nombre"></p> </div>
      <div>
        <p><textarea class="estilotextarea"name="comentarios" required  placeholder="¿Que quieres compartir?" 
        id="comentario">${readPost()}</textarea></p>
      </div>
      <div>
        <button type="" class="inpu" id="likes">likes</button>
        <button type="" class="inpu" id="editar">editar</button>
      </div>
    </div>`;
    // console.log(nameEmail().photoURL);
  divContainer.innerHTML = postTemplate;
  divContainer.classList.add('container-home');
  const editar = divContainer.querySelector('#editar');
  editar.addEventListener('click', () => {
  });
  return divContainer;
};
