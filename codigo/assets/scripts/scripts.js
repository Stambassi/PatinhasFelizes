function postUsuario (objUsuario)
{
  console.log(objUsuario);
}


/* ------------------------------ Funções de auxílio para LOGIN/CADASTRO (INICIO) ------------------------------------ */

/**
 * carregarHtml - Funcao para recuperar o HTML a partir de determinada URL
 * @param url - Endereço do arquivo HTML a ser recuperado
 * @return data - Elemento HTML em forma de string
 */
async function carregarHtml (url)
{
//Definir dados locais
  let element = "";
//Tentar fazer a chamada
  try
  {
    const res = await fetch(url); 
    const data = await res.text() 
    return data;
  }
  catch (error) 
  {
    console.error('Erro ao buscar:', error);
    throw error;
  }
}

/**
 * adicionarPopup - Funcao para adicionar determinado conteúdo em determinado elemento pai e, após isso, executar determinada função para definir eventos
 * @param data - Conteúdo a ser adicionado
 * @param htmlElement - Elemento pai
 * @param carregarEventos - Função a ser chamada para definir os eventos da página
 */
function adicionarPopup (data, htmlElement, carregarEventos)
{
//Testar se outro pop-up esta ativo
  let modal = document.querySelector('.modal');
  if ( modal )
  {
  //Remover o container existente
    modal.remove();
  //Adicionar o novo modal
    htmlElement.insertAdjacentHTML('beforeend', data);
    carregarEventos();
  }
  else
  {
  //Adicionar o novo modal
    htmlElement.insertAdjacentHTML('beforeend', data);
    carregarEventos();        
  }
}

/**
 * fecharPopup - Função para remover o pop-up da tela
 */
function fecharPopup ()
{
//Definir dados locais
  let modal = document.querySelector('.lc-modal');
  let container = document.querySelector('.lc-container');
//Trocar classes de animacoes do login-container
  container.classList.remove('pop-up-top');
  container.classList.add('pop-up-bottom');
//Definir a saida do pop-up de login
  modal.classList.remove('login-show');
//Definir evento para esperar a animacao
  modal.addEventListener('animationend', function fimAnimacao() {
    modal.removeEventListener('animationend', fimAnimacao);
    modal.remove();
  }, { once: true });  
}

/**
 * controlarSenha - Função para definir o comportamento do botão de mostrar/esconder senha
 */
function controlarSenha()
{
//Definir dados locais
  let passwordImg = document.querySelector('.password-controle');
  if (passwordImg != null)
  {
    let controleSenha = 0;
  //Definir evento
    passwordImg.addEventListener('click', () => {
      controleSenha = inverterSenha(passwordImg, controleSenha);
    });
  }
}

/**
 * inverterSenha - Função para testar o estado da senha (mostrar/esconder)
 * @param passwordImg - Imagem do botão de mostrar/esconder senha
 * @param controle - Variável inteira de controle
 * @return controle - Estado do input (password/text) e do botão
 */
function inverterSenha (passwordImg, controle)
{
//Definir dados locais
  let senhaInput = document.querySelector('.password');
//Testar se esta escondido
  if (controle === 1)
  {
    senhaInput.type = 'password';
    passwordImg.src = "../../assets/img/hidden.png";
    controle--;
  }
  else
  {
    senhaInput.type = 'text';
    passwordImg.src = "../../assets/img/eye.png";
    controle++;
  }
//Retornar
  return controle;
}

/**
 * limitarNome - Função para limitar a entrada de dados para apenas letras
 * @param inputField - Campo a ser limitado
 */
function limitarNome (inputField)
{
//Testar input
  if (inputField.placeholder == "Nome completo" || inputField.placeholder == "Nome da instituição")
  {
  //Definir dados locais
    let str = inputField.value;
    const letterPattern = /^[A-Za-zÀ-ÖØ-Ýà-öø-ÿ\s]*$/;
  //Testar tamanho
    if (str.length > 0)
    {
    //Testar se o caractere e' valido
      if (!letterPattern.test(inputField.value))
      {
        inputField.value = "";
      }
    }
  }
}

/* ------------------------------ Funções de auxílio para LOGIN/CADASTRO (FIM) ------------------------------------ */

/* ------------------------ Definir comportamento para mostrar o pop-up de LOGIN (INICIO) ------------------------ */

/**
 * loginOnload - Função para definir o comportamento inicial da página (TEMPORÁRIO )
 */
function loginOnload ()
{
  let loginBtnMostrar = document.querySelector("#btnMostrarLogin");
  let btnPerfil = document.querySelector('#btnPerfil');
  loginBtnMostrar.addEventListener('click', () => loginUsuario());
  btnPerfil.addEventListener('click', () => perfilUsuario());
}

/**
 * loginUsuario - Função para recuperar o HTML do login de usuário e adicioná-lo à tela
 */
async function loginUsuario ()
{
//Definir dados locais
  let main = document.querySelector('main');
  let container;
//Recuperar html
  container = await carregarHtml('../codigo/pages/loginUsuario/login-template.html');
//Adicionar html
  adicionarPopup(container, main, loginUsuarioEventos);
}

/**
 * loginUsuarioEventos - Função para definir os eventos do pop-up de login do usuário
 */
function loginUsuarioEventos ()
{
//Definir dados locais
  let closeWindow = document.querySelector('.lc-close-window');
  let cadastroUser = document.querySelector('#login-btn-cadastro');
  let loginONG = document.querySelector('#login-btn-instituicao');
//Definir eventos
  closeWindow.addEventListener('click', () => fecharPopup());
  controlarSenha();
  cadastroUser.addEventListener('click', async () => await cadastroUsuario());
  loginONG.addEventListener('click', async () => await loginInstituicao()); 
}

/* ------------------------ Definir comportamento para mostrar o pop-up de LOGIN de USUÁRIO (FIM) ------------------------ */

/* --------------------- Definir comportamento para mostrar o pop-up de CADASTRO de USUÁRIO (INICIO) ------------------------ */

let objUsuario = { nome: "", email: "", senha: "", cpf: "", data_de_nascimento: "", telefone: "", tags: { atencao: 0, passeio: 0, carinho: 0, extrovertido: 0, animacao: 0 } };

/**
 * cadastroUsuario - Função para recuperar o HTML do cadastro de usuário e adicioná-lo à tela
 */
