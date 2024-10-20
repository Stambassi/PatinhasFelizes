/* ----------------------------- Inicialização variável global JSON Server (INICIO) ----------------------------------- */

//let urlJsonServer = "https://a050aadc-b2a9-48cd-9a69-a5566f985adf-00-1q7wk422qq9m2.riker.replit.dev";
//let urlJsonServer = "https://a050aadc-b2a9-48cd-9a69-a5566f985adf-00-1q7wk422qq9m2.riker.replit.dev";

/* ----------------------------- Inicialização variável global JSON Server (FIM) ----------------------------------- */

/*---------------------- Criacao de dados FAKE (INICIO) ------------------*/
function gerarDadosFalsos()
{
//Definir pessoas (com formularios)
  let pessoas = gerarPessoasFalsas();
//Definir ongs
  let ongs = gerarOngsFalsas();
//Definir animais
  let animais = gerarAnimaisFalsos();
//Guardar dados no LocalStorage
  if ( localStorage.getItem("Usuario") === null)
    localStorage.setItem("Usuario", JSON.stringify(pessoas));
  if ( localStorage.getItem("ONG") === null )
    localStorage.setItem("ONG", JSON.stringify(ongs));
  if ( localStorage.getItem("Animal") === null )
    localStorage.setItem("Animal", JSON.stringify(animais));
}

/*---------------------- Criacao de dados FAKE (FIM) ------------------*/

/* ------------------------------ Funções de interacao com o LOCAL STORAGE (INICIO) ------------------------------------ */

function limparLocalStorage()
{
  localStorage.removeItem("Usuario");
  localStorage.removeItem("usuario_login");
  localStorage.removeItem("ONG");
  localStorage.removeItem("ong_login");
}

function getAllUsuario()
{
//Definir dados locais
  const data = JSON.parse(localStorage.getItem("Usuario") || "[]");
//Retornar
  return data;
}

function getAllONG()
{
//Definir dados locais
  const data = JSON.parse(localStorage.getItem("ONG") || "[]");
//Retornar
  return data;
}

function getAllAnimal(){
//Definir dados locais
  const data = JSON.parse(localStorage.getItem("Animal") || "[]");
//Retornar
  return data;
}

function getAllFormularioAdocao ()
{
//Definir dados locais
  let formularios = [];
  let allUsuario = getAllUsuario();
  let x = 0;
//Percorrer todos os usuarios
  for (let i = 0; i < allUsuario.length; i++)
  {
  //Definir dados locais
    let usuario = allUsuario[i];
    let usuarioFormulariosAdocao = usuario.form_adocao;
  //Percorrer todos os formularios
    for (let j = 0; j < usuarioFormulariosAdocao.length; j++)
    {
      formularios[x++] = usuarioFormulariosAdocao[j];
    }
  }
//Retornar
  return formularios;
}

function getAllFormularioAbandonado ()
{
//Definir dados locais
  let formularios = [];
  let allUsuario = getAllUsuario();
  let x = 0;
//Percorrer todos os usuarios
  for (let i = 0; i < allUsuario.length; i++)
  {
  //Definir dados locais
    let usuario = allUsuario[i];
    let usuarioFormulariosAbandonado = usuario.form_abandonado;
  //Percorrer todos os formularios
    for (let j = 0; j < usuarioFormulariosAbandonado.length; j++)
    {
      formularios[x++] = usuarioFormulariosAbandonado[j];
    }
  }
//Retornar
  return formularios;
}

function getUsuario (id)
{
//Definir dados locais
  let usuarios = getAllUsuario();
  let resp = null;
//Percorrer todos os usuarios
  usuarios.forEach(usuario => {
    if (usuario.id_pessoa == id)
      resp = usuario;
  });
//Retornar
  return resp;
}

function getONG (id)
{
//Definir dados locais
  let ONGs = getAllONG();
  let resp = null;
//Percorrer todas as ongs
  ONGs.forEach(ong => {
    if (ong.id_ong == id)
      resp = ong;
  });
//Retornar
  return resp;
}

function getAnimal (id)
{
//Definir dados locais
  let animais = getAllAnimal();
  let resp = {};
//Percorrer todos os animais
  animais.forEach(animal => {
    if(animal.id_animal == id)
      resp = animal;
  });
//Retornar
  return resp;
}

function getFormularioAdocao (id_formulario)
{
//Definir dados locais
  let formularios = getAllFormularioAdocao();
  let form;
  let x = 0;
//Percorrer formularios
  for (let i = 0; i < formularios.length; i++)
  {
  //Definir dados locais
    let formulario = formularios[i];
  //Testar e atribuir
    if (formulario.id_formulario == id_formulario)
      form = formulario;
  }
//Retornar
  return form;
}

function getFormularioAbandonado (id_formulario)
{
//Definir dados locais
  let formularios = getAllFormularioAbandonado();
  let form;
  let x = 0;
//Percorrer formularios
  for (let i = 0; i < formularios.length; i++)
  {
  //Definir dados locais
    let formulario = formularios[i];
  //Testar e atribuir
    if (formulario.id_form == id_formulario)
      form = formulario;
  }
//Retornar
  return form;
}

function getFormularioAdocaoONG (id_ong)
{
//Definir dados locais
  let formularios = getAllFormularioAdocao();
  let formulariosOng = [];
  let x = 0;
//Percorrer formularios
  for (let i = 0; i < formularios.length; i++)
  {
  //Definir dados locais
    let formulario = formularios[i];
    let animal = getAnimal(formulario.id_animal);
  //Testar e atribuir
    if (animal.id_ong == id_ong)
      formulariosOng[x++] = formulario;
  }
//Retornar
  return formulariosOng;
}

function getFormularioAbandonadoONG (id_ong)
{
//Definir dados locais
  let formularios = getAllFormularioAbandonado();
  let formulariosOng = [];
  let x = 0;
//Percorrer formularios
  for (let i = 0; i < formularios.length; i++)
  {
  //Definir dados locais
    let formulario = formularios[i];
  //Testar e atribuir
    if (formulario.id_ong == id_ong)
      formulariosOng[x++] = formulario;
  }
//Retornar
  return formulariosOng;
}

function getLoginUsuario()
{   
  return localStorage.getItem("usuario_login");   
}

function getLoginOng()
{
  return localStorage.getItem("ong_login");
}

function logoutUsuario()
{
  localStorage.removeItem("usuario_login");
  window.location.href = "/index.html";
}

function logoutOng()
{
  localStorage.removeItem("ong_login");
  window.location.href = "/index.html";
}

function getUsuarioLogged ()
{
//Definir dados locais
  let id = getLoginUsuario();
  let usuarios = getAllUsuario();
  let resp = null;
//Percorrer todos os usuarios
  usuarios.forEach(usuario => {
    if (usuario.id_pessoa == id)
      resp = usuario;
  });
//Retornar
  return resp;
}

function getOngLogged ()
{
//Definir dados locais
  let id = getLoginOng();
  let ongs = getAllONG();
  let resp = null;
//Percorrer todas as ongs
  ongs.forEach(ong => {
    if (ong.id_ong == id)
      resp = ong;
  });
//Retornar
  return resp;
}

function postUsuario (objUsuario)
{
//Definir dados locais
  const old  = getAllUsuario();
//Adicionar à lista
  old.push(objUsuario);
  console.log(objUsuario);
  console.log(old);
//Atualizar LocalStorage
  localStorage.setItem("Usuario", JSON.stringify(old));
  localStorage.setItem("usuario_login", objUsuario.id_pessoa);
}

function postONG (objOng)
{
//Definir dados locais
  const old  = getAllONG();
//Adicionar à lista
  old.push(objOng);
//Atualizar o LocalStorage
  localStorage.setItem("ONG", JSON.stringify(old));
  localStorage.setItem("ong_login", parseInt(objOng.id_ong));
}

function postFormularioAdocao (formulario)
{
//Definir dados locais
  let pessoa = getUsuario(formulario.id_pessoa);
//Atualizar formularios do usuario
  let formularios = pessoa.form_adocao;
  formularios.push(formulario);
  pessoa.form_adocao = formularios;
//Atualizar usuario
  updateUsuario(pessoa);
}


function postFormularioAbandonado (formulario)
{
//Definir dados locais
  let pessoa = getUsuario(formulario.id_pessoa);
//Atualizar formularios do usuario
  pessoa.form_abandonado.push(formulario);
//Atualizar usuario
  updateUsuario(pessoa);
}

function updateUsuario (objUsuario)
{
//Definir dados locais
  const old = getAllUsuario();
//Atualizar a lista
  let controle = true;
  let i = 0;
  while (i < old.length && controle)
  {
    if (old[i].id_pessoa == objUsuario.id_pessoa)
    {   
      old[i] = objUsuario; 
      controle = false;    
    }
    i++;
  }
//Atualizar o LocalStorage
  if (!controle)
  {
    localStorage.removeItem("Usuario");
    localStorage.setItem("Usuario", JSON.stringify(old));
  }
}

