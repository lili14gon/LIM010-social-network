export const screenRegister = () => {
  const divElemt = document.createElement('div');
  const registerPage = `  
      <figure>
        <img class="img" src="img/logo.png" alt=""/>
      </figure>
      <div id='login' class="flex-column flex">
          <h1 class="margin name text-color">- Foods Kids -</h1>
          <input class="inputs block" type="email" name="correo" id="email2" placeholder="Email">
          <input class="inputs block" type="password" name="contraseña" id="password2"  placeholder="Password">
          <a href="#/logeo">crear cuenta</a>
       </div>`

  divElemt.innerHTML = registerPage;
  return divElemt;
}