async function cadastroUsuario ()
{
//Definir dados locais
  let main = document.querySelector('main');
  let pagina = 1;
  let container;
//Recuperar html
  container = await carregarHtml(`../codigo/pages/cadastroUsuario/cadastro-usuario-${pagina}.html`);
//Adicionar html
  adicionarPopup(container, main, cadastroUsuarioEventos);
}

/**
 * loginUsuarioEventos - Função para definir os eventos do pop-up de login do usuário
 */
function cadastroUsuarioEventos ()
{
//Definir dados locais
  let pagina = parseInt( document.querySelector('.lc-input').id );
  let closeWindow = document.querySelector('.lc-close-window');
  let inputNome = document.querySelector('#cadastro-input-field-1');
  let loginUser = document.querySelector('#cadastro-btn-login');
//Definir eventos
  closeWindow.addEventListener('click', () => fecharPopup());
  controlarSenha();
  cadastroUsuarioPassarPagina();
  loginUser.addEventListener('click', async () => await loginUsuario()); 
  if (pagina === 1)
    inputNome.addEventListener('input', () => limitarNome(inputNome));
}

/**
 * cadastroUsuarioPassarPagina - Funcao para definir o comportamento da passagem de paginas do cadastro de usuário
 */
async function cadastroUsuarioPassarPagina()
{
//Definir dados locais
  let pagina = parseInt( document.querySelector('.lc-input').id );
  let cadastroSubmit = document.querySelector('#cadastro-submit');
  let container = document.querySelector('.lc-container');
//Definir estilo
  if (pagina == 1 || pagina === 2)
    container.style.padding = '40px 50px 10px';
//Definir evento de passar a pagina
  cadastroSubmit.addEventListener('click', async () => {  
  //Testar se a pagina esta preenchida
    if ( !cadastroUsuarioInputsPreenchidos(pagina) )
    {
      mostrarErro("É obrigatório o preenchimento de todos os campos!");
    }
    else
    {
    //Atribuir dados e mostrar proxima pagina
      cadastroUsuarioPreencher(pagina);
    //Passar pagina
      pagina++;
    //Testar se esta na ultima pagina
      if (pagina < 4)
        cadastroUsuarioPagina(pagina);
      else
      {
        fecharPopup();
        postUsuario(objUsuario);
      }
    }
  });
}

/**
 * cadastroUsuarioPagina - Funcao para controlar o conteudo a ser mostrado no pop-up de cadastro de usuário
 * @param pagina - Pagina a ser mostrada
 */
async function cadastroUsuarioPagina(pagina)
{
//Definir dados locais
  let main = document.querySelector('main');
//Recuperar html
  container = await carregarHtml(`../codigo/pages/cadastroUsuario/cadastro-usuario-${pagina}.html`);
//Adicionar html
  adicionarPopup(container, main, cadastroUsuarioEventos);
//Definir estilos e particularidades
  if (pagina === 2)
  {
    $('#cadastro-input-field-1').mask('000.000.000-00');
    $('#cadastro-input-field-2').mask('00/00/0000');
    $('#cadastro-input-field-3').mask('(00) 00000-0000');
  }
  else if (pagina == 3)
  {
    container = document.querySelector('.lc-container');
    container.style.width = 'fit-content';
    container.style.margin = '10px 0 0 0';
    container.style.padding = '40px 50px 10px';
  }
}

/**
 * cadastroUsuarioPreencher - Funcao para controlar o preenchimento do objeto Usuário de acordo com a pagina do pop-up de cadastro
 * @param pagina - Pagina a ter seus dados lidos
 */
function cadastroUsuarioPreencher(pagina)
{
//Testar pagina
  switch(pagina)
  {
    case 1: cadastroUsuarioPreencher_1(); break;
    case 2: cadastroUsuarioPreencher_2(); break;
    case 3: cadastroUsuarioPreencher_3(); break;
  }
}

/**
 * cadastroUsuarioPreencher_1 - Função para preencher o objeto de acordo com os campos da primeira página do cadastro de usuário
 */
function cadastroUsuarioPreencher_1 ()
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

/**
 * cadastroUsuarioPreencher_2 - Função para preencher o objeto de acordo com os campos da segunda página do cadastro de usuário
 */
function cadastroUsuarioPreencher_2 ()
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

/**
 * cadastroUsuarioPreencher_3 - Função para preencher o objeto de acordo com os campos da terceira página do cadastro de usuário
 */
function cadastroUsuarioPreencher_3 ()
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
}

/**
 * cadastroLerRadioButtons - Funcao para ler cada radio-button da teceira pagina do pop-up de cadastro de usuário e armazená-los em uma arranjo de forma ordenada
 * @return arrRadioInput - Arranjo contendo todos os radio-buttons ordenados
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
 * cadastroUsuarioInputsPreenchidos - Funcao para controlar o teste de preenchimento de cada pagina do pop-up de cadastro de usuário
 * @param pagina - Pagina a ser testada
 * @return resp - True, se todos os campos estao preenchidos. False, se contrario
 */
function cadastroUsuarioInputsPreenchidos(pagina)
{
//Definir dados locais
  let resp = false;
//Testar pagina
  switch (pagina)
  {
    case 1: resp = cadastroUsuarioPreenchido_1(); break;
    case 2: resp = cadastroUsuarioPreenchido_2(); break;
    case 3: resp = cadastroUsuarioPreenchido_3(); break;
  }
//Retornar
  return resp;
}

/**
 * cadastroUsuarioPreenchido_1 - Funcao para testar se todos os campos da primeira pagina do pop-up de cadastro de usuário estao preenchidos
 * @return resp - True, se todos os campos estao preenchidos. False, se contrario
 */
function cadastroUsuarioPreenchido_1 ()
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
 * cadastroUsuarioPreenchido_2 - Funcao para testar se todos os campos da segunda pagina do pop-up de cadastro de usuário estao preenchidos
 * @return resp - True, se todos os campos estao preenchidos. False, se contrario
 */
function cadastroUsuarioPreenchido_2 ()
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
 * cadastroUsuarioPreenchido_3 - Funcao para testar se todos os campos da terceira pagina do pop-up de cadastro de usuário estao preenchidos
 * @return resp - True, se todos os campos estao preenchidos. False, se contrario
 */
function cadastroUsuarioPreenchido_3 ()
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