function updateONG (objOng)
{
//Definir dados locais
  const old = getAllONG();
//Atualizar a lista
  old[objOng.id_ong - 1] = objOng;
//Atualizar o LocalStorage
  localStorage.removeItem("ONG");
  if (objOng.length == 1)
    localStorage.setItem("ONG", "[" + JSON.stringify(objOng) + "]");
  else
    localStorage.setItem("ONG", JSON.stringify(objOng));
}

/* ------------------------------ Funções de interacao com o LOCAL STORAGE (FIM) ------------------------------------ */

/* ------------------------------ Funções de criacao de DADOS FAKES (INICIO) ------------------------------------ */

async function getAnimalTemp (animalId)
{
//Definir dados locais
  let animal = {
    id_ong: 1,
    id_animal: 1, 
    nome: "Thor",
    especie: "Cachorro",
    raca: "Vira-lata",
    genero: 'M',
    castrado: true,
    imagem: ["foto1", "foto2", "foto3"],
    data__denascimento: "10/02/2022",
    historia: "História blablablabla",
    vacina: {
      v8: true,
      antirrábica: false, 
      leishmaniose: false 
    }
  }
//Retornar
  return animal;
}

async function getOngTemp ()
{
//Definir dados locais
  let ong = {
    id_ong: 1,
    nome: "Nome da ONG",
    email: "",
    senha: "",
    telefones: ["(telefone 1)", "(telefone 2)"],
    foto_perfil: "",
    cnpj: "",
    descricao: "",
    endereco: [ {
        rua: "",
        numero: 1,
        bairro: "",
        cidade: "",
        estado: "",
        cep: ""
    }, {} ],  
  };
//Retornar
  return ong;
}

async function getUsuarioPerfilTemp ()
{
//Definir dados locais
/*
  let usuario = { 
    usuario_id: 1,
    nome: "Lucas Carneiro Nassau Malta", 
    email: "lucascarneiromalta@outlook.com", 
    senha: "123456789", 
    cpf: "169.494.196-51", 
    data_de_nascimento: "06/09/2005", 
    telefone: "(31) 99756-0386", 
    tags: { atencao: 4, passeio: 1, carinho: 2, extrovertido: 5, animacao: 3 } ,
    form_adocao: [
      {
        id_formulario: 1,
        id_pessoa: 1,
        id_animal: 2,
        status: "pendente"      
        data: "16/08/2024",
        moradia: "Apartamento",
        experiencia: true,
        viagem: "Familiares",
        disponibilidade: "2 dias ou mais",
        visitas_ong: true,
        consentimento: true,
        comentarios: "Gostei muito desse animal",
      },
      {
        moradia: "Apartamento",
        experiencia: true,
        viagem: "Familiares",
        disponibilidade: "2 dias ou mais",
        visitas_ong: true,
        consentimento: true,
        adotante: 1,
        comentarios: "Fofíssimo",
        data: "10/08/2024",
        id_form: 2,
        id_animal: 4,
        id_ong: 3,
        status: 1
      }
    ],
    form_abandonado: [
      {
        id_form: 1,
        data: "26/09/2024",
        especie: "Cachorro",
        quantidade: 3,
        condicao: "Eles estavam em uma caixa de papelão",
        endereco: {
          rua: "Rua Stella Hanriot",
          numero: 515,
          bairro: "Buritis",
          cidade: "Belo Horizonte",
          estado: "MG"
          },
        lar_temporario: "Sim, por 3 dias",
        imagem: "",
        status: "pendente"
      },
      {
        imagem: "",
        especie: "Gato",
        quantidade: 1,
        endereco: {
          rua: "Rua Stella Hanriot",
          numero: 515,
          bairro: "Buritis",
          cidade: "Belo Horizonte",
          estado: "MG"
        },
        data: "25/09/2024",
        condicao: "Ele estava preso em uma árvore",
        lar_temporario: 0,
        foto_abandonado: "",
        id_form: 2,
        status: 1
      }
    ]
  };*/
//Retornar
  return usuario;
}

/* ------------------------------ Funções de criacao de DADOS FAKES (INICIO) ------------------------------------ */

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

  let modal = document.querySelector('.modal-controle');
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
    passwordImg.src = "/assets/img/hidden.png";
    controle--;
  }
  else
  {
    senhaInput.type = 'text';
    passwordImg.src = "/assets/img/eye.png";
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

/**
 * testarLoginUsuario - Pegar os dados na base da dados e testar se o login é valido
 * Depois disso, colocar o id do usuario logado na localStorage 
 */
async function testarLoginUsuario() 
{
//Definir dados locais
  let email = document.querySelector('.lc-input-field[placeholder="Email"]').value;
  let senha = document.querySelector('.lc-input-field[placeholder="Senha"]').value;
//Testar se estao preenchidos
  if (email != "" && senha != "")
  {
  //Definir dados locais
    let usuarios = getAllUsuario();
    let login = -1;
  //Testar base de dados
    usuarios.forEach(usuario =>
    {
      if(usuario.email == email && usuario.senha == senha)
      {
        login = usuario.id_pessoa;
        localStorage.setItem("usuario_login",login);
      }
    });
  //Testar se login foi encontrado ou nao
    if(login >= 0)
      fecharPopup();
    else 
      alert("Senha e/ou email incorreto(s)"); // Mensagem de erro
  }
}

/**
 * testarLoginOng - Pegar os dados na base da dados e testar se o login é valido
 * Depois disso,colocar o id da ong logado na localStorage 
 */
async function testarLoginOng() {
//Definir dados locais
  let cnpj = document.querySelector('.lc-input-field[placeholder="CNPJ"]').value;
  let senha = document.querySelector('.lc-input-field[placeholder="Senha"]').value;
//Testar se estao preenchidos
  if (cnpj != "" && senha != "")
  {
  //Definir dados locais
    let ONGs = getAllONG();
    let login;
  //Testar base de dados
    ONGs.forEach(ong => {
      if(ong.cnpj == cnpj && ong.senha == senha)
      {
        login = ong.id_ong;
        localStorage.setItem("ong_login",login);
      }
    });
  //Testar se login foi encontrado ou nao
    if(login >= 0 && login != null)
    {
      fecharPopup();
      window.location.href = '/pages/atividadesONG/AtividadesONG.html'
    }
    else 
      alert("senha ou cnpj incorreto(s)"); // Mensagem de erro
  }
}

/**
 * usuarioLogado - Funcao para testar se o usuario esta logado ou nao
 * @return True caso esteja, Falso caso nao
 */
function usuarioLogado()
{
//Definir dados locais
  let usuario_login_id = localStorage.getItem("usuario_login");
//Retornar
  return usuario_login_id >= 0 && usuario_login_id != null;
}

/**
 * ongLogado - Funcao para testar se a ong esta logado ou nao
 * @return True caso esteja, Falso caso nao
 */
function ongLogado()
{
//Definir dados locais
  let ong_login_id = localStorage.getItem("ong_login");
//Retornar
  return ong_login_id >= 0;
}

/* ------------------------------ Funções de auxílio para LOGIN/CADASTRO (FIM) ------------------------------------ */

/* ------------------------ Definir comportamento para mostrar o pop-up de LOGIN (INICIO) ------------------------ */

/**
 * loginOnload - Função para definir o comportamento inicial da página (TEMPORÁRIO )
 */
function loginOnload ()
{
  let loginBtnMostrar = document.querySelector("#btnMostrarLogin");
  loginBtnMostrar.addEventListener('click', () => loginUsuario());
}

/**
 * loginUsuario - Função para recuperar o HTML do login de usuário e adicioná-lo à tela
 */
async function loginUsuario ()
{
//Definir dados locais
  let main = document.querySelector('body');
  let container;
//Testar se ja esta logado
  if ( usuarioLogado() )
  {
    console.log("entrou");
    window.location.href = '/pages/perfilUsuario/perfil-usuario.html';
  }
  else
  {
  //Recuperar html
    container = await carregarHtml('/pages/loginUsuario/login-template.html');
  //Adicionar html
    adicionarPopup(container, main, loginUsuarioEventos);
  }
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
  let login = document.querySelector('#login-submit');
//Definir eventos
  closeWindow.addEventListener('click', () => fecharPopup());
  controlarSenha();
  cadastroUser.addEventListener('click', async () => await cadastroUsuario());
  loginONG.addEventListener('click', async () => await loginInstituicao()); 
  login.addEventListener('click', async() => await testarLoginUsuario());
}

/* ------------------------ Definir comportamento para mostrar o pop-up de LOGIN de USUÁRIO (FIM) ------------------------ */

/* --------------------- Definir comportamento para mostrar o pop-up de CADASTRO de USUÁRIO (INICIO) ------------------------ */

function usuarioNextID()
{
  let usuarios = getAllUsuario();
  return (usuarios.length > 0) ? (parseInt(usuarios[usuarios.length - 1].id_pessoa) + 1) : 1;
}

let objUsuario = { id_pessoa: 0, nome: "", email: "", senha: "", cpf: "", data_de_nascimento: "", telefone: "", tags: { atencao: 0, passeio: 0, carinho: 0, extrovertido: 0, animacao: 0 }, form_adocao: [], form_abandonado: [] };

objUsuario.id_pessoa = usuarioNextID();

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
  container = await carregarHtml(`/pages/cadastroUsuario/cadastro-usuario-${pagina}.html`);
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
      alert("É obrigatório o preenchimento de todos os campos!");
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
  container = await carregarHtml(`/pages/cadastroUsuario/cadastro-usuario-${pagina}.html`);
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
//Testar se esta logado
  let ong = getOngLogged();
  if (ong != null)
    window.location.href = "/pages/atividadesONG/AtividadesONG.html";
  else
  {
  //Definir dados locais
    let main = document.querySelector('main');
    let container;
  //Recuperar container da pagina
    container = await carregarHtml(`/pages/loginInstituicao/login-template.html`);
  //Atualizar o html da pagina
    adicionarPopup(container, main, loginInstituicaoEventos);
  }
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
  let login = document.querySelector('#login-submit');
//Definir máscara do input de CNPJ
  $('.lc-input-field[placeholder="CNPJ"]').mask('00.000.000/0000-00');
//Definir eventos
  closeWindow.addEventListener('click', () => fecharPopup())
  controlarSenha();
  cadastroONG.addEventListener('click', async () => await cadastroInstituicao());
  loginUser.addEventListener('click', async () => await loginUsuario());  
  login.addEventListener('click', async() => await testarLoginOng());

}


