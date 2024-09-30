function gerarPessoasFalsas ()
{
  let pessoas = [
    {
      "id_usuario": 1,
      "nome": "Ana Lima",
      "email": "ana.lima@gmail.com",
      "senha": "senha123",
      "cpf": "111.222.333-44",
      "data_de_nascimento": "1990-01-01",
      "telefone": "(31) 99999-9999",
      "tags": {
        "atencao": 3,
        "passeio": 4,
        "carinho": 5,
        "extrovertido": 2,
        "animacao": 1
      },
      "form_adocao": [
        {
          "id_formulario": 1,
          "id_pessoa": 1,
          "id_animal": 1,
          "status": "pendente",
          "data": "15/09/2024",
          "moradia": "Casa",
          "experiencia": true,
          "viagem": "Ninguém",
          "disponibilidade": "3 horas ou mais",
          "visitas_ong": true,
          "consentimento": true,
          "comentarios": "Estou pronta para dar um lar."
        }
      ],
      "form_abandonado": [
        {
          "id_form": 1,
          "id_pessoa": 1,
          "data": "15/09/2024",
          "especie": "Cachorro",
          "quantidade": 1,
          "condicao": "Abandonado em um lote",
          "endereco": {
            "rua": "Rua da Esperança",
            "numero": 200,
            "bairro": "Centro",
            "cidade": "Belo Horizonte",
            "estado": "MG"
          },
          "lar_temporario": "Sim, por 2 dias",
          "imagem": "",
          "status": "pendente",
          "id_ong": 1
        }
      ]
    },
    {
      "id_usuario": 2,
      "nome": "Bianca Martins",
      "email": "bianca.martins@gmail.com",
      "senha": "senha456",
      "cpf": "111.222.333-55",
      "data_de_nascimento": "1995-05-15",
      "telefone": "(31) 98888-8888",
      "tags": {
        "atencao": 4,
        "passeio": 5,
        "carinho": 2,
        "extrovertido": 3,
        "animacao": 5
      },
      "form_adocao": [
        {
          "id_formulario": 2,
          "id_pessoa": 2,
          "id_animal": 2,
          "status": "recusado",
          "data": "16/09/2024",
          "moradia": "Apartamento",
          "experiencia": true,
          "viagem": "Familiares",
          "disponibilidade": "2 horas ou mais",
          "visitas_ong": true,
          "consentimento": true,
          "comentarios": "Estou pensando melhor."
        }
      ],
      "form_abandonado": []
    },
    {
      "id_usuario": 3,
      "nome": "Felipe Souza",
      "email": "felipe.souza@gmail.com",
      "senha": "senha789",
      "cpf": "333.444.555-66",
      "data_de_nascimento": "1988-07-20",
      "telefone": "(31) 97777-7777",
      "tags": {
        "atencao": 5,
        "passeio": 1,
        "carinho": 3,
        "extrovertido": 4,
        "animacao": 2
      },
      "form_adocao": [
        {
          "id_formulario": 3,
          "id_pessoa": 3,
          "id_animal": 3,
          "status": "pendente",
          "data": "20/09/2024",
          "moradia": "Casa",
          "experiencia": true,
          "viagem": "Amigos",
          "disponibilidade": "4 horas ou mais",
          "visitas_ong": true,
          "consentimento": true,
          "comentarios": "Estou pronto para adotar."
        },
        {
          "id_formulario": 4,
          "id_pessoa": 3,
          "id_animal": 4,
          "status": "aceito",
          "data": "21/09/2024",
          "moradia": "Casa",
          "experiencia": false,
          "viagem": "Ninguém",
          "disponibilidade": "1 hora ou mais",
          "visitas_ong": true,
          "consentimento": true,
          "comentarios": "Preciso de um amigo."
        }
      ],
      "form_abandonado": []
    },
    {
      "id_usuario": 4,
      "nome": "Isabela Rocha",
      "email": "isabela.rocha@hotmail.com",
      "senha": "senha001",
      "cpf": "444.555.666-77",
      "data_de_nascimento": "1992-10-30",
      "telefone": "(31) 96666-6666",
      "tags": {
        "atencao": 1,
        "passeio": 3,
        "carinho": 4,
        "extrovertido": 5,
        "animacao": 2
      },
      "form_adocao": [
        {
          "id_formulario": 5,
          "id_pessoa": 4,
          "id_animal": 5,
          "status": "pendente",
          "data": "22/09/2024",
          "moradia": "Casa",
          "experiencia": true,
          "viagem": "Ninguém",
          "disponibilidade": "2 horas ou mais",
          "visitas_ong": true,
          "consentimento": true,
          "comentarios": "Adoção é um sonho."
        },
        {
          "id_formulario": 6,
          "id_pessoa": 4,
          "id_animal": 6,
          "status": "recusado",
          "data": "23/09/2024",
          "moradia": "Apartamento",
          "experiencia": false,
          "viagem": "Familiares",
          "disponibilidade": "1 hora ou mais",
          "visitas_ong": true,
          "consentimento": true,
          "comentarios": "Ainda não é a hora."
        }
      ],
      "form_abandonado": []
    },
    {
      "id_usuario": 5,
      "nome": "Gustavo Martins",
      "email": "gustavo.martins@gmail.com",
      "senha": "senha909",
      "cpf": "222.333.444-55",
      "data_de_nascimento": "1990-12-25",
      "telefone": "(31) 98765-4321",
      "tags": {
        "atencao": 1,
        "passeio": 2,
        "carinho": 3,
        "extrovertido": 5,
        "animacao": 4
      },
      "form_adocao": [
        {
          "id_formulario": 7,
          "id_pessoa": 5,
          "id_animal": 7,
          "status": "pendente",
          "data": "01/12/2024",
          "moradia": "Casa",
          "experiencia": true,
          "viagem": "Ninguém",
          "disponibilidade": "4 horas ou mais",
          "visitas_ong": true,
          "consentimento": true,
          "comentarios": "Adotar é um sonho."
        },
        {
          "id_formulario": 8,
          "id_pessoa": 5,
          "id_animal": 8,
          "status": "pendente",
          "data": "02/12/2024",
          "moradia": "Apartamento",
          "experiencia": false,
          "viagem": "Familiares",
          "disponibilidade": "1 hora ou mais",
          "visitas_ong": false,
          "consentimento": true,
          "comentarios": "Quero um companheiro."
        }
      ],
      "form_abandonado": []
    },
    {
      "id_usuario": 6,
      "nome": "Natália Lima",
      "email": "natalia.lima@hotmail.com",
      "senha": "senha111",
      "cpf": "333.444.555-66",
      "data_de_nascimento": "1994-03-09",
      "telefone": "(41) 98765-4321",
      "tags": {
        "atencao": 2,
        "passeio": 5,
        "carinho": 3,
        "extrovertido": 4,
        "animacao": 1
      },
      "form_adocao": [],
      "form_abandonado": [
        {
          "id_form": 2,
          "id_pessoa": 6,
          "data": "10/09/2024",
          "especie": "Gato",
          "quantidade": 1,
          "condicao": "Abandonado em um parque",
          "endereco": {
            "rua": "Avenida das Flores",
            "numero": 100,
            "bairro": "Jardim",
            "cidade": "Curitiba",
            "estado": "PR"
          },
          "lar_temporario": "Sim, por 1 semana",
          "imagem": "",
          "status": "pendente",
          "id_ong": 2
        }
      ]
    },
    {
      "id_usuario": 7,
      "nome": "Luana Alves",
      "email": "luana.alves@gmail.com",
      "senha": "senha222",
      "cpf": "444.555.666-77",
      "data_de_nascimento": "1986-08-14",
      "telefone": "(31) 97777-8888",
      "tags": {
        "atencao": 5,
        "passeio": 2,
        "carinho": 4,
        "extrovertido": 3,
        "animacao": 2
      },
      "form_adocao": [
        {
          "id_formulario": 9,
          "id_pessoa": 7,
          "id_animal": 9,
          "status": "recusado",
          "data": "03/12/2024",
          "moradia": "Casa",
          "experiencia": true,
          "viagem": "Familiares",
          "disponibilidade": "2 horas ou mais",
          "visitas_ong": true,
          "consentimento": true,
          "comentarios": "Não posso agora."
        }
      ],
      "form_abandonado": [
        {
          "id_form": 3,
          "id_pessoa": 7,
          "data": "12/09/2024",
          "especie": "Coelho",
          "quantidade": 1,
          "condicao": "Abandonado em um bairro",
          "endereco": {
            "rua": "Rua dos Coelhos",
            "numero": 50,
            "bairro": "Alvorada",
            "cidade": "São Paulo",
            "estado": "SP"
          },
          "lar_temporario": "Não",
          "imagem": "",
          "status": "pendente",
          "id_ong": 3
        }
      ]
    },
    {
      "id_usuario": 8,
      "nome": "Sofia Ferreira",
      "email": "sofia.ferreira@hotmail.com",
      "senha": "senha444",
      "cpf": "555.666.777-88",
      "data_de_nascimento": "1992-02-20",
      "telefone": "(31) 99666-5555",
      "tags": {
        "atencao": 3,
        "passeio": 1,
        "carinho": 5,
        "extrovertido": 4,
        "animacao": 1
      },
      "form_adocao": [
        {
          "id_formulario": 10,
          "id_pessoa": 8,
          "id_animal": 10,
          "status": "pendente",
          "data": "04/12/2024",
          "moradia": "Apartamento",
          "experiencia": true,
          "viagem": "Ninguém",
          "disponibilidade": "1 hora ou mais",
          "visitas_ong": false,
          "consentimento": true,
          "comentarios": "Estou interessada."
        },
        {
          "id_formulario": 11,
          "id_pessoa": 8,
          "id_animal": 11,
          "status": "aceito",
          "data": "05/12/2024",
          "moradia": "Apartamento",
          "experiencia": true,
          "viagem": "Familiares",
          "disponibilidade": "3 horas ou mais",
          "visitas_ong": true,
          "consentimento": true,
          "comentarios": "Um novo amigo seria ótimo."
        }
      ],
      "form_abandonado": [
        {
          "id_form": 4,
          "id_pessoa": 8,
          "data": "14/09/2024",
          "especie": "Gato",
          "quantidade": 2,
          "condicao": "Abandonado em uma caixa",
          "endereco": {
            "rua": "Rua do Gato",
            "numero": 10,
            "bairro": "Centro",
            "cidade": "Belo Horizonte",
            "estado": "MG"
          },
          "lar_temporario": "Sim, por 3 dias",
          "imagem": "",
          "status": "pendente",
          "id_ong": 4
        }
      ]
    },
    {
      "id_usuario": 9,
      "nome": "Mariana Pereira",
      "email": "mariana.pereira@hotmail.com",
      "senha": "senha333",
      "cpf": "666.777.888-99",
      "data_de_nascimento": "1988-05-30",
      "telefone": "(31) 91234-5678",
      "tags": {
        "atencao": 5,
        "passeio": 2,
        "carinho": 4,
        "extrovertido": 3,
        "animacao": 2
      },
      "form_adocao": [],
      "form_abandonado": []
    },
    {
      "id_usuario": 10,
      "nome": "Ricardo Nascimento",
      "email": "ricardo.nascimento@gmail.com",
      "senha": "senha444",
      "cpf": "777.888.999-00",
      "data_de_nascimento": "1985-03-20",
      "telefone": "(41) 99876-5432",
      "tags": {
        "atencao": 3,
        "passeio": 1,
        "carinho": 5,
        "extrovertido": 4,
        "animacao": 1
      },
      "form_adocao": [],
      "form_abandonado": []
    }
  ]
  ;  
  return pessoas;
}

