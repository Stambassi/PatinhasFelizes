/* --------------------- Definir funcoes gerais CADASTRO (INICIO) ------------------------ */

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

/* --------------------- Definir funcoes gerais CADASTRO (FIM) ------------------------ */

/* --------------------- Definir comportamento do CADASTRO DE ANIMAL (INICIO) ------------------------ */


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