/* -------------------------------- Definir comportamento para mostrar o pop-up de CADASTRO de USUÁRIO (FIM) ------------------------ */


/* --------------------- Definir comportamento para mostrar o pop-up de LOGIN de INSTITUICAO (INICIO) ------------------------ */

/**
 * loginInstituicao - Função para recuperar o HTML do login de instituição e adicioná-lo à tela
 */
async function loginInstituicao ()
{
//Definir dados locais
  let main = document.querySelector('main');
  let container;
//Recuperar container da pagina
  container = await carregarHtml(`../codigo/pages/loginInstituicao/login-template.html`);
//Atualizar o html da pagina
  adicionarPopup(container, main, loginInstituicaoEventos);
}

/**
 * loginInstituicaoEventos - Função para definir os eventos do pop-up de login de instituição
 */
async function loginInstituicaoEventos ()
{
//Definir dados locais
  let closeWindow = document.querySelector('.lc-close-window');
  let cadastroONG = document.querySelector('#cadastro-instituicao');
  let loginUser = document.querySelector('#login-usuario');
//Definir máscara do input de CNPJ
  $('.lc-input-field[placeholder="CNPJ"]').mask('00.000.000/0000-00');
//Definir eventos
  closeWindow.addEventListener('click', () => fecharPopup())
  controlarSenha();
  cadastroONG.addEventListener('click', async () => await cadastroInstituicao());
  loginUser.addEventListener('click', async () => await loginUsuario());  
}


/* ------------------------ Definir comportamento para mostrar o pop-up de LOGIN de INSTITUIÇÃO (FIM) ------------------------ */


/* --------------------- Definir comportamento para mostrar o pop-up de CADASTRO de INSTITUIÇÃO (INICIO) ------------------------ */

let objONG = { nome: "", email: "", senha: "", telefone: "", foto_perfil: "", cnpj: "", descricao: "", endereco: { rua: "", numero: "", bairro: "", cidade: "", estado: "", cep: "" } };

/**
 * cadastroInstituicao - Função para recuperar o HTML do cadastro de instituição e adicioná-lo à tela
 */
async function cadastroInstituicao ()
{
//Definir dados locais
  let main = document.querySelector('main');
  let pagina = 1;  
  let container;
//Recuperar html
  container = await carregarHtml(`../codigo/pages/cadastroInstituicao/cadastro-instituicao-${pagina}.html`);
//Atualizar o html da pagina
  adicionarPopup(container, main, cadastroInstituicaoEventos); 
}

/**
 * cadastroInstituicaoEventos - Função para definir os eventos do pop-up de login de instituição
 */
async function cadastroInstituicaoEventos ()
{
//Definir dados locais
  let pagina = parseInt( document.querySelector('.lc-input').id );
  let closeWindow = document.querySelector('.lc-close-window');
  let loginONG = document.querySelector('#cadastro-btn-login');
//Definir eventos
  closeWindow.addEventListener('click', () => fecharPopup());
  controlarSenha();
  cadastroInstituicaoPassarPagina();
  loginONG.addEventListener('click', async () => await loginInstituicao()); 
  if (pagina === 1)
  {
    let inputNome = document.querySelector('#cadastro-input-field-1');
    inputNome.addEventListener('input', () => limitarNome(inputNome));
  }
  else if (pagina === 2)
  {
    $('#cadastro-input-field-1').mask('00.000.000/0000-00');
    $('#cadastro-input-field-2').mask('(00) 00000-0000');
  }
}

/**
 * cadastroInstituicaoPassarPagina - Funcao para definir o comportamento da passagem de paginas do cadastro de instituição
 */
function cadastroInstituicaoPassarPagina ()
{
//Definir dados locais
  let pagina = parseInt( document.querySelector('.lc-input').id );
  let cadastroSubmit = document.querySelector('#cadastro-submit');
//Definir evento de passar a pagina
  cadastroSubmit.addEventListener('click', async () => {  
  //Testar se a pagina esta preenchida
    if ( !cadastroInstituicaoInputsPreenchidos(pagina) )
      mostrarErro("É obrigatório o preenchimento de todos os campos!");
    else
    {
    //Atribuir dados e mostrar proxima pagina
      cadastroInstituicaoPreencher(pagina);
      pagina++;
      if (pagina < 4)
        cadastroInstituicaoPagina(pagina);
      else
      {
        fecharPopup();
        postUsuario(objONG);
      }
    }
  });
}

/**
 * cadastroInstituicaoPagina - Funcao para controlar o conteudo a ser mostrado no pop-up de cadastro de instituição
 * @param pagina - Pagina a ser mostrada
 */
async function cadastroInstituicaoPagina (pagina)
{
//Definir dados locais
  let main = document.querySelector('main');
  let container;
  let lc_container = document.querySelector('.lc-container');
//Recuperar html
  container = await carregarHtml(`../codigo/pages/cadastroInstituicao/cadastro-instituicao-${pagina}.html`);
//Adicionar html
  adicionarPopup(container, main, cadastroInstituicaoEventos);
//Definir estilos
  if (pagina === 3)
  {
    lc_container.style.height = '800px';
    $('#cadastro-input-field-6').mask('00000-000');
    
  }
}

/**
 * cadastroInstituicaoPreencher - Funcao para controlar o preenchimento do objeto Instituição de acordo com a pagina do pop-up de cadastro
 * @param pagina - Pagina a ter seus dados lidos
 */
function cadastroInstituicaoPreencher (pagina)
{
  switch (pagina)
  {
    case 1: cadastroInstituicaoPreencher_1(); break;
    case 2: cadastroInstituicaoPreencher_2(); break;
    case 3: cadastroInstituicaoPreencher_3(); break;
  }
}

/**
 * cadastroInstituicaoPreencher_1 - Função para preencher o objeto de acordo com os campos da primeira página do cadastro de instituição
 */
function cadastroInstituicaoPreencher_1()
{
//Definir dados locais
  let input_1 = document.querySelector('#cadastro-input-field-1').value;
  let input_2 = document.querySelector('#cadastro-input-field-2').value;
  let input_3 = document.querySelector('#cadastro-input-field-3').value;
//Substituir no objeto
  objONG.nome = input_1;
  objONG.email = input_2;
  objONG.senha = input_3;
}

/**
 * cadastroInstituicaoPreencher_2 - Função para preencher o objeto de acordo com os campos da segunda página do cadastro de instituição
 */
