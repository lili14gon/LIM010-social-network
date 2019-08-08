export const screenLogin = ()=>{
    const divElemt = document.createElement('div');
    const loginPage = `  
      <figure>
        <img class="img" src="img/logo.png" alt=""/>
      </figure>
      <div id='login' class="flex-column flex">
          <h1 class="margin name text-color">- Foods Kids -</h1>
          <p>Bienvenido a <strong>Foods Kids </strong>red que te ayuda con la alimentacion de tus hijos </p>
        <form id="login-user" class="margin">
          <input class="inputs block" type="email" name="correo" id="email" placeholder="Email">
          <input class="inputs block" type="password" name="contraseña" id="password"  placeholder="Password">
          <button name="button" type="submit" id="button">log in</button>
          <h4>O bien ingresa con..</h4>
          <a href=""></a>
          <a href=""></a>
          <div>
          <h4>¿No tienes una cuenta?</h4><a href="#/registro">Registrate</a>
          </div>`
          
    divElemt.innerHTML = loginPage;
    return divElemt;
}