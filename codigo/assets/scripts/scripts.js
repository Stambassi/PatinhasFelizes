/* ---------------- Algumas funções padrões para auxiliar -------------------- */

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

/* ------------------------ Definir comportamento para mostrar o pop-up de LOGIN (INICIO) ------------------------ */


function loginOnload ()
{
  let loginBtnMostrar = document.querySelector("#btnMostrarLogin");
  loginBtnMostrar.addEventListener('click', () => loginUsuario());
}

async function loginUsuario ()
{
//Definir dados locais
  let main = document.querySelector('main');
  let container;
//Recuperar html
  container = await carregarHtml('../../pages/loginUsuario/login-template.html');
//Adicionar html
  adicionarPopup(container, main, loginUsuarioEventos);
}

function loginUsuarioEventos ()
{
//Definir dados locais
  let main = document.querySelector('main');
  let closeWindow = document.querySelector('.login-close-window');
  let cadastroUser = document.querySelector('#login-btn-cadastro');
  let loginONG = document.querySelector('#login-btn-instituicao');
//Definir eventos
  closeWindow.addEventListener('click', () => fecharPopup());
  controlarSenha();
  cadastroUser.addEventListener('click', async () => await cadastroUsuario());
  loginONG.addEventListener('click', async () => await loginInstituicao()); 
}

/* ------------------------ Definir comportamento para mostrar o pop-up de LOGIN (FIM) ------------------------ */


function controlarSenha()
{
//Definir dados locais
  let passwordImg = document.querySelector('.password-img');
  if (passwordImg != null)
  {
    let controleSenha = 0;
  //Definir evento
    passwordImg.addEventListener('click', () => {
      controleSenha = inverterSenha(passwordImg, controleSenha);
    });
  }
}

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

function limitarNome (inputField)
{
//Testar input
  if (inputField.placeholder == "Nome completo" || inputField.placeholder == "Nome da instituição")
  {
  //Definir dados locais
    let str = inputField.value;
    let result = "";
    const letterPattern = /^[A-Za-zÀ-ÖØ-Ýà-öø-ÿ\s]*$/;
  //Testar tamanho
    if (str.length > 0)
    {
    //Definir dados locais
      let c = str.charAt( str.length - 1 );
    //Testar se o caractere e' valido
      if (!letterPattern.test(inputField.value))
      {
        inputField.value = "";
      }
    }
  }
}




/* --------------------- Definir comportamento para mostrar o pop-up de CADASTRO (INICIO) ------------------------ */


async function cadastroUsuario ()
{
//Definir dados locais
  let main = document.querySelector('main');
  let pagina = 1;
  let container;
//Recuperar html
  container = await carregarHtml(`../../pages/cadastroUsuario/cadastro-template-${pagina}.html`);
//Adicionar html
  adicionarPopup(container, main, cadastroUsuarioEventos);
}