function cadastroInstituicaoPreencher_2()
{
//Definir dados locais
  let input_1 = document.querySelector('#cadastro-input-field-1').value;
  let input_2 = document.querySelector('#cadastro-input-field-2').value;
  let descricao = document.querySelector('#cadastro-instituicao-descricao').value;
//Substituir no objeto
  objONG.cnpj = input_1;
  objONG.telefone = input_2;
  objONG.descricao = descricao; 
}

/**
 * cadastroInstituicaoPreencher_3 - Função para preencher o objeto de acordo com os campos da terceira página do cadastro de instituição
 */
function cadastroInstituicaoPreencher_3()
{
//Definir dados locais
  let input_1 = document.querySelector('#cadastro-input-field-1').value;
  let input_2 = document.querySelector('#cadastro-input-field-2').value;
  let input_3 = document.querySelector('#cadastro-input-field-3').value;
  let input_4 = document.querySelector('#cadastro-input-field-4').value;
  let select = document.querySelector('#cadastro-instituicao-select').value;
  let input_6 = document.querySelector('#cadastro-input-field-6').value;
  objONG.endereco.rua = input_1;
  objONG.endereco.numero = parseInt(input_2);
  objONG.endereco.bairro = input_3;
  objONG.endereco.cidade = input_4;
  objONG.endereco.estado = select;
  objONG.endereco.cep = input_6;
}

/**
 * cadastroInstituicaoInputsPreenchidos - Funcao para controlar o teste de preenchimento de cada pagina do pop-up de cadastro de instituição
 * @param pagina - Pagina a ser testada
 * @return resp - True, se todos os campos estao preenchidos. False, se contrario
 */
function cadastroInstituicaoInputsPreenchidos (pagina)
{
//Definir dados locais
  let resp = false;
//Testar pagina
  switch (pagina)
  {
    case 1: resp = cadastroInstituicaoPreenchido_1(); break;
    case 2: resp = cadastroInstituicaoPreenchido_2(); break;
    case 3: resp = cadastroInstituicaoPreenchido_3(); break;
  }
//Retornar
  return resp;
}

/**
 * cadastroUsuarioPreenchido_1 - Funcao para testar se todos os campos da primeira pagina do pop-up de cadastro de instituição estao preenchidos
 * @return resp - True, se todos os campos estao preenchidos. False, se contrario
 */
function cadastroInstituicaoPreenchido_1 ()
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
 * cadastroUsuarioPreenchido_2 - Funcao para testar se todos os campos da segunda pagina do pop-up de cadastro de instituição estao preenchidos
 * @return resp - True, se todos os campos estao preenchidos. False, se contrario
 */
function cadastroInstituicaoPreenchido_2 ()
{
//Definir dados locais
  let resp = false;
  let input_1 = document.querySelector('#cadastro-input-field-1').value;
  let input_2 = document.querySelector('#cadastro-input-field-2').value;
  let descricao = document.querySelector('#cadastro-instituicao-descricao').value;
//Testar se entradas estao preenchidas
  if (input_1.length !== 18 || input_2.length !== 15 || descricao.length < 50)
    resp = false;
  else
    resp = true;
//Retornar
  return resp;
}

/**
 * cadastroInstituicaoPreenchido_3 - Funcao para testar se todos os campos da terceira pagina do pop-up de cadastro de instituição estao preenchidos
 * @return resp - True, se todos os campos estao preenchidos. False, se contrario
 */
function cadastroInstituicaoPreenchido_3 ()
{
//Definir dados locais
  let resp = false;
  let input_1 = document.querySelector('#cadastro-input-field-1').value;
  let input_2 = document.querySelector('#cadastro-input-field-2').value;
  let input_3 = document.querySelector('#cadastro-input-field-3').value;
  let input_4 = document.querySelector('#cadastro-input-field-4').value;
  let select = document.querySelector('#cadastro-instituicao-select').value;
  let input_6 = document.querySelector('#cadastro-input-field-6').value;
//Testar se entradas estao preenchidas
  if (input_1.length === 0 || input_2.length === 0 || input_3.length === 0 || input_4.length === 0 || select == "Estado" || input_6.length !== 9)
    resp = false;
  else
    resp = true;
//Retornar
  return resp;
}

/* --------------------- Definir comportamento para mostrar o pop-up de LOGIN da Instituicao (FIM) ------------------------ */

/* ---------------------- Definir comportamento para mostrar a tela de PERFIL de USUÁRIO (INÍCIO) ----------------------------- */

/**
 * perfilUsuario - Função para redirecionar o usuário à sua tela de perfil
 */
async function perfilUsuario ()
{
//Redirecionar pagina
  // window.location.href = 'pages/perfilUsuario/perfil-usuario.html';
//Definir dados locais
  let pagina = 1;
//Definir eventos da pagina de perfil
  perfilUsuarioEventos(pagina);
}

/**
 * perfilUsuarioEventos - Função para definir os eventos da pagina de perfil do usuário
 * @param pagina - Página atual da tela de perfil do usuario
 */
function perfilUsuarioEventos (pagina)
{
//Definir dados locais
  let perfil = document.querySelector('#perfil-usuario-perfil');
  let adocao = document.querySelector('#perfil-usuario-adocao');
  let abandonado = document.querySelector('#perfil-usuario-abandonado');
//Definir eventos
  if (pagina === 1)
    conteudoPerfilUsuario(1);
  perfil.addEventListener('click', () => {
    if (pagina !== 1)
    { atualizarPerfilUsuario(1); pagina = 1;  }
  });
  adocao.addEventListener('click', () => {
    if (pagina !== 2)
    { atualizarPerfilUsuario(2); pagina = 2;  }
  });
  abandonado.addEventListener('click', () => {
    if (pagina !== 3)
    { atualizarPerfilUsuario(3); pagina = 3;  }
  });
}

/**
 * atualizarPerfilUsuario - Funcao para controlar a atualizacao do cabecalho da tela de perfil do usuario
 * @param pagina - Pagina atual da tela de perfil do usuario
 */
function atualizarPerfilUsuario (pagina)
{
//Testar pagina
  switch (pagina)
  {
    case 1: atualizarPerfilUsuario_1 (); break;
    case 2: atualizarPerfilUsuario_2 (); break;
    case 3: atualizarPerfilUsuario_3 (); break;
  }
}

