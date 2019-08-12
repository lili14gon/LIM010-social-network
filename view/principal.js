export const screenMain = () => {
  const divElemt = document.createElement('div');
  divElemt.innerHTML = '';
  const loginPage = `  
        <img class="img" src="img/logo.png" alt=""/>
        <form id="screen-login" class="flex-form">
          <h1 class="margin name text-color">- Foods Kids -</h1>
          <p><strong>Bienvenido a Foods Kids </strong> </p>
      </form>`;
  divElemt.innerHTML = loginPage;  
  return divElemt;
}