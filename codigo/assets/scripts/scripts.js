function mostrarErro (mensagem)
{
  console.log(mensagem);
}



/* ------------------------ Definir comportamento para mostrar o pop-up de LOGIN (INICIO) ------------------------ */



function loginOnload ()
{
  let loginBtnMostrar = document.querySelector("#btnMostrarLogin");
  
  
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
      adicionarLoginPopup(data, htmlElement);
    })
    .catch(error => console.error("Erro ao carregar o pop-up de login: ", error));
}

/**
 * adicionarLoginPopup - Funcao para adicionar o HTML do pop-up de login
 * @param data - Conteudo do pop-up a ser adicionado
 * @param htmlElement - Elemento pai do pop-up de login a ser inserido
 */
function adicionarLoginPopup (data, htmlElement)
{
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



/* ------------------------ Definir comportamento para mostrar o pop-up de LOGIN (FIM) ------------------------ */

/* --------------------- Definir comportamento para mostrar o pop-up de CADASTRO (INICIO) ------------------------ */



/**
 * carregarCadastroPopup - Funcao para ler o template do pop-up de cadastro
 * @param htmlElement - Elemento pai do pop-up de cadastro a ser inserido
 */
function carregarCadastroPopup (htmlElement)
{
//Fazer chamada do template
  fetch('../../pages/cadastro/cadastro-template.html')
    .then(response => response.text())
    .then(data => {
      adicionarCadastroPopup(data, htmlElement);
    })
    .catch(error => console.error("Erro ao carregar o pop-up de cadastro: ", error));
}

/**
 * adicionarCadastroPopup - Funcao para adicionar o HTML do pop-up de cadastro
 * @param data - Conteudo do pop-up a ser adicionado
 * @param htmlElement - Elemento pai do pop-up de cadastro a ser inserido
 */
function adicionarCadastroPopup (data, htmlElement)
{
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
}

/**
 * carregarCadastroPopupEventos - Funcao para definir os eventos dos botoes do pop-up de cadastro
 */
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

/**
 * cadastroEventoPassarPaginas - Funcao para definir o comportamento da passagem de paginas
 */
function cadastroEventoPassarPaginas()
{
//Definir dados locais
  let controle = false;
  let objUsuario = { nome: "", email: "", senha: "", cpf: "", data_de_nascimento: "", telefone: "", tags: { atencao: 0, passeio: 0, carinho: 0, extrovertido: 0, animacao: 0 } };
  let pagina = parseInt( document.querySelector('.login-input').id );
  let cadastroSubmit = document.querySelector('#cadastro-submit');
//Atualizar o conteudo da pagina
  pagina++;
  cadastroPaginas(pagina);
//Definir evento de passar a pagina
  cadastroSubmit.addEventListener('click', () => {  
  //Testar se a pagina esta preenchida
    if ( !cadastroInputsPreenchidos(pagina) )
    {
      mostrarErro("É obrigatório o preenchimento de todos os campos!");
    } 
    else
    {
    //Atribuir dados e mostrar proxima pagina
      objUsuario = cadastroPreencherObj(pagina, objUsuario);
      cadastroPaginas(++pagina);
    //Testar se e' pagina final
      if ( pagina === 4 )
        postUsuario(objUsuario);  
    }
  });
}

/**
 * cadastroPaginas - Funcao para controlar o conteudo a ser mostrado no pop-up de cadastro
 * @param pagina - Pagina a ser mostrada
 */
function cadastroPaginas(pagina)
{
//Testar paginas
  switch (pagina)
  {
    case 1: cadastroPagina_1(); break;
    case 2: cadastroPagina_2(); break;
    case 3: cadastroPagina_3(); break;
  }
}

/**
 * cadastroPagina_1 - Funcao para mostrar o conteudo especifico da primeira pagina do pop-up de cadastro
 */
function cadastroPagina_1 ()
{
//Definir dados locais
  let input_1 = document.querySelector('#cadastro-input-field-1');
  let input_2 = document.querySelector('#cadastro-input-field-2');
  let input_3 = document.querySelector('#cadastro-input-field-3');
  let cadastroSubmit = document.querySelector('#cadastro-submit');
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

/**
 * cadastroPagina_2 - Funcao para mostrar o conteudo especifico da segunda pagina do pop-up de cadastro
 */
function cadastroPagina_2 ()
{
//Definir dados locais
  let input_1 = document.querySelector('#cadastro-input-field-1');
  let input_2 = document.querySelector('#cadastro-input-field-2');
  let input_3 = document.querySelector('#cadastro-input-field-3');
  let cadastroSubmit = document.querySelector('#cadastro-submit');
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

/**
 * cadastroPagina_3 - Funcao para mostrar o conteudo especifico da terceira pagina do pop-up de cadastro
 */
function cadastroPagina_3 ()
{
//Definir dados locais
  let loginContainer = document.querySelector('.login-container');
  let cadastroSubmit = document.querySelector('#cadastro-submit');
  let loginInput = document.querySelector('.login-input');
  let loginButtonSubmit = document.querySelector('.login-button-submit');
//Esvaziar inputs
  loginInput.innerHTML = ""; 
//Substituir dados
  fetch('../../pages/cadastro/cadastro-template-tags.html')
    .then(response => response.text())
    .then(data => {
      loginInput.insertAdjacentHTML('beforeend', data);
    });
  cadastroSubmit.innerHTML = "Cadastrar";
//Alterar tamanho
  loginContainer.style.width = 'auto';
  loginContainer.style.height = '720px';
  loginContainer.style.padding = '20px 40px 0px 40px';
  loginButtonSubmit.style.margin = '10px 0 0 0';
}

/**
 * cadastroPreencherObj - Funcao para controlar o preenchimento do objeto Usuário de acordo com a pagina do pop-up de cadastro
 * @param pagina - Pagina a ter seus dados lidos
 * @param objUsuario - Objeto Usuário a ser preenchido
 * @return objUsuario - Objeto Usuário resultante
 */
function cadastroPreencherObj(pagina, objUsuario)
{
//Testar pagina
  switch(pagina)
  {
    case 1: objUsuario = cadastroPreencher_1(objUsuario); break;
    case 2: objUsuario = cadastroPreencher_2(objUsuario); break;
    case 3: objUsuario = cadastroPreencher_3(objUsuario); break;
  }
//Retornar
  return objUsuario;
}

/**
 * cadastroPreencher_1 - Funcao para preencher o objeto Usuário com as informacoes da primeira pagina do pop-up de cadastro
 * @param objUsuario - Objeto Usuário a ser preenchido
 * @return objUsuario - Objeto Usuário resultante
 */
function cadastroPreencher_1 (objUsuario)
{
//Definir dados locais
  let input_1 = document.querySelector('#cadastro-input-field-1').value;
  let input_2 = document.querySelector('#cadastro-input-field-2').value;
  let input_3 = document.querySelector('#cadastro-input-field-3').value;
//Substituir no objeto
  objUsuario.nome = input_1;
  objUsuario.email = input_2;
  objUsuario.senha = input_3;
//Retornar
  return objUsuario;
}

/**
 * cadastroPreencher_2 - Funcao para preencher o objeto Usuário com as informacoes da segunda pagina do pop-up de cadastro
 * @param objUsuario - Objeto Usuário a ser preenchido
 * @return objUsuario - Objeto Usuário resultante
 */
function cadastroPreencher_2 (objUsuario)
{
//Definir dados locais
  let input_1 = document.querySelector('#cadastro-input-field-1').value;
  let input_2 = document.querySelector('#cadastro-input-field-2').value;
  let input_3 = document.querySelector('#cadastro-input-field-3').value;
//Substituir no objeto
  objUsuario.cpf = input_1;
  objUsuario.data_de_nascimento = input_2;
  objUsuario.telefone = input_3;  
//Retornar
  return objUsuario;
}

/**
 * cadastroPreencher_3 - Funcao para preencher o objeto Usuário com as informacoes da terceira pagina do pop-up de cadastro
 * @param objUsuario - Objeto Usuário a ser preenchido
 * @return objUsuario - Objeto Usuário resultante
 */
function cadastroPreencher_3 (objUsuario)
{
//Definir dados locais
  let arrRadioInput = [];
  let tags = [];
  let x = 0, y = 0;
//Ler arranjo de radio buttons
  arrRadioInput = cadastroLerRadioButtons();
//Calcular valores
  for (let i = 0; i < 5; i++)
  {
    for (let j = 0; j < 5; j++)
    {
    //Definir dados locais
      let radio = arrRadioInput[x++];
    //Testar se esta selecionado
      if (radio.checked)
        tags[y++] = parseInt( radio.classList[1] );
    }
  }
//Atribuir valores
  objUsuario.tags.atencao = tags[0];
  objUsuario.tags.passeio = tags[1];
  objUsuario.tags.carinho = tags[2];
  objUsuario.tags.extrovertido = tags[3];
  objUsuario.tags.animacao = tags[4];
//Retornar
  return objUsuario;
}

/**
 * cadastroLerRadioButtons - Funcao para ler cada radio-button da teceira pagina do pop-up de cadastro e armazená-los em uma arranjo de forma ordenada
 * @return arrRadioInput - Arranjo contendo todos os radio-buttons de forma ordenada
 */
function cadastroLerRadioButtons ()
{
//Definir dados locais
  const arrRadioInput = [];
  let x = 0;
//Preencher o arranjo
  for (let i = 1; i <= 5; i++)
  {
    for (let j = 1; j <= 5; j++)
    {
      arrRadioInput[x++] = document.querySelector(`#cadastro-radio-${i}-${j}`);
    }
  }
//Retornar
  return arrRadioInput;
}

/**
 * cadastroInputsPreenchidos - Funcao para controlar o teste de preenchimento de cada pagina do pop-up de cadastro
 * @param pagina - Pagina a ser testada
 * @return resp - True, se todos os campos estao preenchidos. False, se contrario
 */
function cadastroInputsPreenchidos(pagina)
{
//Definir dados locais
  let resp = false;
//Testar pagina
  switch (pagina)
  {
    case 1: resp = cadastroPreenchido_1(); break;
    case 2: resp = cadastroPreenchido_2(); break;
    case 3: resp = cadastroPreenchido_3(); break;
  }
//Retornar
  return resp;
}

/**
 * cadastroPreenchido_1 - Funcao para testar se todos os campos da primeira pagina do pop-up de cadastro estao preenchidos
 * @return resp - True, se todos os campos estao preenchidos. False, se contrario
 */
function cadastroPreenchido_1 ()
{
//Definir dados locais
  let resp = false;
  let input_1 = document.querySelector('#cadastro-input-field-1').value;
  let input_2 = document.querySelector('#cadastro-input-field-2').value;
  let input_3 = document.querySelector('#cadastro-input-field-3').value;
//Testar se entradas estao preenchidas
  if (input_1.length === 0 || input_2.length === 0 || input_3.length === 0)
    resp = false;
  else
    resp = true;
//Retornar
  return resp;
}

/**
 * cadastroPreenchido_2 - Funcao para testar se todos os campos da segunda pagina do pop-up de cadastro estao preenchidos
 * @return resp - True, se todos os campos estao preenchidos. False, se contrario
 */
function cadastroPreenchido_2 ()
{
//Definir dados locais
  let resp = false;
  let input_1 = document.querySelector('#cadastro-input-field-1').value;
  let input_2 = document.querySelector('#cadastro-input-field-2').value;
  let input_3 = document.querySelector('#cadastro-input-field-3').value;
//Testar se entradas estao preenchidas
  if (input_1.length !== 14 || input_2.length !== 10 || input_3.length !== 15)
    resp = false;
  else
    resp = true;
//Retornar
  return resp;
}

/**
 * cadastroPreenchido_3 - Funcao para testar se todos os campos da terceira pagina do pop-up de cadastro estao preenchidos
 * @return resp - True, se todos os campos estao preenchidos. False, se contrario
 */
function cadastroPreenchido_3 ()
{
//Definir dados locais
  let controle = false;
  const arrRadioInput = cadastroLerRadioButtons();
  let x = 0;
  let resp = true;
//Testar se os botoes estao preenchidos
  for (let i = 1; i <= 5; i++)
  {
    controle = false;
    for(let j = 1; j <= 5; j++)
    {
      controle = controle || arrRadioInput[x].checked;
      x++;
    }
    resp = resp && controle;
  }
//Retornar
return resp;
}



/* --------------------- Definir comportamento para mostrar o pop-up de CADASTRO (FIM) ------------------------ */


function postUsuario (objUsuario)
{
  console.log(objUsuario);
}