/* ------------------------ Definir comportamento para mostrar o pop-up de LOGIN de INSTITUIÇÃO (FIM) ------------------------ */


/* --------------------- Definir comportamento para mostrar o pop-up de CADASTRO de INSTITUIÇÃO (INICIO) ------------------------ */

function ongNextID()
{
  let ongs = getAllONG();
  return (ongs.length > 0) ? (parseInt(ongs[ongs.length-1].id_ong) + 1) : 1;
}

let objONG = { id_ong: ongNextID(), nome: "", email: "", senha: "", telefone: "", foto_perfil: "", cnpj: "", descricao: "", endereco: { rua: "", numero: "", bairro: "", cidade: "", estado: "", cep: "" } };

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
  container = await carregarHtml(`/pages/cadastroInstituicao/cadastro-instituicao-${pagina}.html`);
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
        postONG(objONG);
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
  container = await carregarHtml(`/pages/cadastroInstituicao/cadastro-instituicao-${pagina}.html`);
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
//Colocar conteudo da primeira pagina
  if (pagina === 1)
    conteudoPerfilUsuario(1);
//Definir eventos
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
  //let usuario = await getUsuarioPerfilTemp();
  let usuario = getUsuarioLogged();
//Recuperar novo conteudo
  contentNovo = await carregarHtml(`/pages/perfilUsuario/perfil-usuario-${pagina}.html`);
//Remover o conteudo atual
  contentAtual.remove();
//Adicionar novo conteudo
  container.insertAdjacentHTML('beforeend', contentNovo);
//Preencher novo conteudo com os dados do usuario
  inserirPerfilUsuario (usuario, pagina);
//Definir eventos
  await perfilUsuarioNovosEventos(pagina);
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
  tag1.checked = tag2.checked = tag3.checked = tag4.checked = tag5.checked = true;
}

/**
 * inserirPerfilUsuario_2 - Funcao para inserir os dados da segunda pagina da tela de perfil do usuario
 * @param usuario - Objeto contendo as informacoes do usuario
 */
async function inserirPerfilUsuario_2 (usuario)
{
//Definir dados locais
  let container = document.querySelector('#perfil-usuario-content-2');
  let adocao = usuario.form_adocao;
  let str = "";
//Testar se ha' formularios de adocao
  if (adocao.length === 0)
  {
    str = "<p>Ainda não há formulários de interesse de adoção enviados!</p>"
  }
  else
  {
  //Definir preenchimento de dados
    for (let i = 0; i < adocao.length; i++)
    {
    //Definir dados locais
      let form = adocao[i];
      let animal = getAnimal(form.id_animal);
      let ong = getONG( animal.id_ong );
      let status = form.status;
      let imgStatus = "";
      let msg = "";
    //Testar status
      if (status == "recusado")
      { imgStatus = "/assets/img/failure.png"; msg = "Pedido negado";  }
      else if (status == "aceito")
      { imgStatus = "/assets/img/success.png"; msg = "Pedido aceito";  }
      else if (status == "pendente")
      { imgStatus = "/assets/img/waiting.png"; msg = "Aguardando resposta";  }
    //Definir nova linha
      str += `
        <div class="perfil-usuario-2-row" id="perfil-usuario-2-row-${form.id_form}">
          <div class="perfil-usuario-2-imagem">
            <img src="${animal.imagem[0]}" alt="imagem-animal">
          </div>
          <div class="perfil-usuario-2-informacoes">
            <p>Animal desejado: <span id="perfil-usuario-2-informacoes-animal">${animal.nome}</span></p>
            <p>Pedido realizado para: <span id="perfil-usuario-2-informacoes-instituicao">${ong.nome}</span></p>
            <p>Data do pedido: <span id="perfil-usuario-2-informacoes-data">${form.data}</span></p>
          </div>
          <div class="perfil-usuario-2-status">
            <img src="${imgStatus}" alt="imagem-status">
            <p>${msg}</p>
          </div>
        </div>
      `;
    } 
  }
//Atribuir novo conteudo
  container.innerHTML = str;
}

/**
 * inserirPerfilUsuario_3 - Funcao para inserir os dados da terceira pagina da tela de perfil do usuario
 * @param usuario - Objeto contendo as informacoes do usuario
 */
async function inserirPerfilUsuario_3 (usuario)
{
//Definir dados locais
  let container = document.querySelector('#perfil-usuario-content-3');
  let abandonado = usuario.form_abandonado;
  let str = ""
//Testar se ha' formularios de animal abandonado
  if (abandonado.length === 0)
  {
    str = "<p>Ainda não há formulários de encontro de animais abandonados enviados!</p>"    
  }
  else
  {
  //Definir preenchimento de dados
    for (let i = 0; i < abandonado.length; i++)
    {
    //Definir dados locais
      let form = abandonado[i];
      console.log(form);
      let ong = getONG( form.id_ong );
      let status = form.status;
      let imgStatus = "";
      let msg = "";
    //Testar status
      if (status == "recusado")
      { imgStatus = "/assets/img/failure.png"; msg = "Pedido negado";  }
      else if (status == "aceito")
      { imgStatus = "/assets/img/success.png"; msg = "Pedido aceito";  }
      else if (status == "pendente")
      { imgStatus = "/assets/img/waiting.png"; msg = "Aguardando resposta";  }
    //Definir nova linha
      str += `
        <div class="perfil-usuario-3-row"  id="perfil-usuario-3-row-1">
          <div class="perfil-usuario-3-imagem">
            <img src="${form.imagem[0]}" alt="imagem-animal">
          </div>
          <div class="perfil-usuario-3-informacoes">
            <p>Local encontrado: <span id="perfil-usuario-2-informacoes-local">${form.endereco.rua}, ${form.endereco.numero}</span></p>
            <p>Enviado para: <span id="perfil-usuario-2-informacoes-animal">${ong.nome}</span></p>
            <p>Data do pedido: <span id="perfil-usuario-2-informacoes-contato">${form.data}</span></p>
          </div>
          <div class="perfil-usuario-3-status">
            <img src="${imgStatus}" alt="imagem-status">
            <p>${msg}</p>
          </div>
        </div>
      `;
    }
  }
  //Atribuir novo conteudo
  container.innerHTML = str;
}

/**
 * perfilUsuarioNovosEventos - Funcao para controlar a definicao de eventos de cada pagina da tela de perfil do usuario
 * @param pagina - Pagina atual da tela de perfil do usuario
 */
async function perfilUsuarioNovosEventos (pagina)
{
  switch (pagina)
  {
    case 1: await perfilUsuarioNovosEventos_1 (); break;
    // case 2: await perfilUsuarioNovosEventos_2 (); break;
    // case 3: await perfilUsuarioNovosEventos_3 (); break;
  }
}

/**
 * perfilUsuarioNovosEventos_1 - Funcao para definir os eventos da primeira pagina da tela de perfil do usuario
 */