/**
 * atualizarPerfilUsuario_1 - Funcao para exibir o cabecalho da primeira pagina da tela de perfil do usuario
 */
function atualizarPerfilUsuario_1 ()
{
//Definir dados locais
  let perfil = document.querySelector('#perfil-usuario-perfil');
  let adocao = document.querySelector('#perfil-usuario-adocao');
  let abandonado = document.querySelector('#perfil-usuario-abandonado'); 
//Atualizar o cabecalho
  perfil.classList.remove('perfil-usuario-titulo-escondido'); 
  adocao.classList.remove('perfil-usuario-titulo-visible'); 
  abandonado.classList.remove('perfil-usuario-titulo-visible');
  perfil.classList.add('perfil-usuario-titulo-visible'); 
  adocao.classList.add('perfil-usuario-titulo-escondido'); 
  abandonado.classList.add('perfil-usuario-titulo-escondido');
//Atualizar o conteudo
  conteudoPerfilUsuario(1);
}

/**
 * atualizarPerfilUsuario_2 - Funcao para exibir o cabecalho da segunda pagina da tela de perfil do usuario
 */
function atualizarPerfilUsuario_2 ()
{
//Definir dados locais
  let perfil = document.querySelector('#perfil-usuario-perfil');
  let adocao = document.querySelector('#perfil-usuario-adocao');
  let abandonado = document.querySelector('#perfil-usuario-abandonado'); 
//Atualizar o cabecalho
  perfil.classList.remove('perfil-usuario-titulo-visible'); 
  adocao.classList.remove('perfil-usuario-titulo-escondido'); 
  abandonado.classList.remove('perfil-usuario-titulo-visible');
  perfil.classList.add('perfil-usuario-titulo-escondido'); 
  adocao.classList.add('perfil-usuario-titulo-visible'); 
  abandonado.classList.add('perfil-usuario-titulo-escondido');
//Atualizar o conteudo
  conteudoPerfilUsuario(2);
}

/**
 * atualizarPerfilUsuario_3 - Funcao para exibir o cabecalho da terceira pagina da tela de perfil do usuario
 */
function atualizarPerfilUsuario_3 ()
{
//Definir dados locais
  let perfil = document.querySelector('#perfil-usuario-perfil');
  let adocao = document.querySelector('#perfil-usuario-adocao');
  let abandonado = document.querySelector('#perfil-usuario-abandonado'); 
//Atualizar o cabecalho
  perfil.classList.remove('perfil-usuario-titulo-visible'); 
  adocao.classList.remove('perfil-usuario-titulo-visible'); 
  abandonado.classList.remove('perfil-usuario-titulo-escondido');
  perfil.classList.add('perfil-usuario-titulo-escondido'); 
  adocao.classList.add('perfil-usuario-titulo-escondido'); 
  abandonado.classList.add('perfil-usuario-titulo-visible');
//Atualizar o conteudo
  conteudoPerfilUsuario(3);
}

let testeUsuario = { nome: "Lucas Carneiro Nassau Malta", email: "lucascarneiromalta@outlook.com", senha: "123456789", cpf: "169.494.196-51", data_de_nascimento: "06/09/2005", telefone: "(31) 99756-0386", tags: { atencao: 4, passeio: 1, carinho: 2, extrovertido: 5, animacao: 3 } };

/**
 * conteudoPerfilUsuario - Funcao para inserir o conteudo da pagina de perfil do usuario
 * @param pagina - Pagina atual da tela de perfil do usuario
 */
async function conteudoPerfilUsuario (pagina)
{
//Definir dados locais
  let container = document.querySelector('#perfil-usuario-content');
  let contentAtual = document.querySelector('.perfil-usuario-controle');
  let contentNovo;
  let usuario = testeUsuario;
//Recuperar novo conteudo
  contentNovo = await carregarHtml(`./perfil-usuario-${pagina}.html`);
//Remover o conteudo atual
  contentAtual.remove();
//Adicionar novo conteudo
  container.insertAdjacentHTML('beforeend', contentNovo);
//Preencher novo conteudo com os dados do usuario
  inserirPerfilUsuario (usuario, pagina);
//Definir eventos
  perfilUsuarioNovosEventos(pagina);
}

/**
 * inserirPerfilUsuario - Funcao para inserir os dados do usuario na tela de perfil do usuario
 * @param usuario - Objeto contendo as informacoes do usuario
 */
function inserirPerfilUsuario (usuario, pagina)
{
//Testar pagina
  switch (pagina)
  {
    case 1: inserirPerfilUsuario_1 (usuario); break;
    case 2: inserirPerfilUsuario_2 (usuario); break;
    case 3: inserirPerfilUsuario_3 (usuario); break;
  }
}

/**
 * inserirPerfilUsuario_1 - Funcao para inserir os dados da primeira pagina da tela de perfil do usuario
 * @param usuario - Objeto contendo as informacoes do usuario
 */
function inserirPerfilUsuario_1 (usuario)
{
//Definir dados locais
  let nome = document.querySelector('#usuario-nome');
  let email = document.querySelector('#usuario-email');
  let senha = document.querySelector('#usuario-senha');
  let cpf = document.querySelector('#usuario-cpf');
  let dt_nascimento = document.querySelector('#usuario-data-de-nascimento');
  let telefone = document.querySelector('#usuario-telefone');
  let tag1 = document.querySelector(`#perfil-usuario-radio-1-${usuario.tags.atencao}`);
  let tag2 = document.querySelector(`#perfil-usuario-radio-2-${usuario.tags.passeio}`);
  let tag3 = document.querySelector(`#perfil-usuario-radio-3-${usuario.tags.carinho}`);
  let tag4 = document.querySelector(`#perfil-usuario-radio-4-${usuario.tags.extrovertido}`);
  let tag5 = document.querySelector(`#perfil-usuario-radio-5-${usuario.tags.animacao}`);
//Preencher senha
  let senhaEscondida = "";
  for (let i = 0; i < usuario.senha.length; i++)
    senhaEscondida += '*';
//Substituir valores
  nome.innerText = usuario.nome;
  email.innerText = usuario.email;
  senha.innerText = senhaEscondida;
  cpf.innerText = usuario.cpf;
  dt_nascimento.innerText = usuario.data_de_nascimento;
  telefone.innerText = usuario.telefone;
  tag1.checked = true;
  tag2.checked = true;
  tag3.checked = true;
  tag4.checked = true;
  tag5.checked = true;
}

