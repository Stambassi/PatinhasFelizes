
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