function cadastroUsuarioEventos ()
{
//Definir dados locais
  let pagina = parseInt( document.querySelector('.login-input').id );
  let closeWindow = document.querySelector('.login-close-window');
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

let objUsuario = { nome: "", email: "", senha: "", cpf: "", data_de_nascimento: "", telefone: "", tags: { atencao: 0, passeio: 0, carinho: 0, extrovertido: 0, animacao: 0 } };

/**
 * cadastroUsuarioPassarPagina - Funcao para definir o comportamento da passagem de paginas
 */
async function cadastroUsuarioPassarPagina()
{
//Definir dados locais
  let pagina = parseInt( document.querySelector('.login-input').id );
  let cadastroSubmit = document.querySelector('#cadastro-submit');
//Definir evento de passar a pagina
  cadastroSubmit.addEventListener('click', async () => {  
  //Testar se a pagina esta preenchida
    if ( !cadastroInputsPreenchidos(pagina) )
    {
      mostrarErro("É obrigatório o preenchimento de todos os campos!");
    }
    else
    {
    //Atribuir dados e mostrar proxima pagina
      cadastroUsuarioPreencher(pagina);
      pagina++;
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
 * cadastroUsuarioPagina - Funcao para controlar o conteudo a ser mostrado no pop-up de cadastro
 * @param pagina - Pagina a ser mostrada
 */
async function cadastroUsuarioPagina(pagina)
{
//Definir dados locais
  let main = document.querySelector('main');
//Recuperar html
  container = await carregarHtml(`../../pages/cadastroUsuario/cadastro-template-${pagina}.html`);
//Adicionar html
  adicionarPopup(container, main, cadastroUsuarioEventos);
//Definir mascaras da pagina 2
  if (pagina === 2)
  {
    $('#cadastro-input-field-1').mask('000.000.000-00');
    $('#cadastro-input-field-2').mask('00/00/0000');
    $('#cadastro-input-field-3').mask('(00) 00000-0000');
  }
//Definir estilo do container da pagina 3
  else if (pagina == 3)
  {
    let lc_container = document.querySelector('.lc-container');
    lc_container.style.width = 'auto';
    lc_container.style.height = '730px';
    lc_container.style.margin = '10px 0 0 0';
    lc_container.style.padding = '20px 40px 0px 40px';
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


/* --------------------- Definir comportamento para mostrar o pop-up de LOGIN da INSTITUICAO (INICIO) ------------------------ */


async function loginInstituicao ()
{
//Definir dados locais
  let main = document.querySelector('main');
  let container;
//Recuperar container da pagina
  container = await carregarHtml(`../../pages/loginInstituicao/login-template.html`);
//Atualizar o html da pagina
  adicionarPopup(container, main, loginInstituicaoEventos);
}

async function loginInstituicaoEventos ()
{
//Definir dados locais
  let closeWindow = document.querySelector('.login-close-window');
  let cadastroONG = document.querySelector('#cadastro-instituicao');
  let loginUser = document.querySelector('#login-usuario');
//Definir máscara do input de CNPJ
  $('.login-input-field[placeholder="CNPJ"]').mask('00.000.000/0000-00');
//Definir eventos
  closeWindow.addEventListener('click', () => fecharPopup())
  controlarSenha();
  cadastroONG.addEventListener('click', async () => await cadastroInstituicao());
  loginUser.addEventListener('click', async () => await loginUsuario());  
}

async function cadastroInstituicao ()
{
//Definir dados locais
  let pagina = 1;  
//Atualizar pagina
  await atualizarCadastroInstituicao (pagina);
}

async function atualizarCadastroInstituicao (pagina)
{
//Definir dados locais
  let main = document.querySelector('main');
  let container;
//Recuperar container da pagina
  container = await carregarHtml(`../../pages/cadastroInstituicao/cadastro-instituicao-${pagina}.html`);
//Atualizar o html da pagina
  adicionarPopup(container, main, cadastroInstituicaoEventos);
}

async function cadastroInstituicaoEventos ()
{
//Definir dados locais
  let pagina = parseInt( document.querySelector('.login-input').id );
  let closeWindow = document.querySelector('.login-close-window');
  let inputNome = document.querySelector('#cadastro-input-field-1');
  let loginONG = document.querySelector('#cadastro-btn-login');
//Definir eventos
  closeWindow.addEventListener('click', () => fecharPopup());
  controlarSenha();
  cadastroInstituicaoPassarPagina();
  loginONG.addEventListener('click', async () => await loginInstituicao()); 
  if (pagina === 1)
    inputNome.addEventListener('input', () => limitarNome(inputNome));
}

function cadastroInstituicaoPassarPagina ()
{
//Definir dados locais
  let pagina = parseInt( document.querySelector('.login-input').id );
  let cadastroSubmit = document.querySelector('#cadastro-submit');
//Definir evento de passar a pagina
  cadastroSubmit.addEventListener('click', async () => {  
  //Testar se a pagina esta preenchida
    if ( !cadastroInputsPreenchidos(pagina) )
    {
      mostrarErro("É obrigatório o preenchimento de todos os campos!");
    }
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

async function cadastroInstituicaoPagina (pagina)
{
//Definir dados locais
  let main = document.querySelector('main');
  let container;
  let lc_container = document.querySelector('.lc-container');
//Recuperar html
  container = await carregarHtml(`../../pages/cadastroInstituicao/cadastro-instituicao-${pagina}.html`);
//Adicionar html
  adicionarPopup(container, main, cadastroInstituicaoEventos);
//Definir estilos
  if (pagina === 2)
  {
    $('#cadastro-input-field-1').mask('00000-000');
    lc_container.style.height = '800px';
  }
}

let objONG = { nome: "", email: "", senha: "", telefone: "", foto_perfil: "", cnpj: "", descricao: "", endereco: { rua: "", numero: "", bairro: "", cidade: "", estado: "" } };

function cadastroInstituicaoPreencher (pagina)
{
  switch (pagina)
  {
    case 1: cadastroInstituicaoPreencher_1(); break;
    case 2: cadastroInstituicaoPreencher_2(); break;
    case 3: cadastroInstituicaoPreencher_3(); break;
  }
}

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

function cadastroInstituicaoPreencher_2()
{
//Definir dados locais
  let input_1 = document.querySelector('#cadastro-input-field-1').value;
  let input_2 = document.querySelector('#cadastro-input-field-2').value;
  let input_3 = document.querySelector('#cadastro-input-field-3').value;
  // let input_4 = document.querySelector('#cadastro-input-field-3').value; //IMAGEM
//Substituir no objeto
  objONG.cnpj = input_1;
  objONG.telefone = input_2;
  objONG.descricao = input_3; 
}

function cadastroInstituicaoPreencher_3()
{
  // objONG.endereco.rua = ;
  // objONG.endereco.numero = ;
  // objONG.endereco.bairro = ;
  // objONG.endereco.cidade = ;
  // objONG.endereco.estado = ;
}

// /**
//  * cadastroUsuarioPreencher - Funcao para controlar o preenchimento do objeto Usuário de acordo com a pagina do pop-up de cadastro
//  * @param pagina - Pagina a ter seus dados lidos
//  */
// function cadastroUsuarioPreencher(pagina)
// {
// //Testar pagina
//   switch(pagina)
//   {
//     case 1: cadastroUsuarioPreencher_1(); break;
//     case 2: cadastroUsuarioPreencher_2(); break;
//     case 3: cadastroUsuarioPreencher_3(); break;
//   }
// }

// function cadastroUsuarioPreencher_1 ()
// {
// //Definir dados locais
//   let input_1 = document.querySelector('#cadastro-input-field-1').value;
//   let input_2 = document.querySelector('#cadastro-input-field-2').value;
//   let input_3 = document.querySelector('#cadastro-input-field-3').value;
// //Substituir no objeto
//   objUsuario.nome = input_1;
//   objUsuario.email = input_2;
//   objUsuario.senha = input_3;
// }

// function cadastroUsuarioPreencher_2 ()
// {
// //Definir dados locais
//   let input_1 = document.querySelector('#cadastro-input-field-1').value;
//   let input_2 = document.querySelector('#cadastro-input-field-2').value;
//   let input_3 = document.querySelector('#cadastro-input-field-3').value;
// //Substituir no objeto
//   objUsuario.cpf = input_1;
//   objUsuario.data_de_nascimento = input_2;
//   objUsuario.telefone = input_3;  
// }

/* --------------------- Definir comportamento para mostrar o pop-up de LOGIN da Instituicao (FIM) ------------------------ */


/* --------------------- Definir comportamento do CADASTRO DE ANIMAL (INICIO) ------------------------ */

function getAnimalGenero(){
  let genero_form = document.getElementsByName('a_genero');
  let genero_value;
  
  genero_form.forEach(element => {
    if(element.checked == true){
      genero_value = element.value;
    }
  });

  return genero_value;
}

function getAnimalCastrado(){
  let castrado_form = document.getElementsByName('a_castrado');
  let castrado_value;
  
  castrado_form.forEach(element => {
    if(element.checked == true){
      if(element.value === "true"){
        castrado_value = true;
      } else {
        castrado_value = false;
      }
    }
  });
  return castrado_value;
}

function getAnimalEspecie(){
  let especie_form = document.getElementsByName('a_especie');
  let especie_outros = document.getElementById('outros_value').value;
  let especie_value;

  especie_form.forEach(element => {
    if(element.checked == true){
      if(element.value === "outros"){
        especie_value = especie_outros;
      } else {
        especie_value = element.value;
      }
    }
  });

  return especie_value;
}

function getAnimalVacina(){
  let vacina_form = document.getElementsByName('a_vacina');
  const vacina_value = [];
  vacina_form.forEach(element => {
    if(element.checked == true){
      vacina_value.push(element.value);
    }
  });
  return vacina_value;
}

function changePageAnimal(page){

  let divFirstPage = document.getElementById('animal-form-1');
  let divSecondPage = document.getElementById('animal-form-2');
  let stageOne = document.getElementById('Cadastro-geral');
  let stageTwo = document.getElementById('Cadastro-especifico');
  let next = document.getElementById('btn-animal-passar');
  let back = document.getElementById('btn-animal-voltar');
  let nome_holder = document.getElementsByClassName('animal_name');
  let artigo_holder = document.getElementsByClassName('animal_artigo');

  let name =  document.getElementById('a_name').value;
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
      next.setAttribute("onClick","javascript: changePageAnimal('Pagina2')");
      back.style.display = "none";

      // muda a barra de progresso
      stageTwo.style.background = "white";
      break;

    case "Pagina2":
      let genero_value = getAnimalGenero();      
      let especie_value = getAnimalEspecie();

      for(let i = 0; i<nome_holder.length;i++){
        nome_holder[i].innerText = name;
      }
      console.log(artigo_holder);

      for(let i = 0; i<artigo_holder.length;i++){
        if(genero_value == 'F'){
          artigo_holder[i].innerText = 'a';
        } else {
          artigo_holder[i].innerText = 'o';
        }
      }

      console.log(data_nascimento);
      if(name === "" || data_nascimento === "" || especie_value === ""){ // condicao para mudar de pagina
        alert("erro");
      } else { // mensagem de erro
        
        // muda o form que esta aparecendo
        divFirstPage.style.display = "none";
        divSecondPage.style.display = "block";

        // atualiza os botoes
        next.innerText = "Finalizar";
        next.setAttribute("onClick","javascript: changePageAnimal('Finalizar')");
        back.style.display = "block";

        // muda a barra de progresso
        stageTwo.style.background = "var(--cor_primaria)";
      }
      break;
    case "Finalizar": 
      if(bio <= 1){ // condicao para finalizar (somente com a bio preenchida pode finalizar)
        alert("erro"); 
      } else {
        let especie_value = getAnimalEspecie();
        let genero_value = getAnimalGenero();
        let isCastrado = getAnimalCastrado();
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

function saveAnimalData(data){
  console.log(data);
}

/* Definir comportamento ao clicar em outros no cadastro do animal */

let especieAnimal = document.querySelectorAll('input[name=a_especie]');
especieAnimal.forEach(element => {
  element.addEventListener("click" , () =>{
      let div = document.getElementById("outros_value");
      if(element.checked){
        if(element.value == "outros"){
          div.style.display = "inline-block"
        } else {
          div.style.display = "none"
        }
      } 
    });
  });
function mostrarErro (mensagem)
{
  console.log(mensagem);
}

/* --------------------- Definir comportamento do CADASTRO DE ANIMAL (FIM) ------------------------ */