/**
 * inserirPerfilUsuario_2 - Funcao para inserir os dados da segunda pagina da tela de perfil do usuario
 * @param usuario - Objeto contendo as informacoes do usuario
 */
function inserirPerfilUsuario_2 (usuario)
{
  let imagem1 = document.querySelector('#perfil-usuario-2-row-1 .perfil-usuario-2-status img');
  let text1 = document.querySelector('#perfil-usuario-2-row-1 .perfil-usuario-2-status p');
  let imagem2 = document.querySelector('#perfil-usuario-2-row-2 .perfil-usuario-2-status img');
  let text2 = document.querySelector('#perfil-usuario-2-row-2 .perfil-usuario-2-status p');
  let imagem3 = document.querySelector('#perfil-usuario-2-row-3 .perfil-usuario-2-status img');
  let text3 = document.querySelector('#perfil-usuario-2-row-3 .perfil-usuario-2-status p');
  imagem1.src = "../../assets/img/waiting.png";
  text1.innerText = "Aguardando resposta";
  imagem2.src = "../../assets/img/failure.png";
  text2.innerText = "Pedido negado";
  imagem3.src = "../../assets/img/success.png";
  text3.innerText = "Pedido aceito!";
}

/**
 * inserirPerfilUsuario_3 - Funcao para inserir os dados da terceira pagina da tela de perfil do usuario
 * @param usuario - Objeto contendo as informacoes do usuario
 */
function inserirPerfilUsuario_3 (usuario)
{
  let imagem1 = document.querySelector('#perfil-usuario-3-row-1 .perfil-usuario-3-status img');
  let text1 = document.querySelector('#perfil-usuario-3-row-1 .perfil-usuario-3-status p');
  let imagem2 = document.querySelector('#perfil-usuario-3-row-2 .perfil-usuario-3-status img');
  let text2 = document.querySelector('#perfil-usuario-3-row-2 .perfil-usuario-3-status p');
  let imagem3 = document.querySelector('#perfil-usuario-3-row-3 .perfil-usuario-3-status img');
  let text3 = document.querySelector('#perfil-usuario-3-row-3 .perfil-usuario-3-status p');
  imagem1.src = "../../assets/img/waiting.png";
  text1.innerText = "Aguardando resposta";
  imagem2.src = "../../assets/img/failure.png";
  text2.innerText = "Pedido negado";
  imagem3.src = "../../assets/img/success.png";
  text3.innerText = "Pedido aceito!";
}

/**
 * perfilUsuarioNovosEventos - Funcao para controlar a definicao de eventos de cada pagina da tela de perfil do usuario
 * @param pagina - Pagina atual da tela de perfil do usuario
 */
function perfilUsuarioNovosEventos (pagina)
{
  switch (pagina)
  {
    case 1: perfilUsuarioNovosEventos_1 (); break;
    case 2: perfilUsuarioNovosEventos_2 (); break;
    case 3: perfilUsuarioNovosEventos_3 (); break;
  }
}

/**
 * perfilUsuarioNovosEventos_1 - Funcao para definir os eventos da primeira pagina da tela de perfil do usuario
 */
function perfilUsuarioNovosEventos_1 ()
{
//Definir dados locais
  let editar = document.querySelector('#perfil-editar');
  let usuario  = testeUsuario;
//Definir eventos
  editar.addEventListener('click', () => editarUsuario(usuario));
}

/**
 * editarUsuario - Funcao para controlar a acao de editar o usuario na tela de perfil
 * @param usuario - Objeto contendo as informacoes do usuario a ser editado
 */
function editarUsuario (usuario)
{
//Atualizar campos da pagina de perfil
  substituirPerfilUsuario(usuario);
//Definir dados locais
  let botaoConfirmar = document.querySelector('#perfil-confirmar');
  let botaoDescartar = document.querySelector('#perfil-descartar');
//Definir eventos de edição
  botaoConfirmar.addEventListener('click', () => {
    let usuario = preencherPerfilUsuario();
    testeUsuario = usuario;
    perfilUsuarioResetarBotoes();
    conteudoPerfilUsuario(1);
  });
  botaoDescartar.addEventListener('click', () => {
    perfilUsuarioResetarBotoes();    
    conteudoPerfilUsuario(1);
  });
}

/**
 * substituirPerfilUsuario - Funcao para permitir a edicao/entrada de dados na tela de perfil do usuario
 */
function substituirPerfilUsuario (usuario)
{
//Definir dados locais
  let nome = document.querySelector('#usuario-nome');
  let email = document.querySelector('#usuario-email');
  let senha = document.querySelector('#usuario-senha');
  let cpf = document.querySelector('#usuario-cpf');
  let dt_nascimento = document.querySelector('#usuario-data-de-nascimento');
  let telefone = document.querySelector('#usuario-telefone');
  let divBotoes = document.querySelector('#perfil-usuario-botoes');
  let botaoEditar = document.querySelector('#perfil-editar');
//Substituir span por input
  nome.innerHTML = `<input type="text" class="perfil-usuario-input" value="${usuario.nome}">`;
  email.innerHTML = `<input type="text" class="perfil-usuario-input" value="${usuario.email}">`;
  senha.innerHTML = `<input type="password" class="perfil-usuario-input password" value="${usuario.senha}">
  <img src="../../assets/img/hidden.png" class="password-controle">`;
  cpf.innerHTML = `<input type="text" class="perfil-usuario-input" value="${usuario.cpf}">`;
  dt_nascimento.innerHTML = `<input type="text" class="perfil-usuario-input" value="${usuario.data_de_nascimento}">`;
  telefone.innerHTML = `<input type="text" class="perfil-usuario-input" value="${usuario.telefone}">`;
//Definir máscaras
  $('#usuario-cpf .perfil-usuario-input').mask('000.000.000-00');
  $('#usuario-data-de-nascimento .perfil-usuario-input').mask('00/00/0000');
  $('#usuario-telefone .perfil-usuario-input').mask('(00) 00000-0000');
//Definir o comportamento da senha
  controlarSenha();
//Permitir escolher as tags
  for (let i = 1; i <= 5; i++)
  {
    for (let j = 1; j <= 5; j++)
    {
      document.querySelector(`#perfil-usuario-radio-${i}-${j}`).disabled = false;
    }
  }
//Trocar botões
  botaoEditar.remove();
  let botaoDescartar = `<img src="../../assets/img/discard.png" alt="botao-descartar" class="perfil-usuario-editar-btn" id="perfil-descartar">`;
  let botaoConfirmar = `<img src="../../assets/img/confirm.png" alt="botao-confirmar" class="perfil-usuario-editar-btn" id="perfil-confirmar">`;
  divBotoes.insertAdjacentHTML('beforeend', botaoDescartar);
  divBotoes.insertAdjacentHTML('beforeend', botaoConfirmar);
}