function gerarOngsFalsas ()
{
  let ongs = [
    {
      "id_ong": 1,
      "nome": "Ação Animal",
      "email": "acao.animal@gmail.com",
      "senha": "senhaONG1",
      "telefones": ["(31) 99999-0001", "(31) 88888-0001"],
      "foto_perfil": "url_foto_acao_animal.jpg",
      "cnpj": "12.345.678/0001-90",
      "descricao": "A ONG Ação Animal é dedicada ao resgate e acolhimento de animais em situação de risco.",
      "endereco": [
        {
          "rua": "Rua da Esperança",
          "numero": 123,
          "bairro": "Centro",
          "cidade": "Belo Horizonte",
          "estado": "MG",
          "cep": "30123-000"
        }
      ]
    },
    {
      "id_ong": 2,
      "nome": "Cão Amor",
      "email": "caoamor@hotmail.com",
      "senha": "senhaONG2",
      "telefones": ["(31) 99999-0002"],
      "foto_perfil": "url_foto_cao_amor.jpg",
      "cnpj": "23.456.789/0001-01",
      "descricao": "Promovemos a adoção responsável de cães e realizamos campanhas de conscientização.",
      "endereco": [
        {
          "rua": "Avenida dos Animais",
          "numero": 45,
          "bairro": "Jardim América",
          "cidade": "Rio de Janeiro",
          "estado": "RJ",
          "cep": "22222-222"
        }
      ]
    },
    {
      "id_ong": 3,
      "nome": "Gato Feliz",
      "email": "gatofeliz@gmail.com",
      "senha": "senhaONG3",
      "telefones": ["(21) 97777-0003"],
      "foto_perfil": "url_foto_gato_feliz.jpg",
      "cnpj": "34.567.890/0001-12",
      "descricao": "Uma ONG dedicada ao resgate e cuidado de gatos abandonados.",
      "endereco": [
        {
          "rua": "Rua dos Felinos",
          "numero": 78,
          "bairro": "Floresta",
          "cidade": "São Paulo",
          "estado": "SP",
          "cep": "12345-678"
        }
      ]
    },
    {
      "id_ong": 4,
      "nome": "Amigos do Bicho",
      "email": "amigosdobicho@gmail.com",
      "senha": "senhaONG4",
      "telefones": ["(31) 99999-0004", "(31) 88888-0004"],
      "foto_perfil": "url_foto_amigos_do_bicho.jpg",
      "cnpj": "45.678.901/0001-23",
      "descricao": "Apoio ao bem-estar de todos os tipos de animais em nossa comunidade.",
      "endereco": [
        {
          "rua": "Rua da Amizade",
          "numero": 56,
          "bairro": "São Pedro",
          "cidade": "Belo Horizonte",
          "estado": "MG",
          "cep": "30330-000"
        }
      ]
    },
    {
      "id_ong": 5,
      "nome": "Pata Amiga",
      "email": "pataamiga@gmail.com",
      "senha": "senhaONG5",
      "telefones": ["(41) 99999-0005"],
      "foto_perfil": "url_foto_pata_amiga.jpg",
      "cnpj": "56.789.012/0001-34",
      "descricao": "Resgatamos animais em situação de rua e os ajudamos a encontrar novos lares.",
      "endereco": [
        {
          "rua": "Avenida das Patas",
          "numero": 89,
          "bairro": "Centro",
          "cidade": "Curitiba",
          "estado": "PR",
          "cep": "80000-000"
        }
      ]
    },
    {
      "id_ong": 6,
      "nome": "Cão e Gato",
      "email": "caeegato@gmail.com",
      "senha": "senhaONG6",
      "telefones": ["(31) 99999-0006", "(31) 88888-0006"],
      "foto_perfil": "url_foto_cao_e_gato.jpg",
      "cnpj": "67.890.123/0001-45",
      "descricao": "Trabalhamos com a adoção e cuidado de cães e gatos abandonados.",
      "endereco": [
        {
          "rua": "Rua dos Animais",
          "numero": 34,
          "bairro": "São Jorge",
          "cidade": "Belo Horizonte",
          "estado": "MG",
          "cep": "30130-000"
        }
      ]
    },
    {
      "id_ong": 7,
      "nome": "Projeto Patinhas",
      "email": "projetopatinha@gmail.com",
      "senha": "senhaONG7",
      "telefones": ["(11) 98888-0007"],
      "foto_perfil": "url_foto_projeto_patinhas.jpg",
      "cnpj": "78.901.234/0001-56",
      "descricao": "Nosso foco é a proteção e resgate de animais em situação de vulnerabilidade.",
      "endereco": [
        {
          "rua": "Rua das Patinhas",
          "numero": 11,
          "bairro": "Bela Vista",
          "cidade": "São Paulo",
          "estado": "SP",
          "cep": "01311-000"
        }
      ]
    },
    {
      "id_ong": 8,
      "nome": "Vida Animal",
      "email": "vida.animal@gmail.com",
      "senha": "senhaONG8",
      "telefones": ["(31) 99999-0008"],
      "foto_perfil": "url_foto_vida_animal.jpg",
      "cnpj": "89.012.345/0001-67",
      "descricao": "Defendemos os direitos dos animais e promovemos adoções conscientes.",
      "endereco": [
        {
          "rua": "Avenida das Flores",
          "numero": 22,
          "bairro": "Parque das Laranjeiras",
          "cidade": "Belo Horizonte",
          "estado": "MG",
          "cep": "30160-000"
        }
      ]
    },
    {
      "id_ong": 9,
      "nome": "Anjos do Lar",
      "email": "anjosdolar@gmail.com",
      "senha": "senhaONG9",
      "telefones": ["(31) 99999-0010"],
      "foto_perfil": "url_foto_anjos_do_lar.jpg",
      "cnpj": "90.123.456/0001-78",
      "descricao": "Resgatar, cuidar e adotar, essa é a nossa missão.",
      "endereco": [
        {
          "rua": "Rua dos Anjos",
          "numero": 15,
          "bairro": "Bela Vista",
          "cidade": "Belo Horizonte",
          "estado": "MG",
          "cep": "30130-001"
        }
      ]
    },
    {
      "id_ong": 10,
      "nome": "Abrigo Animal",
      "email": "abrigoonline@gmail.com",
      "senha": "senhaONG10",
      "telefones": ["(31) 99999-0010"],
      "foto_perfil": "url_foto_abrigoonline.jpg",
      "cnpj": "01.234.567/0001-89",
      "descricao": "Oferecemos abrigo e carinho para animais que precisam de um lar.",
      "endereco": [
        {
          "rua": "Rua do Abrigo",
          "numero": 8,
          "bairro": "Centro",
          "cidade": "Belo Horizonte",
          "estado": "MG",
          "cep": "30130-002"
        }
      ]
    }
  ]
  ;
  return ongs;
}

