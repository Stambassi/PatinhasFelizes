/**
 * carregarLoginPopup - Funcao para ler o template do pop-up de login
 * @param htmlElement - Elemento pai do pop-up de login a ser inserido
 */
function carregarLoginPopup (htmlElement)
{
//Fazer chamada do template
  fetch('../../pages/login/login-template.html')
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


/**
 * readJSONServer - Funcao para ler um objeto do JSON Server de acordo com a url passada.
 */

async function readJSONServer(url) {
//Definir dados locais
  let obj = {};
  try {
//Acesso aos dados da url
    const response = await fetch(url);
//Gravacao na variavel obj
    obj = await response.json();
    console.log ("Sucesso", obj);
  } catch (error) {
    console.error("Error", error);
  }
//Retorno obj
  return obj;
}

/**
 * readJSONServerId - Funcao para ler um objeto do JSON Server de acordo com a url passada e o id especifico.
 */

async function readJSONServerId(url, id) {
  //Definir dados locais
    let obj = {};
    url += `/${id}`
    try {
  //Acesso aos dados da url
      const response = await fetch(url);
  //Gravacao na variavel obj
      obj = await response.json();
      console.log ("Sucesso", obj);
    } catch (error) {
      console.error("Error", error);
    }
  //Retorno obj
    return obj;
  }

/**
 * carregarAnimais - Funcao para carregar os animais do JSON Server e exibi-los na tela inicial.
 */

async function carregarAnimais() {

//Definir dados locais
  let apiUrlJsonAnimais = "https://a050aadc-b2a9-48cd-9a69-a5566f985adf-00-1q7wk422qq9m2.riker.replit.dev/animais";
  let divConteudoAnimais = document.querySelector("#telaInicial-Conteudo");
  let animais = {};
  let strHTML = "";
  let strSexoAnimal = "" 

//Acesso aos dados do JSON Server
  animais = await readJSONServer(apiUrlJsonAnimais);

//Gravacao dos cards na String strHTML
  for(let x = 0; x < animais.length; x++) {

//Controle icone do sexo do animal
    if(animais[x].sexo == 'F') {
      strSexoAnimal = "venus"; 
    } else {
      strSexoAnimal = "mars"; 
    }

    strHTML += `<div class="telaInicial-Card">
                    <img src="${animais[x].imagem}" alt="">
                    <p>ONG ASS SOCIAL PROTEÇÃO ANIMAIS ANJOS PATAS</p>
                    <div class="telaInicial-Card-Informacoes">
                        <div class="telaInicial-Card-InfPet">
                        <i class="fa-solid fa-2xl fa-${strSexoAnimal}"></i>
                        <h5>${animais[x].nome}</h5>
                        </div>
                        <button id="${animais[x].id}" class="telaInicial-abrirModalBtn">Saiba Mais</button>
                    </div>
                </div>`
  }

//Insercao da String strHTML na tela inicial
  divConteudoAnimais.innerHTML = strHTML;

//Carrega a descricao do animal
  carregarDescricaoAnimalPopupEventos()
}


/**
 * carregarDescricaoAnimalPopupEventos - Funcao para definir os eventos dos botoes do pop-up de descricao animal
 */

function carregarDescricaoAnimalPopupEventos () {
//Definir dados locais
  let btAbrirModalEl = document.querySelectorAll(".telaInicial-abrirModalBtn");
//Chamar funcao para abrir pop-up da descricao do animal
  for (let i = 0; i < btAbrirModalEl.length; i++) {
    btAbrirModalEl[i].addEventListener('click', () => abrirDescricaoAnimalPopup(event))
  }
}

/**
 * abrirDescricaoAnimalPopup - Funcao para definir a visibilidade do pop-up de descricao do animal de acordo com o id.
 */

async function abrirDescricaoAnimalPopup(event) {
//Definir dados locais
  let apiUrlJsonAnimais = "https://a050aadc-b2a9-48cd-9a69-a5566f985adf-00-1q7wk422qq9m2.riker.replit.dev/animais";
  let descricaoModalEl = document.querySelector(".telaInicial-PopUp-Modal");

  let idEvent = event.target.id;
  let animal = {};
  let strHTML = "";
  let srcSexoAnimal = ""; 
  let strSexoAnimal = ""; 
  let strCastradoAnimal = "";

//Acesso ao dado do id no JSON Server
  animal = await readJSONServerId(apiUrlJsonAnimais, idEvent);

//Controle icone do sexo do animal
  if(animal.sexo == 'F') {
    srcSexoAnimal = "venus"; 
    strSexoAnimal = "Fêmea";
  } else {
    srcSexoAnimal = "mars"; 
    strSexoAnimal = "Macho";
  }

  if(animal.castrado) {
    strCastradoAnimal = "Castrado"; 
  } else {
    strCastradoAnimal = "Não Castrado"; 
  }

//Mudanca strHTML 
  strHTML = `<div class="telaInicial-PopUpDescricao">
                <img src="${animal.imagem}" alt="">
                <div class="telaInicial-PopUpInformacoes">
                    <div class="telaInicial-PopUpInformacoesPrincipais">
                        <div class="telaInicial-PopUp-ModalFechar">
                            <div class="telaInicial-PopUpInformacoesPrincipais-Titulo">
                                <h3>${animal.nome}</h3>
                                <i class="fa-solid fa-1xl fa-${srcSexoAnimal}"></i>
                            </div>
                            <i class="fa-solid fa-x telaInicial-fecharModalBtn"></i>
                        </div>
                        <div class="telaInicial-PopUpInformacoesPrincipais-Subtitulo">
                            <p>${animal.especie}</p>
                            <p>${animal.raca}</p>
                            <p>${strSexoAnimal}</p>
                            <p>${animal.porte}</p>
                            <p>${animal.idade}</p>
                            <p>${strCastradoAnimal}</p>
                        </div>
                    </div>
                    <h5>A História de ${animal.nome}</h5>
                    <p class="telaInicial-PopUpInformacoesHistoria">
                      ${animal.historia}
                    </p>
                    <div class="telaInicial-PopUpInformacoesVacinas">
                        <h5>Vacinas</h5>
                        <ul>
                            <li>FIV</li>
                            <li>FeLV</li>
                            <li>V4</li>
                            <li>V5</li>
                        </ul>
                    </div>
                    <button>Adotar!</button>
                </div>
            </div>`

//Mudar o innerHTML da div descricao do animal de acordo com o id
  descricaoModalEl.innerHTML = strHTML;

//Mudar o display para block
  descricaoModalEl.style.display = "block";

//Chamar funcao para fechar pop-up da descricao do animal
  let btFecharModalEl = document.querySelector(".telaInicial-fecharModalBtn");
  btFecharModalEl.addEventListener('click', () => fecharDescricaoAnimalPopup())
}
  
  /**
   * fecharDescricaoAnimalPopup - Funcao para definir a visibilidade do pop-up de descricao do animal para 'none'
   */
  
  function fecharDescricaoAnimalPopup() {
  //Definir dados locais
    let descricaoModalEl = document.querySelector(".telaInicial-PopUp-Modal");
  //Mudar o display para none
    descricaoModalEl.style.display = "none";
  }