/**
 * preencherPerfilUsuario - Funcao para controlar o preenchimento do novo objeto Usuario apos a edicao
 * @return usuario - Objeto contendo as informacoes resultantes do usuario editado
 */
function preencherPerfilUsuario ()
{
//Definir dados locais
  let usuario = { nome: "", email: "", senha: "", cpf: "", data_de_nascimento: "", telefone: "", tags: { atencao: 0, passeio: 0, carinho: 0, extrovertido: 0, animacao: 0 } };
//Encontrar novos dados de usuario
  usuario = preencherPerfilUsuarioDados(usuario);
//Encontrar novas tags de usuario
  usuario = preencherPerfilUsuarioTags(usuario);
//Retornar
  return usuario;
}

/**
 * preencherPerfilUsuarioDados - Funcao para preencher os dados pessoais do usuario
 * @param usuario - Objeto contendo as informacoes do usuario a ser editado
 * @return usuario - Objeto resultante contendo as informações do usuario editado
 */
function preencherPerfilUsuarioDados (usuario)
{
//Definir dados locais
  let nome = document.querySelector('#usuario-nome .perfil-usuario-input');
  let email = document.querySelector('#usuario-email .perfil-usuario-input');
  let senha = document.querySelector('#usuario-senha .perfil-usuario-input');
  let cpf = document.querySelector('#usuario-cpf .perfil-usuario-input');
  let dt_nascimento = document.querySelector('#usuario-data-de-nascimento .perfil-usuario-input');
  let telefone = document.querySelector('#usuario-telefone .perfil-usuario-input');
//Preencher usuario
  usuario.nome = nome.value;
  usuario.email = email.value;
  usuario.senha = senha.value;
  usuario.cpf = cpf.value;
  usuario.data_de_nascimento = dt_nascimento.value;
  usuario.telefone = telefone.value;
//Retornar
  return usuario;
}

/**
 * preencherPerfilUsuarioTags - Funcao para preencher os dados de preferencia/personalidade do usuario
 * @param usuario - Objeto contendo as informacoes do usuario a ser editado
 * @return usuario - Objeto resultante contendo as informacoes do usuario editado
 */
function preencherPerfilUsuarioTags (usuario)
{
//Definir dados locais
  let tags = [];
//Encontrar nova tag
  for (let i = 1; i <= 5; i++)
  {
  //Definir dados locais
    let j = 1; 
    let controle = true;
  //Encontrar valor
    while (j <= 5 && controle)
    { 
      controle = ! document.querySelector(`#perfil-usuario-radio-${i}-${j}`).checked;  
      j++;  
    }
  //Guardar valor
    tags[i - 1] = j - 1;
  }
//Preencher usuario
  usuario.tags.atencao = tags[0];
  usuario.tags.passeio = tags[1];
  usuario.tags.carinho = tags[2];
  usuario.tags.extrovertido = tags[3];
  usuario.tags.animacao = tags[4];
//Retornar
  return usuario;
}

/**
 * perfilUsuarioResetarBotoes - Funcao para retirar os botoes de edicao (confirmar/descartar) e recolocar o botao de edicao
 */
function perfilUsuarioResetarBotoes ()
{
//Definir dados locais
  let divBotoes = document.querySelector('#perfil-usuario-botoes');
  let botaoConfirmar = document.querySelector('#perfil-confirmar');
  let botaoDescartar = document.querySelector('#perfil-descartar');
//Remover botoes
  botaoConfirmar.remove();
  botaoDescartar.remove();
//Adicionar novo botão
  let botaoEditar = `<img src="../../assets/img/editar.png" alt="botao-editar" class="perfil-usuario-editar-btn" id="perfil-editar">`;
  divBotoes.insertAdjacentHTML('beforeend', botaoEditar);
}

/* ---------------------- Definir comportamento para mostrar a tela de PERFIL de USUÁRIO (FIM) ----------------------------- */


/* ------------------------------- Definir comportamento do CADASTRO DE ANIMAL (INICIO) ----------------------------------- */


function getAnimalVacina() {
  let vacina_form = document.getElementsByName('a_vacina');
  const vacina_value = [];
  vacina_form.forEach(element => {
    if (element.checked == true) {
      vacina_value.push(element.value);
    }
  });
  return vacina_value;
}

function changePageAnimal(page) {

  let divFirstPage = document.getElementById('animal-form-1');
  let divSecondPage = document.getElementById('animal-form-2');
  let stageOne = document.getElementById('Cadastro-geral');
  let stageTwo = document.getElementById('Cadastro-especifico');
  let next = document.getElementById('btn-animal-passar');
  let back = document.getElementById('btn-animal-voltar');
  let nome_holder = document.getElementsByClassName('animal_name');
  let artigo_holder = document.getElementsByClassName('animal_artigo');

  let name = document.getElementById('a_name').value;
  let data_nascimento = document.getElementById('a_data').value;
  let foto


  let Raca = document.getElementById('a_raca').value;
  let bio = document.getElementById('a_bio').value;


  switch (page) {
    case "Pagina1":
      // muda o form que esta aparecendo
      divFirstPage.style.display = "block";
      divSecondPage.style.display = "none";

      // atualiza os botoes
      next.innerText = "Próximo";
      next.setAttribute("onClick", "javascript: changePageAnimal('Pagina2')");
      back.style.display = "none";

      // muda a barra de progresso
      stageTwo.style.background = "white";
      break;

    case "Pagina2":
      let genero_value = getRadio('a_genero');
      let especie_value = getRadioText('a_especie','outros_value','outros');

      for (let i = 0; i < nome_holder.length; i++) {
        nome_holder[i].innerText = name;
      }
      //console.log(artigo_holder);

      for (let i = 0; i < artigo_holder.length; i++) {
        if (genero_value == 'F') {
          artigo_holder[i].innerText = 'a';
        } else {
          artigo_holder[i].innerText = 'o';
        }
      }

      console.log(data_nascimento);
      if (name === "" || data_nascimento === "" || especie_value === "") { // condicao para mudar de pagina
        alert("erro");
      } else { // mensagem de erro

        // muda o form que esta aparecendo
        divFirstPage.style.display = "none";
        divSecondPage.style.display = "block";

        // atualiza os botoes
        next.innerText = "Finalizar";
        next.setAttribute("onClick", "javascript: changePageAnimal('Finalizar')");
        back.style.display = "block";

        // muda a barra de progresso
        stageTwo.style.background = "var(--cor_primaria)";
      }
      break;
    case "Finalizar":
      if (bio <= 1) { // condicao para finalizar (somente com a bio preenchida pode finalizar)
        alert("erro");
      } else {
        let especie_value = getRadioText('a_especie','outros_value','outros');
        let genero_value = getRadio('a_genero');
        let isCastrado = getBoolRadio('a_castrado');
        let vacina_value = getAnimalVacina();

        let animal_data = {
          nome: name,
          genero: genero_value,
          especie: especie_value,
          dt_nascimento: data_nascimento,
          castrado: isCastrado,
          //foto_animal: foto,
          raca: Raca,
          historia: bio,
          vacina: vacina_value,
        }
        saveAnimalData(animal_data);
      }

      break;
  }
}