async function perfilUsuarioNovosEventos_1 ()
{
//Definir dados locais
  let editar = document.querySelector('#perfil-editar');
  let sair = document.querySelector('#perfil-usuario-sair');
  //let usuario  = await getUsuarioPerfilTemp();
  let usuario  = getUsuarioLogged();
//Definir eventos
  editar.addEventListener('click', () => editarUsuario(usuario));
  sair.addEventListener('click', () => logoutUsuario());
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
    let usuarioAntigo = getUsuarioLogged();
    usuario.form_adocao = usuarioAntigo.form_adocao;
    usuario.form_abandonado = usuarioAntigo.form_abandonado;
    updateUsuario(usuario);
    perfilUsuarioResetar();
    conteudoPerfilUsuario(1);
  });
  botaoDescartar.addEventListener('click', () => {
    perfilUsuarioResetar();    
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
  <img src="/assets/img/hidden.png" class="password-controle">`;
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
  let botaoDescartar = `<img src="/assets/img/discard.png" alt="botao-descartar" class="perfil-usuario-editar-btn" id="perfil-descartar">`;
  let botaoConfirmar = `<img src="/assets/img/confirm.png" alt="botao-confirmar" class="perfil-usuario-editar-btn" id="perfil-confirmar">`;
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
  let old = getUsuarioLogged();
  let usuario = { id_pessoa: old.id_pessoa, nome: "", email: "", senha: "", cpf: "", data_de_nascimento: "", telefone: "", tags: { atencao: 0, passeio: 0, carinho: 0, extrovertido: 0, animacao: 0 }, form_adocao: old.form_adocao, form_abandonado: old.form_abandonado };
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
 * perfilUsuarioResetar - Funcao para retirar os botoes de edicao (confirmar/descartar) e recolocar o botao de edicao
 */
function perfilUsuarioResetar ()
{
//Definir dados locais
  let divBotoes = document.querySelector('#perfil-usuario-botoes');
  let botaoConfirmar = document.querySelector('#perfil-confirmar');
  let botaoDescartar = document.querySelector('#perfil-descartar');
//Remover botoes
  botaoConfirmar.remove();
  botaoDescartar.remove();
//Adicionar novo botão
  let botaoEditar = `<img src="/assets/img/editar.png" alt="botao-editar" class="perfil-usuario-editar-btn" id="perfil-editar">`;
  divBotoes.insertAdjacentHTML('beforeend', botaoEditar);
//Definir dados locais
  let nome = document.querySelector('#usuario-nome');
  let email = document.querySelector('#usuario-email');
  let senha = document.querySelector('#usuario-senha');
  let cpf = document.querySelector('#usuario-cpf');
  let dt_nascimento = document.querySelector('#usuario-data-de-nascimento');
  let telefone = document.querySelector('#usuario-telefone');
  divBotoes = document.querySelector('#perfil-usuario-botoes');
  botaoEditar = document.querySelector('#perfil-editar');
//Substituir input por texto
  nome.innerHTML = "";
  email.innerHTML = "";
  senha.innerHTML = "";
  cpf.innerHTML = "";
  telefone.innerHTML = "";
}

/* ---------------------- Definir comportamento para mostrar a tela de PERFIL de USUÁRIO (FIM) ----------------------------- */

/* ------------------------------- Definir funcoes gerais para os cadastros (INICIO) ----------------------------------- */

function getRadio(radioName) {
  let x = document.getElementsByName(radioName);
  let value;
  x.forEach(element => {
    if (element.checked == true) {
      value = element.value;
    }
  });
  return value;
}
function getBoolRadio(radioName) {
  let x = document.getElementsByName(radioName);
  let value;
  x.forEach(element => {
    if (element.checked == true) {
      if (element.value === "true") {
        value = true;
      } else {
        value = false;
      }
    }
  });
  return value;
}
function getRadioText(radioName, outrosOptionId, checkOption) {
  let x = document.getElementsByName(radioName);
  let outros = document.getElementById(outrosOptionId).value;
  let value;

  x.forEach(element => {
    if (element.checked == true) {
      if (element.value === checkOption) {
        value = outros;
      } else {
        value = element.value;
      }
    }
  });
  return value;
}


function haveNullValue(data){
  let resp = false;
  for(var key in data){
    if(data[key] === "" || data[key] === null){
      console.log(key);
      resp = true;
    }
  }
  return resp;
}
/* ------------------------------- Definir funcoes gerais para os cadastros (FIM) ----------------------------------- */

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

      //console.log(data_nascimento);
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
        let animais = getAllAnimal();
        let nextId;
        if(animais.length > 0){
          nextId = (animais[animais.length - 1].id_animal)+1;
        } else {
          nextId = 1;
        }
        let animal_data = {
          id_animal: nextId,
          id_ong: getLoginOng(),
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
  const old  = getAllAnimal();
  old.push(data);
  localStorage.setItem("Animal", JSON.stringify(old));
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
      if (element.value == "true") {
        div.style.display = "block"
      } else {
        div.style.display = "none"
      }
    }
  });
});



function getAllForms(){
  const data = JSON.parse(localStorage.getItem("Form") || "[]");
  // console.log(data);
  return data;
}
function getForm(id){
  let forms = getAllForms();
  let resp;
  forms.forEach(element => {
    if(element.id_form == id){
      resp = element;
    }
  });
  return resp;
}
function submitFormulario() {
  let residencia = getRadioText('f_residencia', 'outros_value_residencia',"outros");
  let experiencia = getRadioText('f_exp','sim_exp','S');
  let visita_ong = getBoolRadio('f_visita_ong');
  let consentimento = getBoolRadio('f_consentimento');
  let disponibilidade = getRadio('f_tempo');
  let viagem = getRadioText('f_viagem','outros_value_viagem','outros');
  let comentarios = document.getElementById('f_comentarios').value
  let formularios = getAllForms();
  let params = new URLSearchParams(window.location.search);
  let id_animal = parseInt( params.get("id") );
  let nextId;
  if(formularios.length > 1){
    nextId = (formularios[formularios.length-1].id_form) + 1;
  } else {
    nextId = 1;
  }
  let data = {
    id_formulario: nextId,
    id_pessoa: parseInt( getLoginUsuario() ),
    id_animal: (id_animal != null) ? id_animal : 0,
    status: "pendente",
    data: new Date().toLocaleDateString("pt-BR"),
    moradia: residencia,
    experiencia: experiencia,
    viagem: viagem,
    disponibilidade: disponibilidade,
    visita_ong: visita_ong,
    consentimento: consentimento,
    comentario: comentarios
  }

  if(haveNullValue(data)){
    alert("erro");
  } else {
    postFormularioAdocao(data);
    console.log(getUsuario(data.id_pessoa));
  }
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
  let nextId;
  let animais = getAllAnimal();
  nextId = (animais.length > 1) ? (animais[animais.length-1].id_animal+1) : 1;
  let data = {
    id_animal: nextId,
    id_pessoa: getLoginUsuario(),
    especie: especie,
    quantidade: qnt,
    condicao: condicao,
    lar: lar,
    local: local
  }
  if(haveNullValue(data)){
    alert("erro");
  } else {
    saveAnimalData(data);
  }
}



/* --------------------- Definir comportamento do CADASTRO DE ANIMAL ABANDONADO (FIM) ------------------------ */

/* --------------------- Definir comportamento da EXIBIÇÃO DE ANIMAIS TELA INICIAL (INICIO) ------------------ */

let jsonUrl = "https://a050aadc-b2a9-48cd-9a69-a5566f985adf-00-1q7wk422qq9m2.riker.replit.dev";

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
  url += `${id}`
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
 * carregarFiltroCidades - Funcao para carregar os filtros de cidade do JSON Server e exibi-los na tela inicial.
 */ 

async function carregarFiltroCidades() {
  let filtroCidadeEl = document.querySelector("#telaInicial-FiltroCidade");
  //let apiUrlJsonOngs = `${urlJsonServer}/ongs`;
  let ongs = {}, cidades = [];
  let strHTML = "", stringValueCidade = "";
  let controle = true;
  let nCidades = 0;

  //ongs = await readJSONServer(apiUrlJsonOngs);
  ongs = getAllONG();

  strHTML = `<option value="U">Todas</option>`;
  for(let x = 0; x < ongs.length; x++) {

    controle = true;
    for(let y = 0; y < cidades.length; y++) {
      if(ongs[x].endereco[0].cidade == cidades[y]) {
        controle = false;
      }
    }

    if(controle) {
      cidades[nCidades] = ongs[x].endereco[0].cidade;
      strHTML += `<option value="${cidades[nCidades]}">${cidades[nCidades]}</option>`
      nCidades++;
    }

  }

  filtroCidadeEl.innerHTML = strHTML;
}

 /**
 * carregarAnimais - Funcao para carregar os animais do JSON Server e exibi-los na tela inicial.
 */ 

async function carregarAnimais() {

//Definir dados locais
  //let apiUrlJsonAnimais = `${urlJsonServer}/animais`;
  //let apiUrlJsonOngs = `${urlJsonServer}/ongs`;
  let divConteudoAnimais = document.querySelector("#telaInicial-Conteudo");
  let animais = {}, ongs = {};
  let strHTML = "", strGeneroAnimal = "", strNomeOng = "", strCidadeOng = ""; 

  let filtroCidadeEl = document.querySelector("#telaInicial-FiltroCidade");
  let filtroGeneroEl = document.querySelector("#telaInicial-FiltroGenero");
  let filtroPorteEl = document.querySelector("#telaInicial-FiltroPorte");
  let filtroEspecieEl = document.querySelector("#telaInicial-FiltroEspecie");

  let booleanFiltroGenero, booleanFiltroPorte, booleanFiltroEspecie, booleanFiltroCidade; 

//Acesso aos dados do JSON Server
  //animais = await readJSONServer(apiUrlJsonAnimais);
  //ongs = await readJSONServer(apiUrlJsonOngs);

  animais = getAllAnimal();
  ongs = getAllONG();

//Gravacao dos cards na String strHTML
  for(let x = 0; x < animais.length; x++) {

    if(!(animais[x].condicao)) {

//Controle icone do sexo do animal
      if(animais[x].genero == 'F') {
        strGeneroAnimal = "venus"; 
      } else {
        strGeneroAnimal = "mars"; 
      }

      for(let y = 0; y < ongs.length; y++) {
        if(animais[x].id_ong == ongs[y].id_ong) {
            strNomeOng = ongs[y].nome;
            strCidadeOng = ongs[y].endereco[0].cidade;
        }
      }

//Controle filtro de exibicao animais
      booleanFiltroCidade = filtroCidadeEl.value === 'U' || filtroCidadeEl.value === strCidadeOng;
      booleanFiltroGenero = filtroGeneroEl.value === 'U' || filtroGeneroEl.value === animais[x].genero;
      booleanFiltroPorte = filtroPorteEl.value === 'U' || filtroPorteEl.value === animais[x].porte;
      booleanFiltroEspecie = filtroEspecieEl.value === 'U' || filtroEspecieEl.value === animais[x].especie;

      if(booleanFiltroEspecie && booleanFiltroGenero && booleanFiltroPorte && booleanFiltroCidade) {
  
        strHTML += `<div class="telaInicial-Card">
                        <img src="${animais[x].imagem[0]}" alt="">
                        <p>${strNomeOng}</p>
                        <p>${strCidadeOng}</p>
                        <div class="telaInicial-Card-Informacoes">
                            <div class="telaInicial-Card-InfPet">
                            <i class="fa-solid fa-2xl fa-${strGeneroAnimal}"></i>
                            <h5>${animais[x].nome}</h5>
                            </div>
                            <button id="${animais[x].id_animal}" class="telaInicial-abrirModalBtn">Saiba Mais</button>
                        </div>
                    </div>`
      }

    }

//Insercao da String strHTML na tela inicial
    divConteudoAnimais.innerHTML = strHTML;

//Carrega a descricao do animal
    carregarDescricaoAnimalPopupEventos();

  }
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
  //let apiUrlJsonAnimais = `${urlJsonServer}/animais?id_animal=`;
  //let apiUrlJsonVacinas = `${urlJsonServer}/vacinas?id_animal=`;
  let descricaoModalEl = document.querySelector(".telaInicial-PopUp-Modal");

  let idEvent = event.target.id;
  let animal = {}, vacinas = {}, animais = {};
  let strHTML = "", srcGeneroAnimal = "", strGeneroAnimal = "", strCastradoAnimal = "", strPorteAnimal = "", strVacinasAnimal = "", strIdadeAnimal = "";

//Acesso ao dado do id no JSON Server
  //animais = await readJSONServerId(apiUrlJsonAnimais, idEvent);
  //vacinas = await readJSONServerId(apiUrlJsonVacinas, idEvent);

  //animal = animais[0];

  animal = getAnimal(idEvent);

//Controle caracteristicas animal
  if(animal.genero == 'F') {
    srcGeneroAnimal = "venus"; 
    strGeneroAnimal = "Fêmea";
  } else {
    srcGeneroAnimal = "mars"; 
    strGeneroAnimal = "Macho";
  }

  if(animal.castrado) {
    strCastradoAnimal = "Castrado"; 
  } else {
    strCastradoAnimal = "Não Castrado"; 
  }

  if(animal.porte == 'P') {
    strPorteAnimal = "Pequeno";
  } else {
    if(animal.porte == 'M') {
      strPorteAnimal = "Médio";
    } else {
      strPorteAnimal = "Grande";
    }
  }

  strIdadeAnimal = calcularIdade(animal.data_de_nascimento);
  strVacinasAnimal = "";

  console.log(animal);
  let chavesVacinas = Object.keys(animal.vacina);
  console.log(chavesVacinas);

  for (let y = 0; y < chavesVacinas.length; y++) {
    let vacina = chavesVacinas[y];
    
    if (animal.vacina[vacina]) {
      strVacinasAnimal += `<li>${vacina}</li>`;
    }
  }


//Mudanca strHTML 
  strHTML = `<div class="telaInicial-PopUpDescricao">
                <img src="${animal.imagem[0]}" alt="">
                <div class="telaInicial-PopUpInformacoes">
                    <div class="telaInicial-PopUpInformacoesPrincipais">
                        <div class="telaInicial-PopUp-ModalFechar">
                            <div class="telaInicial-PopUpInformacoesPrincipais-Titulo">
                                <h3>${animal.nome}</h3>
                                <i class="fa-solid fa-1xl fa-${srcGeneroAnimal}"></i>
                            </div>
                            <i class="fa-solid fa-x telaInicial-fecharModalBtn"></i>
                        </div>
                        <div class="telaInicial-PopUpInformacoesPrincipais-Subtitulo">
                            <p>${animal.especie}</p>
                            <p>${animal.raca}</p>
                            <p>${strGeneroAnimal}</p>
                            <p>${strPorteAnimal}</p>
                            <p>${strIdadeAnimal}</p>
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
                            ${strVacinasAnimal};
                        </ul>
                    </div>
                    <button onclick="carregarPaginaAdocao(${animal.id_animal})">Adotar!</button>
                </div>
            </div>`

//Mudar o innerHTML da div descricao do animal de acordo com o id
  descricaoModalEl.innerHTML = strHTML;

//Mudar o display para block
  descricaoModalEl.style.display = "block";

  descricaoModalEl.classList.add('compatibilidade-AnimacaoCrescimento');

  setTimeout(() => {
    descricaoModalEl.classList.add('show');
  }, 700); 

  descricaoModalEl.classList.remove('show');

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


async function carregarPaginaAdocao(id){
    if(!usuarioLogado()){
      fecharDescricaoAnimalPopup();
      loginUsuario();
      testarLoginAcabou('crud-form',id);
    } else {
      testarLoginAcabou('crud-form',id);
    }
}

async function carregarFormularioAnimalAbandonado(){

  if(!usuarioLogado()){
    loginUsuario();
    testarLoginAcabou('crud-animal-ab',0);
  } 
  else
  {
    window.location.href = "/pages/cadastros/crud-animal-abd.html"
  }
}

async function carregarPaginaCompatibilidade(){
  if(!usuarioLogado()){
    loginUsuario();
    testarLoginAcabou('compatibilidade',0);
  } else {
    testarLoginAcabou('compatibilidade',0);
  }
}


function testarLoginAcabou(pagina,animal_id){
  const repeticao = setInterval(function () {testarLoginAcabou(pagina,animal_id)} ,1000);
  if(usuarioLogado()){
    clearInterval(repeticao);
    switch (pagina) {
      case 'crud-form':
        window.location.href = `/pages/cadastros/crud-form.html?id=${animal_id}`
        break;
      case 'crud-animal-ab':
        window.location.href = "/pages/cadastros/crud-animal-abd.html"
        break;
      case 'compatibilidade':
        window.location.href = "/pages/compatibilidade/compatibilidade.html"
        break;
      default:
        break;
    }
  }
  
    
}
/* --------------------- Definir comportamento da EXIBIÇÃO DE ANIMAIS TELA INICIAL (FIM) ------------------ */

/* --------------------- Definir comportamento da EXIBIÇÃO DE ANIMAIS COMPATIBILIDADE (INICIO) ------------ */

let contadorAnimalCompatibilidade = 0;
let contadorImagemAnimalCompatibilidade = 0;

async function carregarDadosCompatibilidade() {
    await carregarAnimaisCompatibilidade();
    contadorAnimalCompatibilidade++;
    contadorImagemAnimalCompatibilidade = 0;
}

function testeContadorImagemAnimalCompatibilidade(tamanhoMax) {

  if(contadorImagemAnimalCompatibilidade >= tamanhoMax) {
    contadorImagemAnimalCompatibilidade = 0;
  } else {
    if(contadorImagemAnimalCompatibilidade < 0) {
      contadorImagemAnimalCompatibilidade = tamanhoMax-1;
    }
  }

}

async function proximaImagemCompatibilidade(event) {
  
  //let apiUrlJsonImagensAnimal = `${urlJsonServer}/imagensAnimal?id_animal=`;
  //imagensAnimal = await readJSONServerId(apiUrlJsonImagensAnimal, animalId);

  let animal = {};

  let btEvent = event.target.id;
  let imgAnimalEl = document.querySelector(".compatibilidade-EscolhasImagemCarousel"); 
  let animalId = imgAnimalEl.id; 

  animal = getAnimal(animalId);
  console.log(animal);

  if(btEvent == "compatibilidade-EscolhasCarouselImagemBtnD") {
    contadorImagemAnimalCompatibilidade++;
    testeContadorImagemAnimalCompatibilidade(animal.imagem.length);
    imgAnimalEl.src = animal.imagem[contadorImagemAnimalCompatibilidade];
  } else {
    if(btEvent == "compatibilidade-EscolhasCarouselImagemBtnE") {
      contadorImagemAnimalCompatibilidade--;
      testeContadorImagemAnimalCompatibilidade(animal.imagem.length);
      imgAnimalEl.src = animal.imagem[contadorImagemAnimalCompatibilidade];
    }
  }
}


async function carregarAnimaisCompatibilidade() {


  //let apiUrlJsonAnimais =  `${urlJsonServer}/animais`;
  //let apiUrlJsonImagensAnimal = `${urlJsonServer}/imagensAnimal`;

  let divContainerEscolhasEl = document.querySelector(".compatibilidade-ContainerEscolhas");
  let animais = {}, imagensAnimal = {};
  let strHTML = "", strImagemAnimal = "";
  let resultado = false;
  let y = 0, contadorAnimaisValidosAdocao = 0;

  //animais = await readJSONServer(apiUrlJsonAnimais);
  //imagensAnimal = await readJSONServer(apiUrlJsonImagensAnimal);

  animais = getAllAnimal();

  for(y = 0; y < animais.length; y++) {
    if(!(animais[y].condicao)) {
      contadorAnimaisValidosAdocao++;
    }
  }

  if(contadorAnimalCompatibilidade == contadorAnimaisValidosAdocao) {
    contadorAnimalCompatibilidade = 0;
  }

  /*while(y < imagensAnimal.length && !resultado) {
    if(animais[contadorAnimalCompatibilidade].id_animal == imagensAnimal[y].id_animal) {
      resultado = true;
      strImagemAnimal = imagensAnimal[y].imagem;
    }
    y++;
  }*/

  strHTML = `<h2>Encontre seu Parceiro Ideal!</h2>
            <div id="compatibilidade-EscolhasCarouselImagemContainer">
                <button onclick="proximaImagemCompatibilidade(event)" id="compatibilidade-EscolhasCarouselImagemBtnE" class="compatibilidade-EscolhasCarouselImagemBtn">&#8249;</button>
                <img id="${animais[contadorAnimalCompatibilidade].id_animal}" class="compatibilidade-EscolhasImagemCarousel" onclick="abrirDescricaoAnimalPopup(event)" src="${animais[contadorAnimalCompatibilidade].imagem[0]}" alt="">
                <button onclick="proximaImagemCompatibilidade(event)" id="compatibilidade-EscolhasCarouselImagemBtnD" class="compatibilidade-EscolhasCarouselImagemBtn">&#8250;</button>
            </div>
            <div id="compatibilidade-EscolhasInfAnimal">
                <h2>${animais[contadorAnimalCompatibilidade].nome}</h2>
                <p>${animais[contadorAnimalCompatibilidade].descricao}</p>
            </div>
            <div id="compatibilidade-EscolhasBotoes">
                <button id="compatibilidade-EscolhasProximoBtn" onclick="animacaoTrocaAnimalMatch()">X</button>
                <button id="compatibilidade-EscolhasAdotarBtn" onclick="carregarProcessamentoCompatibilidade()">✔</button>
            </div>`

  divContainerEscolhasEl.innerHTML = strHTML;

} 

async function carregarProcessamentoCompatibilidade() {

  let porcentagemCompatibilidade = await confirmarCompatibilidade();
  porcentagemCompatibilidade = parseInt(porcentagemCompatibilidade); 

  let modalProcessandoCompatibilidade = document.querySelector(".compatibilidade-PopUpProcessandoCompatibilidade");  
  let porcentagemCarregandoEl = document.querySelector(".compatibilidade-PorcentagemCarregando");
  let imgAnimalEl = document.querySelector(".compatibilidade-EscolhasImagemCarousel"); 
  let spanContadorPorcentagemEl = document.querySelector("#compatibilidade-ContadorPorcentagem"); 

  let animalId = imgAnimalEl.id; 

  modalProcessandoCompatibilidade.style.display = "block";

  modalProcessandoCompatibilidade.classList.add('compatibilidade-AnimacaoSubida');

  setTimeout(() => {
    modalProcessandoCompatibilidade.classList.add('show');
  }, 700); 

  modalProcessandoCompatibilidade.classList.remove('show');

  porcentagemCarregandoEl.style.width = 0;

  let tempoTotal = 15000; 
  let tempoProporcional = (porcentagemCompatibilidade / 100) * tempoTotal;

  let progressoAtual = 0, progressoAtualContadorPorcentagem = 0;

  let intervalo = setInterval(() => {
    if (progressoAtual < porcentagemCompatibilidade) {
      progressoAtual++;
      spanContadorPorcentagemEl.innerHTML = progressoAtual;
      porcentagemCarregandoEl.style.width = progressoAtual + '%';
    } else {
        clearInterval(intervalo);
    }
  }, tempoTotal / tempoProporcional);

  let intervaloContadorPorcentagem = setInterval(() => {
    if (progressoAtualContadorPorcentagem < porcentagemCompatibilidade) {
      progressoAtualContadorPorcentagem++;
      spanContadorPorcentagemEl.innerHTML = progressoAtualContadorPorcentagem;
    } else {
        clearInterval(intervaloContadorPorcentagem);
    }
  }, tempoTotal / 100);
  
  await exibicaoTelaCarregarCompatibilidade();

  if (porcentagemCompatibilidade >= 70) {
    await abrirModalMatch(animalId);
  } else {
    abrirModalNaoMatch();
  }
}

async function exibicaoTelaCarregarCompatibilidade() {
  let tempo = 15000;

  return new Promise((resolve) => {
    setTimeout(() => {
      let modalProcessandoCompatibilidade = document.querySelector(".compatibilidade-PopUpProcessandoCompatibilidade");  
      modalProcessandoCompatibilidade.style.display = 'none';
      resolve();
    }, tempo);
  });
}



async function confirmarCompatibilidade() {

  //let apiUrlJsonTagsAnimal = `${urlJsonServer}/etiquetas?id_animal=`;
  //let apiUrlJsonTagsUsuario = `${urlJsonServer}/etiquetas?id_pessoa=`;
  let animal = {}, url_foto_acao_animalsuario = {};
  let distanciaPontos = 0.0, valorMaximo = 0.0, porcentagemCompatibilidade = 0.0;
 
  let imgAnimalEl = document.querySelector(".compatibilidade-EscolhasImagemCarousel"); 
  let animalId = imgAnimalEl.id; 

  //tagsAnimal = await readJSONServerId(apiUrlJsonTagsAnimal, animalId);
  //tagsAnimal = tagsAnimal[0];
  //tagsUsuario = await readJSONServerId(apiUrlJsonTagsUsuario, 1);
  //tagsUsuario = tagsUsuario[0];

  animal = getAnimal(animalId);
  usuario = getUsuario(getLoginUsuario());

  distanciaPontos = Math.sqrt( Math.pow((animal.tags.atencao - usuario.tags.atencao), 2) + 
  Math.pow((animal.tags.passeio - usuario.tags.passeio), 2) + 
  Math.pow((animal.tags.carinho - usuario.tags.carinho), 2) +
  Math.pow((animal.tags.extrovertido - usuario.tags.extrovertido), 2) +
  Math.pow((animal.tags.animacao - usuario.tags.animacao), 2));         
  
  valorMaximo = Math.sqrt(80);

  porcentagemCompatibilidade = ((distanciaPontos * 100)/valorMaximo);
  porcentagemCompatibilidade = 100 - porcentagemCompatibilidade;

  return porcentagemCompatibilidade;

}

function abrirModalNaoMatch() {
  let divModalMatchEl = document.querySelector(".compatibilidade-PopUp-ModalNaoMatch");

  divModalMatchEl.classList.add('compatibilidade-AnimacaoSubida');

  setTimeout(() => {
    divModalMatchEl.classList.add('show');
  }, 700); 

  divModalMatchEl.classList.remove('show');

  divModalMatchEl.style.display = "block";
}

async function abrirModalMatch(idAnimal) {

  let divModalMatchEl = document.querySelector(".compatibilidade-PopUp-Modal");
  let imgAnimalEl = document.querySelector(".compatibilidade-perfilAnimal");
  let imgUsuarioEl = document.querySelector(".compatibilidade-perfilUsuario");
  let botaoAdocaoEl = document.querySelector(".compatibilidade-SolicitarAdocao");

  //let apiUrlJsonTagsAnimal = `${urlJsonServer}/imagensAnimal?id_animal=`;
  let animal = {};
  let resultado = false;
  let strImagemAnimal = "";
  let y = 0;

  botaoAdocaoEl.addEventListener("click", function() {
    carregarPaginaAdocao(idAnimal);
  });

  //imagensAnimal = await readJSONServerId(apiUrlJsonTagsAnimal, idAnimal);
  animal = getAnimal(idAnimal);

  /*while(y < imagensAnimal.length && !resultado) {
    if(idAnimal == imagensAnimal[y].id_animal) {
      resultado = true;
      strImagemAnimal = imagensAnimal[y].imagem;
    }
    y++;
  }*/

  divModalMatchEl.style.display = "block";


  divModalMatchEl.classList.add('compatibilidade-AnimacaoSubida');

  setTimeout(() => {
    divModalMatchEl.classList.add('show');
  }, 700); 

  divModalMatchEl.classList.remove('show');

  imgAnimalEl.src = animal.imagem[0];
  imgAnimalEl.id = idAnimal;
  imgUsuarioEl.src = "https://thumbs.dreamstime.com/b/%C3%ADcone-de-usu%C3%A1rio-m%C3%ADdia-social-vetor-imagem-perfil-do-avatar-padr%C3%A3o-retrato-182347582.jpg";

}

function fecharModalMatch() {
  let divModalMatchEl = document.querySelector(".compatibilidade-PopUp-Modal");
  let divModalNaoMatchEl = document.querySelector(".compatibilidade-PopUp-ModalNaoMatch");
  divModalMatchEl.style.display = "none";
  divModalNaoMatchEl.style.display = "none";
}

function animacaoTrocaAnimalMatch() {

  let divContainerEscolhasEl = document.querySelector(".compatibilidade-ContainerEscolhas");

  divContainerEscolhasEl.classList.add('compatibilidade-AnimacaoDesaparecimento');

  setTimeout(() => {
    divContainerEscolhasEl.classList.add('show');
  }, 700); 

  divContainerEscolhasEl.classList.remove('show');
  
  carregarDadosCompatibilidade()
}

function calcularIdade(dataPassada) {
  const hoje = new Date();
  const [dia, mes, ano] = dataPassada.split('/').map(Number);
  const nascimento = new Date(ano, mes - 1, dia); // mês - 1 porque os meses em JS começam em 0

  let anos = hoje.getFullYear() - nascimento.getFullYear();
  let meses = hoje.getMonth() - nascimento.getMonth();

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  return `${anos} anos e ${meses} meses`;
}

/* --------------------- Definir comportamento da EXIBIÇÃO DE ANIMAIS COMPATIBILIDADE (FIM) --------------- */
/*---------------------- Tela de Atividades ONG (Inicio) ------------------*/

function readFormularios ()
{
//Definir dados locais
  let id_ong = getOngLogged().id_ong;
//Ler todos os formularios de adocao
  let formulariosAdocao = getFormularioAdocaoONG(id_ong);
//Ler todos os formularios de animal abandonado
  let formulariosAbandonado = getFormularioAbandonadoONG(id_ong);
//Inserir formularios de adocao
  inserirFormulariosAdocao (formulariosAdocao);
//Inserir formularios de animal abandonado
  inserirFormulariosAbandonado (formulariosAbandonado);
//Definir eventos
  formulariosOngEventos();
}

function formulariosOngEventos()
{
//Definir dados locais
  let containers = document.getElementsByClassName('container-conteudo');
//Adicionar eventos
  for (let i = 0; i < containers.length; i++)
  {
  //Definir dados locais
    let container = containers[i];
    let id_formulario = parseInt( container.querySelector('.fa-solid').id);
    let botaoFormulario = container.querySelector('.adocao-form');
    let botaoAceitar = container.querySelector('.Aceitar-button');
    let botaoRecusar = container.querySelector('.Recusar-button');
  //Definir eventos
    botaoFormulario.addEventListener('click', (e) => mostrarPopupFormularioAdocao(e.target.id));
    botaoAceitar.addEventListener('click', () => mudarStatusFormularioAdocao("aceito", id_formulario));
    botaoRecusar.addEventListener('click', () => mudarStatusFormularioAdocao("recusado", id_formulario));
  }
}

function mudarStatusFormularioAdocao (status, id_formulario)
{
//Definir dados locais
  let formulario = getFormularioAdocao(id_formulario);
  let pessoa = getUsuario(formulario.id_pessoa);
  let formulariosPessoa = pessoa.form_adocao;
//Mudar status
  formulario.status = status;
//Identificar formulario da pessoa
  let i = 0;
  let controle = true;
  while (i < formulariosPessoa.length && controle)
  {
    controle = formulariosPessoa[i].id_formulario != formulario.id_formulario;
    i++;  
  }
//Atualizar objeto
  if (i > 0 && !controle)
    pessoa.form_adocao[i - 1] = formulario;
//Atualizar
  updateUsuario(pessoa);
//Recarregar pagina
  readFormularios();
}

async function mostrarPopupFormularioAdocao(id_formulario)
{
//Definir dados locais
  let main = document.querySelector('main');
//Adicionar popup
  let modal = await carregarHtml('/pages/atividadesONG/pop-up-formulario.html');
  main.insertAdjacentHTML('beforeend', modal);
  popUpFormularioOngEventos();
  preencherPopupFormulario(id_formulario);
}

function preencherPopupFormulario (id_formulario)
{
//Definir dados locais
  let formulario = getFormularioAdocao(id_formulario);
  let pessoa = getUsuario(formulario.id_pessoa);
  let animal = getAnimal(formulario.id_animal);
//Definir elemntos html de pessoa
  let element = document.querySelector('.formulario-ong-informacoes-pessoa');
  let nomePessoa = element.querySelector('.formulario-ong-nome');
  let dataPessoa = element.querySelector('.formulario-ong-idade');
  let emailPessoa = element.querySelector('.formulario-ong-email');
  let telefonePessoa = element.querySelector('.formulario-ong-telefone');
//Atribuir dados html de pessoa
  nomePessoa.innerHTML = pessoa.nome;
  dataPessoa.innerHTML = pessoa.data_de_nascimento;
  emailPessoa.innerHTML = pessoa.email;
  telefonePessoa.innerHTML = pessoa.telefone;
//Definir elementos html de animal
  element = document.querySelector('.formulario-ong-informacoes-animal');
  let nomeAnimal = element.querySelector('.formulario-ong-nome');
  let especieAnimal = element.querySelector('.formulario-ong-especie');
  let sexoAnimal = element.querySelector('.formulario-ong-sexo');
  let idadeAnimal = element.querySelector('.formulario-ong-idade');
//Atribuir dados html de pessoa
  nomeAnimal.innerHTML = animal.nome;
  especieAnimal.innerHTML = animal.especie;
  sexoAnimal.innerHTML = (animal.sexo == 'M') ? "Masculino" : "Feminino" ;
  idadeAnimal.innerHTML = animal.data_de_nascimento;
//Definir elementos html de formulario
  element = document.querySelector('.formulario-ong-informacoes-form');
  let dataForm = element.querySelector('.formulario-ong-data');
  let moradiaForm = element.querySelector('.formulario-ong-moradia');
  let experienciaForm = element.querySelector('.formulario-ong-experiencia');
  let viagemForm = element.querySelector('.formulario-ong-viagem');
  let disponibilidadeForm = element.querySelector('.formulario-ong-disponibilidade');
  let visitasForm = element.querySelector('.formulario-ong-visitas');
  let consentimentoForm = element.querySelector('.formulario-ong-consentimento');
  let comentarioForm = element.querySelector('.formulario-ong-comentarios');
//Atribuir dados html de formulario
  dataForm.innerHTML = formulario.data;
  moradiaForm.innerHTML = formulario.moradia;
  experienciaForm.innerHTML = (formulario.experiencia) ? "Sim" : "Nao";
  viagemForm.innerHTML = formulario.viagem;
  disponibilidadeForm.innerHTML = formulario.disponibilidade;
  visitasForm.innerHTML = (formulario.visitas) ? "Sim" : "Nao";
  consentimentoForm.innerHTML = (formulario.consentimento) ? "Sim" : "Nao";
  comentarioForm.innerHTML = (formulario.comentario != undefined) ? formulario.comentario : "Não há comentários disponíveis";
}

function popUpFormularioOngEventos ()
{
//Definir dados locais
  let closeWindow = document.querySelector('.formulario-ong-close');
//Definir evento
  closeWindow.addEventListener('click', () => {
    let modal = document.querySelector('.formulario-ong-modal');
    modal.remove();
  });
}

function inserirFormulariosAdocao (formularios)
{
//Definir dados locais
  let container = document.querySelector('.container-Solic');
  let str = "";
  container.innerHTML = str;
  let formulariosPendentes = [];
//Identificar formularios pendentes
  for (let i = 0; i < formularios.length; i++)
  {
    if (formularios[i].status == "pendente")
      formulariosPendentes.push(formularios[i]);
  }
//Testar se nao há formularios pendentes
  if (formulariosPendentes.length == 0)
    str = `<p>Ainda não há formulários de adoção recebidos!</p>`;
  else
  {
  //Criar string com os formularios
    for (let i = 0; i < formularios.length; i++)
    {
    //Definir dados locais
      let formulario = formularios[i];
      let pessoa = getUsuario(formulario.id_pessoa);
      let animal = getAnimal(formulario.id_animal);
    //Testar se o animal esta correto
      if (formulario.status == "pendente")
      {
      //Adicionar 'a string
        str += `
          <div class="container-conteudo">
            <div class="Image-Solic">
              <img src="${animal.imagem[0]}" alt="imagem-animal">
              <h6>${animal.nome}</h6>
            </div>
            <div class="text-solic">
              <p><strong>Pedido realizado por:</strong><span class="form-adocao-nome-pessoa">   ${pessoa.nome}</span></p>
              <p><strong>Comentarios:</strong><span class="form-adocao-comentarios">   ${formulario.comentarios}</span></p>
              <p><strong>Data do pedido:</strong><span class="form-adocao-data">   ${formulario.data}</span></p>
            </div>
            <div class="Formulario-content">
              <button class="adocao-form"><i class="fa-solid fa-file-pen fa-4x" id="${formulario.id_formulario}"></i></button><br>
              <h5 class="formulario-text">Informações</h5>
            </div>
            <div class="button-solic">
              <button class="Aceitar-button"><strong>ACEITAR</strong></button>
              <button class="Recusar-button"><strong>RECUSAR</strong></bu>
            </div>
          </div>
        `;
      }
    }  
  }
//Adicionar string ao html
  container.innerHTML = str;
}

function inserirFormulariosAbandonado (formularios)
{

//Definir dados locais
  let container = document.querySelector('.doacoes-grid');
  let str = "";
  container.innerHTML = str;
//Testar se ha' formularios
  if ( !(formularios.length > 0) )
  {
    str = `<p>Ainda não há formulários de animais abandonados recebidos!</p>`;
  } 
  else
  {
  //Criar string com os formularios
    for (let i = 0; i < formularios.length; i++)
    {
    //Definir dados locais
      let formulario = formularios[i];
      let pessoa = getUsuario(formulario.id_pessoa);
    //Testar se o formulario esta pendente
      if (formulario.status == "pendente")
      {
      //Adicionar 'a string
        str += `
          <div class="adocoes-card" id="${formulario.id_form}">
            <div class="top-container-adocao">
              <div>
                <img src="${formulario.imagem}" alt="Imagem do Animal" class="foto-nome-doacoes-container">
                <h5>Nome</h5>
              </div>
              <div class="Formulário-container">
                <button class="abandonado-form"><i class="fa-solid fa-file-pen fa-4x"></i></button><br>
                <h5>Informações</h5>
              </div>
            </div>
            <div class="botoes-doacao">
              <button class="Aceitar-button-doacao"><strong>ACEITAR</strong></button>
              <button class="Recusar-button-doacao"><strong>RECUSAR</strong></button>
            </div>
          </div>
        `;
      }
    }
  }
//Adicionar string ao html
  container.innerHTML = str;
}

function loadAnimal(){
  console.log("loadAnimal");
  let animais = getAllAnimal();
  let mainDiv = document.querySelector(".animal-grid");
  let html = `<div class="animal-card">
                    <a style="color:black" href = "/pages/cadastros/crud-animal.html" class="img-add-animal"><span><i class="fa-2xl fa-solid fa-plus"></i></span></a>
              </div>`;
  let pesquisarAnimalOng = document.querySelector(".barra-pesquisa").value
  for(let i =0; i<animais.length; i++){
    if(animais[i].id_ong != null && animais[i].id_ong == getLoginOng() && !animais[i].condicao){
      if(animais[i].nome.includes(pesquisarAnimalOng)){
        html += `<div class="animal-card">
        <img class= "animal-image" src="${animais[i].imagem[0]}" alt="Imagem do Animal">
        <div class="animal-name">${animais[i].nome}</div>
        <button class="edit-icon"><i class="fa-solid fa-pencil"></i></button>
        <button class="delete-icon"><i class="fa-solid fa-x"></i></button>
      </div>`;
      }
    }
     
  }
  mainDiv.innerHTML = html;
}
let pesquisarAnimalOng = document.querySelector(".barra-pesquisa").addEventListener('oninput',loadAnimal())

/*---------------------- Tela de Atividades ONG (FIM) ------------------*/


/*---------------------- Tela de Perfil ONG (Inicio) ------------------*/
// Função que cria um objeto inicial da ONG no localStorage

function AC_iniciarDados() {
    const ong = {
        nome: "Patinhas Felizes",
        email: "contato@patinhasfelizes.org",
        telefone: "(31) 98765-4321",
        sobreNos: "Somos uma ONG dedicada ao resgate e cuidado de animais abandonados, buscando lares para eles.",
        endereco: "Rua Fulano, Bairro Ciclano, Belo Horizonte, MG",
        dataCriacao: "01/01/2020",
        facebook: "https://www.facebook.com/ong-exemplo",
        instagram: "https://www.instagram.com/ong-exemplo"
    };

    // Armazenando o objeto no localStorage
    localStorage.setItem('ong', JSON.stringify(ong));

    // Alterando a localizacao da pagina
      window.location.href = "/pages/atividadesONG/AtividadeONG.html"; 
}

// Função que exibe os dados da ONG na página
function AC_mostrarDados() {
    const ong = JSON.parse(localStorage.getItem('ong'));

    if (!ong) {
        AC_iniciarDados();  // Inicializa os dados se não houver nenhum no localStorage
        return AC_mostrarDados();
    }

    // Preenchendo os campos HTML com as informações da ONG
    document.getElementById('ong-nome').innerText = ong.nome;
    document.getElementById('ong-email').innerText = ong.email;
    document.getElementById('ong-telefone').innerText = ong.telefone;
    document.getElementById('ong-sobre-nos').innerText = ong.sobreNos;
    document.getElementById('ong-endereco').innerText = ong.endereco;
    document.getElementById('ong-data-criacao').innerText = ong.dataCriacao; // Exibindo data de criação
}

// Função que habilita a edição dos dados diretamente na página
function AC_editarDados() {
    const ong = JSON.parse(localStorage.getItem('ong'));

    // Substituindo os elementos de exibição pelos campos de input
    document.getElementById('ong-nome').innerHTML = `<input type="text" id="input-nome" value="${ong.nome}" />`;
    document.getElementById('ong-email').innerHTML = `<input type="text" id="input-email" value="${ong.email}" />`;
    document.getElementById('ong-telefone').innerHTML = `<input type="text" id="input-telefone" value="${ong.telefone}" />`;
    document.getElementById('ong-sobre-nos').innerHTML = `<textarea id="input-sobre-nos">${ong.sobreNos}</textarea>`;
    document.getElementById('ong-endereco').innerHTML = `<input type="text" id="input-endereco" value="${ong.endereco}" />`;
    document.getElementById('ong-data-criacao').innerHTML = `<input type="text" id="input-data-criacao" value="${ong.dataCriacao}" />`;

    // Adicionando o botão "OK" para salvar as alterações
    document.getElementById('edit-ok-btn').style.display = 'block';
}

// Função que salva os dados editados e atualiza no localStorage
function AC_salvarDados() {
    const nome = document.getElementById('input-nome').value;
    const email = document.getElementById('input-email').value;
    const telefone = document.getElementById('input-telefone').value;
    const sobreNos = document.getElementById('input-sobre-nos').value;
    const endereco = document.getElementById('input-endereco').value;
    const dataCriacao = document.getElementById('input-data-criacao').value;

    // Atualizando o objeto ONG com os novos valores
    const ongAtualizada = {
        nome,
        email,
        telefone,
        sobreNos,
        endereco,
        dataCriacao
    };

    // Salvando a nova versão no localStorage
    localStorage.setItem('ong', JSON.stringify(ongAtualizada));

    // Atualizando os campos na página
    AC_mostrarDados();

    // Ocultando o botão "OK"
    document.getElementById('edit-ok-btn').style.display = 'none';
}

// Adicionando um listener ao botão de edição
document.querySelector('.edit-icon-ong').addEventListener('click', AC_editarDados);

// Adicionando listener ao botão "OK"
document.getElementById('edit-ok-btn').addEventListener('click', AC_salvarDados);

// Inicializando os dados ao carregar a página
document.addEventListener('DOMContentLoaded', AC_mostrarDados);

/*---------------------- Tela de Pefil ONG (Fim) ------------------*/