function gerarAnimaisFalsos ()
{
  let animais = [
    {
      "id_animal": 1,
      "especie": "cachorro",
      "id_ong": 1,
      "nome": "Max",
      "raca": "Labrador",
      "genero": "M",
      "data_de_nascimento": "01/01/2020",
      "historia": "Resgatado de uma rua movimentada, agora espera um lar amoroso.",
      "castrado": true,
      "tags": {
        "atencao": 4,
        "passeio": 5,
        "carinho": 5,
        "extrovertido": 3,
        "animacao": 4
      },
      "condicao": false,
      "id_pessoa": null,
      "quantidade": null,
      "local_de_encontro": null,
      "lar_temporario": null,
      "estado": null,
      "imagem": [
        ""
      ]
    },
    {
      "id_animal": 2,
      "especie": "gato",
      "id_ong": 2,
      "nome": "Luna",
      "raca": "Siamês",
      "genero": "F",
      "data_de_nascimento": "15/05/2019",
      "historia": "Abandonada em uma caixa de papelão, está procurando um novo lar.",
      "castrado": false,
      "tags": {
        "atencao": 5,
        "passeio": 2,
        "carinho": 4,
        "extrovertido": 3,
        "animacao": 2
      },
      "condicao": false,
      "id_pessoa": null,
      "quantidade": null,
      "local_de_encontro": null,
      "lar_temporario": null,
      "estado": null,
      "imagem": [
        ""
      ]
    },
    {
      "id_animal": 3,
      "especie": "coelho",
      "id_ong": 3,
      "nome": "Bunny",
      "raca": "Angorá",
      "genero": "M",
      "data_de_nascimento": "20/03/2021",
      "historia": "Foi resgatado de um parque onde estava perdido.",
      "castrado": true,
      "tags": {
        "atencao": 3,
        "passeio": 1,
        "carinho": 5,
        "extrovertido": 2,
        "animacao": 4
      },
      "condicao": false,
      "id_pessoa": null,
      "quantidade": null,
      "local_de_encontro": null,
      "lar_temporario": null,
      "estado": null,
      "imagem": [
        ""
      ]
    },
    {
      "id_animal": 4,
      "especie": "cachorro",
      "id_ong": 1,
      "nome": "Rex",
      "raca": "Bulldog",
      "genero": "M",
      "data_de_nascimento": "10/10/2018",
      "historia": "Foi encontrado vagando nas ruas, muito sociável.",
      "castrado": true,
      "tags": {
        "atencao": 2,
        "passeio": 4,
        "carinho": 5,
        "extrovertido": 4,
        "animacao": 3
      },
      "condicao": false,
      "id_pessoa": null,
      "quantidade": null,
      "local_de_encontro": null,
      "lar_temporario": null,
      "estado": null,
      "imagem": [
        ""
      ]
    },
    {
      "id_animal": 5,
      "especie": "gato",
      "id_ong": 2,
      "nome": "Miau",
      "raca": "Persa",
      "genero": "F",
      "data_de_nascimento": "12/07/2020",
      "historia": "Foi resgatada de um canteiro de obras.",
      "castrado": false,
      "tags": {
        "atencao": 5,
        "passeio": 1,
        "carinho": 4,
        "extrovertido": 3,
        "animacao": 2
      },
      "condicao": false,
      "id_pessoa": null,
      "quantidade": null,
      "local_de_encontro": null,
      "lar_temporario": null,
      "estado": null,
      "imagem": [
        ""
      ]
    },
    {
      "id_animal": 6,
      "especie": "coelho",
      "id_ong": 3,
      "nome": "Flopsy",
      "raca": "Mini Lop",
      "genero": "F",
      "data_de_nascimento": "05/11/2021",
      "historia": "Foi encontrado em um parque, muito dócil.",
      "castrado": true,
      "tags": {
        "atencao": 3,
        "passeio": 2,
        "carinho": 5,
        "extrovertido": 4,
        "animacao": 3
      },
      "condicao": false,
      "id_pessoa": null,
      "quantidade": null,
      "local_de_encontro": null,
      "lar_temporario": null,
      "estado": null,
      "imagem": [
        ""
      ]
    },
    {
      "id_animal": 7,
      "especie": "cachorro",
      "id_ong": 1,
      "nome": "Bella",
      "raca": "Poodle",
      "genero": "F",
      "data_de_nascimento": "22/09/2019",
      "historia": "Abandonada por sua antiga família, procura um novo lar.",
      "castrado": true,
      "tags": {
        "atencao": 4,
        "passeio": 5,
        "carinho": 5,
        "extrovertido": 4,
        "animacao": 2
      },
      "condicao": false,
      "id_pessoa": null,
      "quantidade": null,
      "local_de_encontro": null,
      "lar_temporario": null,
      "estado": null,
      "imagem": [
        ""
      ]
    },
    {
      "id_animal": 8,
      "especie": "gato",
      "id_ong": 2,
      "nome": "Oliver",
      "raca": "Maine Coon",
      "genero": "M",
      "data_de_nascimento": "30/06/2018",
      "historia": "Foi resgatado de um abrigo lotado.",
      "castrado": true,
      "tags": {
        "atencao": 3,
        "passeio": 1,
        "carinho": 5,
        "extrovertido": 4,
        "animacao": 3
      },
      "condicao": false,
      "id_pessoa": null,
      "quantidade": null,
      "local_de_encontro": null,
      "lar_temporario": null,
      "estado": null,
      "imagem": [
        ""
      ]
    },
    {
      "id_animal": 9,
      "especie": "coelho",
      "id_ong": 3,
      "nome": null,
      "raca": null,
      "genero": null,
      "data_de_nascimento": null,
      "historia": null,
      "castrado": false,
      "tags": null,
      "condicao": true,
      "id_pessoa": 1,
      "quantidade": 2,
      "local_de_encontro": "Parque Municipal",
      "lar_temporario": "Nenhum",
      "estado": "Desnutrido",
      "imagem": [
        ""
      ]
    },
    {
      "id_animal": 10,
      "especie": "cachorro",
      "id_ong": 1,
      "nome": null,
      "raca": null,
      "genero": null,
      "data_de_nascimento": null,
      "historia": null,
      "castrado": false,
      "tags": null,
      "condicao": true,
      "id_pessoa": 2,
      "quantidade": 1,
      "local_de_encontro": "Praça da Liberdade",
      "lar_temporario": "Por 1 semana",
      "estado": "Machucado",
      "imagem": [
        ""
      ]
    }
  ]
  ;
  return animais;
}