function mostrarErro (mensagem)
{
  console.log(mensagem);
}

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
    //Testar se outro pop-up esta ativo
      let modal = document.querySelector('.modal');
      if ( modal )
      {
      //Remover o container existente
        modal.remove();
      //Adicionar o novo modal de cadastro
        htmlElement.insertAdjacentHTML('beforeend', data);
        carregarLoginPopupEventos();
      }
      else
      {
      //Adicionar o novo modal de cadastro
        htmlElement.insertAdjacentHTML('beforeend', data);
        carregarLoginPopupEventos();        
      }
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
    loginModal.remove();
  }, { once: true });  
}


/**
 * carregarLoginPopupEventos - Funcao para definir os eventos dos botoes do pop-up de login
 */
function carregarLoginPopupEventos ()
{
//Definir dados locais
  let loginCloseImg = document.querySelector('.login-close-window');
  let loginBtnCadastro = document.querySelector('#login-btn-cadastro');
  let loginMain = document.querySelector('main');
//Definir eventos
  loginCloseImg.addEventListener('click', () => fecharLoginPopup())
  loginBtnCadastro.addEventListener('click', () => carregarCadastroPopup(loginMain));
}


/* Definir comportamento para mostrar o pop-up de login */


let loginBtnMostrar = document.querySelector("#btnMostrarLogin")


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

function carregarCadastroPopup (htmlElement)
{
//Fazer chamada do template
  fetch('../../pages/cadastro/cadastro-template.html')
    .then(response => response.text())
    .then(data => {
    //Testar se outro pop-up esta ativo
      let modal = document.querySelector('.modal');
      if ( modal )
      {
      //Remover o container existente
        modal.remove();
      //Adicionar o novo modal de cadastro
        htmlElement.insertAdjacentHTML('beforeend', data);
        carregarCadastroPopupEventos();
      }
      else
      {
      //Adicionar o novo modal de cadastro
        htmlElement.insertAdjacentHTML('beforeend', data);
        carregarCadastroPopupEventos();        
      }
    })
    .catch(error => console.error("Erro ao carregar o pop-up de cadastro: ", error));
}

function cadastroPaginas(pagina)
{
//Definir dados locais
  let input_1 = document.querySelector('#cadastro-input-field-1');
  let input_2 = document.querySelector('#cadastro-input-field-2');
  let input_3 = document.querySelector('#cadastro-input-field-3');
  let cadastroSubmit = document.querySelector('#cadastro-submit');  
//Testar paginas
  if (pagina === 1)
  {  
  //Esvaziar inputs
    input_1.value = "";
    input_2.value = "";
    input_3.value = "";
  //Substituir placeholders
    input_1.placeholder = "Nome completo";
    input_2.placeholder = "Email";
    input_3.placeholder = "Senha";
  //Substituir botao
    cadastroSubmit.innerHTML = "Próximo";
  }
  else if (pagina === 2)
  {
  //Esvaziar inputs
    input_1.value = "";
    input_2.value = "";
    input_3.value = "";
  //Substituir placeholders
    input_1.placeholder = "CPF";
    input_2.placeholder = "Data de nascimento";
    input_3.placeholder = "Telefone";
    input_3.type = "text";
  //Definir mascaras
    $('#cadastro-input-field-1').mask('000.000.000-00');
    $('#cadastro-input-field-2').mask('00/00/0000');
    $('#cadastro-input-field-3').mask('(00) 00000-0000');
    cadastroSubmit.innerHTML = "Próximo";
  }
  else if (pagina === 3)
  {  
  //Esvaziar inputs
    input_1.value = "";
    input_2.value = "";
    input_3.value = "";
  //Substituir dados
    input_1.placeholder = "";
    input_2.placeholder = "";
    input_3.placeholder = "";
    cadastroSubmit.innerHTML = "Cadastrar";
  }
  else if (pagina === 4)
  {
    console.log("Cadastro concluido com sucesso!");
  }
}