function saveAnimalData(data) {
  console.log(data);
}

/* Definir comportamento ao clicar em outros no cadastro do animal */

let especieAnimal = document.querySelectorAll('input[name=a_especie]');
especieAnimal.forEach(element => {
  element.addEventListener("click", () => {
    let div = document.getElementById("outros_value");
    if (element.checked) {
      if (element.value == "outros") {
        div.style.display = "inline-block"
      } else {
        div.style.display = "none"
      }
    }
  });
});
function mostrarErro(mensagem) {
  console.log(mensagem);
}

/* --------------------- Definir comportamento do CADASTRO DE ANIMAL (FIM) ------------------------ */

/* --------------------- Definir comportamento do CADASTRO DE FORMULARIO (INÍCIO) ------------------------ */
let moradiaForm = document.querySelectorAll('input[name=f_residencia]');
moradiaForm.forEach(element => {
  element.addEventListener("click", () => {
    let div = document.getElementById("outros_value_residencia");
    if (element.checked) {
      if (element.value == "outros") {
        div.style.display = "inline-block"
      } else {
        div.style.display = "none"
      }
    }
  });
});

let viagemForm = document.querySelectorAll('input[name=f_viagem]');
viagemForm.forEach(element => {
  element.addEventListener("click", () => {
    let div = document.getElementById("outros_value_viagem");
    if (element.checked) {
      if (element.value == "outros") {
        div.style.display = "block"
      } else {
        div.style.display = "none"
      }
    }
  });
});

let expForm = document.querySelectorAll('input[name=f_exp]');
expForm.forEach(element => {
  element.addEventListener("click", () => {
    let div = document.getElementById("sim_exp");
    if (element.checked) {
      if (element.value == "S") {
        div.style.display = "block"
      } else {
        div.style.display = "none"
      }
    }
  });
});



function saveFormularioData(data){
  console.log(data);
}
function submitFormulario() {
  let residencia = getRadioText('f_residencia', 'outros_value_residencia',"outros");
  let exp = getRadioText('f_exp','sim_exp','S');
  let visita_ong = getBoolRadio('f_visita_ong');
  let consentimento = getBoolRadio('f_consentimento');
  let tempo = getRadio('f_tempo');
  let viagem = getRadioText('f_viagem','outros_value_viagem','outros');
  let comentarios = document.getElementById('f_comentarios').value
  let data = {
    Residencia: residencia,
    Exp: exp,
    Visita_ong: visita_ong,
    Consentimento: consentimento,
    Tempo: tempo,
    Viagem: viagem,
    Comentario: comentarios
  }

  if(haveNullValue(data)){
    alert("erro");
  } else {
    saveFormularioData(data);
  }
  console.log(data);
}
/* --------------------- Definir comportamento do CADASTRO DE FORMULARIO (FIM) ------------------------ */


/* --------------------- Definir comportamento do CADASTRO DE ANIMAL ABANDONADO (INICIO) ------------------------ */
let abEspecieForm = document.querySelectorAll('input[name=ab_especie]');
abEspecieForm.forEach(element => {
  element.addEventListener("click", () => {
    let div = document.getElementById("outros_value_ab_especie");
    if (element.checked) {
      console.log(element.value);
      if (element.value == "outros") {
        div.style.display = "inline-block"
        div.style.visibility = "visible";
        div.style.opacity = "1";

      } else {
        div.style.visibility = "hidden";
        div.style.opacity = "0";

      }
    }
  });
});

let abLarForm = document.querySelectorAll('input[name=ab_lar]');
abLarForm.forEach(element => {
  element.addEventListener("click", () => {
    let div = document.getElementById("ab_tempo");
    if (element.checked) {
      if (element.value == "true") {
        div.style.display = "inline-block"
        div.style.visibility = "visible";
        div.style.opacity = "1";
      } else {
        div.style.visibility = "hidden";
        div.style.opacity = "0";

      }
    }
  });
});

function submitFormAB(){
  let especie = getRadioText('ab_especie','outros_value_ab_especie','outros');
  let qnt = getRadio('ab_quantidade');
  let condicao = document.getElementById("ab_condicoes").value;
  let lar = getRadioText('ab_lar','ab_tempo',"true");
  let local = document.getElementById("ab_local").value; 

  let data = {
    Especie: especie,
    Quantidade: qnt,
    Condicao: condicao,
    Lar: lar,
    Local: local
  }
  if(haveNullValue(data)){
    alert("erro");
  } else {
    saveABdata(data);
  }
}

function saveABdata(data){
  console.log(data);
}


/* --------------------- Definir comportamento do CADASTRO DE ANIMAL ABANDONADO (FIM) ------------------------ */

/* --------------------- Definir comportamento da EXIBIÇÃO DE ANIMAIS TELA INICIAL (INICIO) ------------------ */

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

/* --------------------- Definir comportamento da EXIBIÇÃO DE ANIMAIS TELA INICIAL (FIM) ------------------ */