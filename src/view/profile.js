import { currentUser } from '../model/Model-firebase.js';

export const viewProfile = () => {
  const profileContainer = document.createElement('div');
  profileContainer.innerHTML = '';
  const profileTemplate = `
    <form class="form-profile">
      <img class="img-profile" src='${currentUser().photoURL}'/>
      <label class="name-profile" id="nombre">${currentUser().displayName}</label>
      <!--<label class="name-self">Email:</label>-->
      <label class="label-profile">${currentUser().email}</label>
    </form>
    `;
  profileContainer.innerHTML = profileTemplate;
  profileContainer.classList.add('container-profile');
  return profileContainer;
};
