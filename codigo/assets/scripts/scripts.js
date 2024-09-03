/**
 * carregarLoginPopup - Funcao para ler o template do pop-up de login
 * @param htmlElement - Elemento pai do pop-up de login a ser inserido
 */
function carregarLoginPopup (htmlElement)
{
//Fazer chamada do template
  fetch('../../pages/login-template.html')
    .then(response => response.text())
    .then(data => {
      htmlElement.insertAdjacentHTML('beforeend', data);
      carregarLoginPopupEventos();
    })
    .catch(error => console.error("Erro ao carregar o pop-up de login: ", error));
}


/**
 * fecharLoginPopup - Funcao para definir a visibilidade do pop-up de login para 'none'
 */
function fecharLoginPopup ()
{
//Definir dados locais
  let loginModal = document.querySelector('.login-modal');
  let loginContainer = document.querySelector('.login-container');
//Trocar classes de animacoes do login-container
  loginContainer.classList.remove('pop-up-top');
  loginContainer.classList.add('pop-up-bottom');
//Definir a saida do pop-up de login
  loginModal.classList.remove('login-show');
//Definir evento para esperar a animacao
  loginModal.addEventListener('animationend', function fimAnimacao() {
    loginModal.removeEventListener('animationend', fimAnimacao);
    loginModal.classList.add('login-hide'); 
  }, { once: true });  
}


/**
 * carregarLoginPopupEventos - Funcao para definir os eventos dos botoes do pop-up de login
 */
function carregarLoginPopupEventos ()
{
//Definir dados locais
  let loginCloseImg = document.querySelector('.login-close-window');
//Definir eventos
  loginCloseImg.addEventListener('click', () => fecharLoginPopup())
}


/* Definir comportamento para mostrar o pop-up de login */


let loginBtnMostrar = document.querySelector("#btnMostrar")


loginBtnMostrar.addEventListener('click', () => {
//Definir dados locais
  let loginModal = document.querySelector('.login-modal');
  let loginContainer = document.querySelector('.login-container');
//Testar se ja existe o loginModal na pagina
  if( loginModal )
  {
    loginModal.classList.remove('login-hide');
    loginModal.classList.add('login-show');
    loginContainer.classList.remove('pop-up-bottom');
    loginContainer.classList.add('pop-up-top');
  }
  else
  { 
    let loginMain = document.querySelector('main');
    carregarLoginPopup(loginMain);
  }
});