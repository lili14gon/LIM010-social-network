// import { readPost } from '../Model/Model-firestore.js';

export const screenPost = (posts) => {
  const divContainer = document.createElement('div');
  divContainer.innerHTML = '';
  const postTemplate = `  
      <div class="colunm-post">
      <p id="nombre">${posts.email}</p>
      <div>
        <p><textarea class="estilotex"name="comentarios" required  placeholder="¿Que quieres compartir?" 
        id="comentario">${posts.text}</textarea></p>
      </div>
      <div>
        <button type="" class="inpu" id="likes">likes</button>
        <button type="" class="inpu" id="editar">editar</button>
        <button type="" class="inpu" id="editar">borrar</button>
      </div>
    </div>`;
  const postTemplate2 = `  
    <div class="colunm-post">
    <p id="nombre">${posts.email}</p>
    <div>
      <p><textarea class="estilotex"name="comentarios" required  placeholder="¿Que quieres compartir?" 
      id="comentario">${posts.text}</textarea></p>
    </div>
    <div>
      <button type="" class="inpu" id="likes">likes</button>
      <button type="" class="inpu" id="editar"></button>
    </div>
  </div>`;
  //  console.log(nameEmail().photoURL);
  divContainer.innerHTML = postTemplate;
  divContainer.classList.add('container-home');
  const editar = divContainer.querySelector('#editar');
  editar.addEventListener('click', () => {
  });
  return divContainer;
};