function cadastroInputsPreenchidos(pagina)
{
//Definir dados locais
  let resp = false;
//Testar pagina
  if (pagina === 1 || pagina === 2)
  {
  //Definir dados locais
    let input_1 = document.querySelector('#cadastro-input-field-1').value;
    let input_2 = document.querySelector('#cadastro-input-field-2').value;
    let input_3 = document.querySelector('#cadastro-input-field-3').value;
  //Testar se entradas estao preenchidas
    if (input_1.length === 0 || input_2.length === 0 || input_3.length === 0)
      resp = false;
    else
      resp = true;
  }
  else if (pagina === 3)
  {
    resp = true;
  } 
  return resp;
}

function cadastroInputsCorretos(pagina)
{
  return true;
}

function cadastroPreencherObj(pagina, objUsuario)
{
//Testar pagina
  if (pagina === 1)
  {
  //Definir dados locais
    let input_1 = document.querySelector('#cadastro-input-field-1').value;
    let input_2 = document.querySelector('#cadastro-input-field-2').value;
    let input_3 = document.querySelector('#cadastro-input-field-3').value;
  //Substituir no objeto
    objUsuario.nome = input_1;
    objUsuario.email = input_2;
    objUsuario.senha = input_3;
  }
  if (pagina === 2)
  {
  //Definir dados locais
    let input_1 = document.querySelector('#cadastro-input-field-1').value;
    let input_2 = document.querySelector('#cadastro-input-field-2').value;
    let input_3 = document.querySelector('#cadastro-input-field-3').value;
  //Substituir no objeto
    objUsuario.cpf = input_1;
    objUsuario.data_de_nascimento = input_2;
    objUsuario.telefone = input_3;    
  }
//Retornar
  return objUsuario;
}

function cadastroProximo (pagina, objUsuario)
{
//Testar se as entradas estao corretas
  if ( cadastroInputsCorretos(pagina) )
  {
  //Atualizar o objeto do usuario
    objUsuario = cadastroPreencherObj(pagina, objUsuario);
  }
//Retornar
  return objUsuario;
}

function cadastroEventoPassarPaginas()
{
//Definir dados locais
  let objUsuario = {
    nome: "",
    email: "",
    senha: "",
    cpf: "",
    data_de_nascimento: "",
    telefone: "",
    tags: {
      atencao: 0,
      passeio: 0,
      carinho: 0,
      extrovertido: 0,
      animacao: 0,
    }
  };
  let pagina = parseInt( document.querySelector('.login-input').id );
  let cadastroSubmit = document.querySelector('#cadastro-submit');
//Atualizar o conteudo da pagina
  cadastroPaginas(++pagina);
//Definir evento de passar a pagina
  cadastroSubmit.addEventListener('click', () => {  
  //Testar se 'pagina' passou do limite
    if ( pagina >= 4 )
    {
      console.log("Cadastro concluído!");
      console.log(objUsuario);
    }
    else if ( !cadastroInputsPreenchidos(pagina) )
    {
      mostrarErro("É obrigatório o preenchimento de todos os campos!");
    } 
    else
    {
      objUsuario = cadastroProximo(pagina, objUsuario);
      cadastroPaginas(++pagina);
    }
  });
}

function carregarCadastroPopupEventos ()
{
//Definir dados auxiliares
  let main = document.querySelector('main');
//Definir dados locais
  let loginCloseImg = document.querySelector('.login-close-window');
  let cadastroBtnLogin = document.querySelector('#cadastro-btn-login');
//Definir evento para fechar o pop-up
  loginCloseImg.addEventListener('click', () => fecharLoginPopup());
//Definir evento para passar de pagina
  cadastroEventoPassarPaginas();
//Definir evento para voltar 'a tela de login
  cadastroBtnLogin.addEventListener('click', () => carregarLoginPopup(main));
}