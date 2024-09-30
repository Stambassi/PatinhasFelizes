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
          "status": "aceito",
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
          "id_formulario": 1,
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
          "id_formulario": 1,
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
          "id_formulario": 2,
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
          "id_formulario": 1,
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
          "id_formulario": 2,
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
          "id_formulario": 1,
          "id_pessoa": 5,
          "id_animal": 7,
          "status": "aceito",
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
          "id_formulario": 2,
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
          "id_formulario": 1,
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
          "id_formulario": 1,
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
          "id_formulario": 2,
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
      "email": "Gatofeliz@gmail.com",
      "senha": "senhaONG3",
      "telefones": ["(21) 97777-0003"],
      "foto_perfil": "url_foto_Gato_feliz.jpg",
      "cnpj": "34.567.890/0001-12",
      "descricao": "Uma ONG dedicada ao resgate e cuidado de Gatos abandonados.",
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
      "email": "caeeGato@gmail.com",
      "senha": "senhaONG6",
      "telefones": ["(31) 99999-0006", "(31) 88888-0006"],
      "foto_perfil": "url_foto_cao_e_Gato.jpg",
      "cnpj": "67.890.123/0001-45",
      "descricao": "Trabalhamos com a adoção e cuidado de cães e Gatos abandonados.",
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
      "especie": "Cachorro",
      "id_ong": 1,
      "nome": "Max",
      "raca": "Vira-Lata",
      "genero": "M",
      "data_de_nascimento": "01/01/2020",
      "descricao": "Max é um vira-lata forte e leal, que busca uma nova chance para ser o companheiro amoroso de alguém especial.",
      "historia": "Max já teve um lar, mas foi abandonado sem explicação. Por semanas, ele vagou pelas ruas," +
      "enfrentando a fome e o frio, mas nunca perdeu sua doçura. Mesmo em meio ao abandono, Max continuava a" +
      "oferecer amor, esperando que alguém o notasse. Agora resgatado, Max ainda é o mesmo cão leal e carinhoso." +
      "Ele só quer uma segunda chance de mostrar o quanto pode ser um companheiro fiel e amoroso. Ao adotar Max," +
      "você não só dá a ele um lar, mas também salva um coração que nunca desistiu.",
      "castrado": true,
      "vacina": {
        "v8": true,
        "antirrabica": false,
        "leishmaniose": false,
        "v10": true,
        "hepatite": false,
        "parvovirose": true,
        "cinomose": false,
        "adenovirose": true,
        "coronavirus": false,
        "gripe": true
      },
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
        "https://www.amigonaosecompra.com.br/unsafe/1200x0/8a6be99b-6466-4082-9258-15f9d9d7224d/a894c87c-09f5-494f-8f31-c05a29b2d866/77ce481b-1dfd-4983-b949-ad8a3d141926.jpeg?v=63894876522",
        "https://www.amigonaosecompra.com.br/unsafe/1200x0/8a6be99b-6466-4082-9258-15f9d9d7224d/a894c87c-09f5-494f-8f31-c05a29b2d866/33f42e20-e625-4f87-bae9-43014db26e1d.jpeg?v=63894876522"
      ]
    },
    {
      "id_animal": 2,
      "especie": "Gato",
      "id_ong": 2,
      "nome": "Luna",
      "raca": "Siamês",
      "genero": "F",
      "data_de_nascimento": "15/05/2019",
      "descricao": "Luna é uma gata corajosa e doce, que superou as dificuldades da vida nas ruas e agora busca um lar cheio de amor e carinho.",
      "historia": "Luna é uma gata que, desde filhote, enfrentou a vida nas ruas com coragem e determinação." +
            " Abandonada por sua antiga família, ela aprendeu a se esquivar dos perigos enquanto buscava abrigo e alimento." +
            " Apesar das dificuldades, Luna nunca perdeu sua doçura e curiosidade." +
            " Com seus olhos grandes e brilhantes, ela observa tudo ao seu redor, sempre pronta para explorar." +
            " Quando encontra um lugar seguro, ela se transforma, ronronando suavemente enquanto se aninha em um colo." +
            " Agora, Luna sonha em encontrar um lar onde possa viver tranquila e rodeada de amor." +
            " Ela é uma gata que traz alegria e calor para a vida de quem a acolher." +
            " Adotar Luna é oferecer uma segunda chance a uma alma corajosa que merece ser feliz.",
      "castrado": false,
      "vacina": {
        "v8": true,
        "antirrabica": false,
        "leishmaniose": false,
        "v10": true,
        "hepatite": false,
        "parvovirose": true,
        "cinomose": false,
        "adenovirose": true,
        "coronavirus": false,
        "gripe": true
      },
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
        "https://www.amigonaosecompra.com.br/unsafe/1176x0/ef79cc77-5089-4652-a29b-071a383872fa/faa8635a-40a5-4579-8e7f-cd0c954bd6dd/faa8635a-40a5-4579-8e7f-cd0c954bd6dd.png?v=63894056120",
        "https://www.amigonaosecompra.com.br/unsafe/1200x0/ef79cc77-5089-4652-a29b-071a383872fa/faa8635a-40a5-4579-8e7f-cd0c954bd6dd/3212968b-7166-46e1-82a5-e50c4d5166c8.png?v=63894056129"
      ]
    },
    {
      "id_animal": 3,
      "especie": "Coelho",
      "id_ong": 3,
      "nome": "Bunny",
      "raca": "Angorá",
      "genero": "M",
      "data_de_nascimento": "20/03/2021",
      "descricao": "Banny é um coelho resgatado que busca um lar amoroso, onde possa ser livre e compartilhar suas travessuras com uma nova família.",
      "historia": "Banny é um coelho que foi resgatado de um mercado de animais, onde estava prestes a ser vendido como comida." +
            " Antes de ser levado para um abrigo, ele já tinha passado por momentos difíceis, mas seu espírito brincalhão permaneceu intacto." +
            " Agora, no abrigo, ele espera ansiosamente por uma nova família que o ame e cuide dele." +
            " Com sua pelagem macia e seus olhos grandes e curiosos, Banny encanta a todos que o conhecem." +
            " Ele adora correr e brincar, explorando cada cantinho do seu espaço, sempre em busca de novas aventuras." +
            " Banny sonha em encontrar um lar onde possa ser livre, amado e ter um companheiro para compartilhar suas travessuras." +
            " Adotar Banny é dar a ele uma nova chance de viver plenamente e espalhar alegria ao redor.",
      "castrado": true,
      "vacina": {
        "v8": true,
        "antirrabica": false,
        "leishmaniose": false,
        "v10": true,
        "hepatite": false,
        "parvovirose": true,
        "cinomose": false,
        "adenovirose": true,
        "coronavirus": false,
        "gripe": true
      },
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
        "https://i.pinimg.com/736x/8f/6d/94/8f6d94c919d5920b08bc974fbd3b5d81.jpg"
      ]
    },
    {
      "id_animal": 4,
      "especie": "Cachorro",
      "id_ong": 1,
      "nome": "Theo",
      "raca": "Vira-Lata",
      "genero": "M",
      "data_de_nascimento": "10/10/2018",
      "descricao": "Theo é um cachorro amoroso e gentil, que busca uma nova família para compartilhar sua alegria e lealdade.",
      "historia": "Theo é um cachorro que foi encontrado perambulando pelas ruas, abandonado e sozinho." +
            " Apesar das dificuldades que enfrentou, ele sempre manteve sua natureza gentil e amorosa." +
            " Com seu olhar esperançoso, Theo seguia as pessoas, ansiando por carinho e atenção." +
            " Um dia, ele foi resgatado por um grupo de voluntários que imediatamente perceberam o quanto ele era especial." +
            " Agora, no abrigo, Theo aguarda ansiosamente por uma nova família que possa lhe oferecer um lar." +
            " Ele adora passear, brincar e se aninhar ao lado de quem ama, sempre pronto para dar e receber afeto." +
            " Adotar Theo é não apenas dar a ele um lar, mas também receber um amigo leal e amoroso para a vida toda.",
      "castrado": true,
      "vacina": {
        "v8": true,
        "antirrabica": false,
        "leishmaniose": false,
        "v10": true,
        "hepatite": false,
        "parvovirose": true,
        "cinomose": false,
        "adenovirose": true,
        "coronavirus": false,
        "gripe": true
      },
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
        "https://www.amigonaosecompra.com.br/unsafe/1200x0/86f45627-25db-49a8-8119-7bd68511e3f3/9356f580-0464-44af-91a6-a09fdf8e81f0/f8fa0680-ac92-44d1-91fc-e8cecfc40a81.jpg?v=63894767639",
        "https://www.amigonaosecompra.com.br/unsafe/1200x0/86f45627-25db-49a8-8119-7bd68511e3f3/9356f580-0464-44af-91a6-a09fdf8e81f0/59e8d0e3-9dc5-4d67-8e5a-2f36ebc124ea.jpg?v=63894767640",
        "https://www.amigonaosecompra.com.br/unsafe/1200x0/86f45627-25db-49a8-8119-7bd68511e3f3/9356f580-0464-44af-91a6-a09fdf8e81f0/fde61b74-74f9-42f0-be84-5aef398350a0.jpg?v=63894767639"
      ]
    },
    {
      "id_animal": 5,
      "especie": "Gato",
      "id_ong": 2,
      "nome": "Miau",
      "raca": "Persa",
      "genero": "F",
      "data_de_nascimento": "12/07/2020",
      "descricao": "Miau é uma gata curiosa e brincalhona que busca um lar amoroso onde possa ser mimada e se sentir segura.",
      "historia": "Miau é uma gata que foi encontrada abandonada em um beco, lutando para sobreviver." +
            " Apesar das dificuldades, sua personalidade curiosa e brincalhona sempre se destacou." +
            " Com seus olhos grandes e expressivos, Miau observa o mundo ao seu redor com um misto de curiosidade e esperança." +
            " Resgatada por um abrigo, ela agora aguarda ansiosamente por uma nova família que a acolha." +
            " Miau adora se aninhar em lugares quentinhos e brincar com qualquer coisa que se mova." +
            " Ela traz alegria e diversão, pronta para ser uma companheira fiel." +
            " Adotar Miau é dar a ela a chance de viver em um lar amoroso, onde poderá mostrar todo o seu carinho.",
      "castrado": false,
      "vacina": {
        "v8": true,
        "antirrabica": false,
        "leishmaniose": false,
        "v10": true,
        "hepatite": false,
        "parvovirose": true,
        "cinomose": false,
        "adenovirose": true,
        "coronavirus": false,
        "gripe": true
      },
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
        "https://www.amigonaosecompra.com.br/unsafe/1176x0/0cfe2f0b-aa3d-45fe-9664-383f3a3174f0/2675b1d3-4f59-452f-9b6e-35ff981e3097/2675b1d3-4f59-452f-9b6e-35ff981e3097.jpg?v=63894239235"
      ]
    },
    {
      "id_animal": 6,
      "especie": "Coelho",
      "id_ong": 3,
      "nome": "Flopsy",
      "raca": "Mini Lop",
      "genero": "F",
      "data_de_nascimento": "05/11/2021",
      "descricao": "Flopsy é uma coelha adorável e brincalhona, que busca um lar amoroso onde possa explorar e receber todo o carinho que merece.",
      "historia": "Flopsy é uma coelha que foi resgatada de um pet shop, onde estava em condições inadequadas." +
            " Apesar de seu passado difícil, ela sempre foi cheia de vida e adorável." +
            " Com seus grandes olhos brilhantes, Flopsy encanta a todos ao seu redor com seu jeito brincalhão." +
            " Agora, em um abrigo, ela sonha em encontrar um lar onde possa correr livre e ser amada." +
            " Flopsy adora explorar, saltar e brincar com qualquer brinquedo que encontrar." +
            " Ela é uma coelha que traz alegria e fofura para a vida de quem a acolher." +
            " Adotar Flopsy é oferecer a ela uma nova chance de viver feliz e cheia de amor.",
      "castrado": true,
      "vacina": {
        "v8": true,
        "antirrabica": false,
        "leishmaniose": false,
        "v10": true,
        "hepatite": false,
        "parvovirose": true,
        "cinomose": false,
        "adenovirose": true,
        "coronavirus": false,
        "gripe": true
      },
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
        "https://upload.wikimedia.org/wikipedia/commons/c/c6/Domestic_mini_lop_rabbit.jpg"
      ]
    },
    {
      "id_animal": 7,
      "especie": "Cachorro",
      "id_ong": 1,
      "nome": "Bella",
      "raca": "Poodle",
      "genero": "F",
      "data_de_nascimento": "22/09/2019",
      "descricao": "Bella é uma cadela amorosa e cheia de energia, que busca um lar acolhedor onde possa ser feliz e fazer novos amigos.",
      "historia": "Bella é uma cadela que foi resgatada das ruas, onde viveu sozinha e enfrentou muitos desafios." +
            " Mesmo após tudo o que passou, ela mantém um coração gentil e amoroso." +
            " Bella adora se aproximar das pessoas, abanando o rabo e pedindo carinho com seus olhos brilhantes." +
            " No abrigo, ela aguarda ansiosamente por uma nova família que a acolha e a ame." +
            " Bella é cheia de energia, adora passear e brincar, sempre pronta para se divertir." +
            " Ela traz alegria e calor para qualquer lar, sendo uma companheira leal e carinhosa." +
            " Adotar Bella é dar a ela a chance de ter um lar cheio de amor e aventura.",
      "castrado": true,
      "vacina": {
        "v8": true,
        "antirrabica": false,
        "leishmaniose": false,
        "v10": true,
        "hepatite": false,
        "parvovirose": true,
        "cinomose": false,
        "adenovirose": true,
        "coronavirus": false,
        "gripe": true
      },
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
        "https://www.amigonaosecompra.com.br/unsafe/1176x0/9d1dfcf1-f0fd-454a-a427-2aa472d6fdb4/d6701f89-59b7-4e91-9521-950b6a4ef864/d6701f89-59b7-4e91-9521-950b6a4ef864.jpg?v=63894859636",
        "https://www.amigonaosecompra.com.br/unsafe/1200x0/9d1dfcf1-f0fd-454a-a427-2aa472d6fdb4/d6701f89-59b7-4e91-9521-950b6a4ef864/2d89fefc-944b-41c5-9240-37c79c0b43ab.jpg?v=63894859682",
        "https://www.amigonaosecompra.com.br/unsafe/1200x0/9d1dfcf1-f0fd-454a-a427-2aa472d6fdb4/d6701f89-59b7-4e91-9521-950b6a4ef864/9c38554c-1040-440b-9b2d-0ed1fdcf6a08.jpg?v=63894859681"
      ]
    },
    {
      "id_animal": 8,
      "especie": "Gato",
      "id_ong": 2,
      "nome": "Oliver",
      "raca": "Maine Coon",
      "genero": "M",
      "data_de_nascimento": "30/06/2018",
      "descricao": "Oliver é um gato curioso e gentil, que busca um lar amoroso onde possa explorar e receber carinho.",
      "historia": "Oliver é um gato que foi resgatado de uma colônia de gatos, onde vivia em condições difíceis." +
            " Apesar de seu passado, ele é gentil e cheio de personalidade." +
            " Com seu pelo macio e olhos curiosos, Oliver adora explorar cada canto ao seu redor." +
            " Ele é um verdadeiro aventureiro, sempre em busca de novas descobertas." +
            " Agora, no abrigo, Oliver espera ansiosamente por uma nova família que o aceite." +
            " Ele é um gato que aprecia momentos de carinho, ronronando feliz ao ser acariciado." +
            " Adotar Oliver é dar a ele a chance de encontrar um lar onde possa ser amado e se sentir seguro.",
      "castrado": true,
      "vacina": {
        "v8": true,
        "antirrabica": false,
        "leishmaniose": false,
        "v10": true,
        "hepatite": false,
        "parvovirose": true,
        "cinomose": false,
        "adenovirose": true,
        "coronavirus": false,
        "gripe": true
      },
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
        "https://www.amigonaosecompra.com.br/unsafe/1200x0/4165d04d-491f-4e65-bb7e-73204a68768d/9a5211c0-f874-495e-8fd6-a836f7c7f187/0856690e-e504-41a8-91cd-780a5503d9c3.jpeg?v=63894567436",
        "https://www.amigonaosecompra.com.br/unsafe/1200x0/4165d04d-491f-4e65-bb7e-73204a68768d/9a5211c0-f874-495e-8fd6-a836f7c7f187/caf19380-2435-48e3-84b7-4b27ec735b65.jpeg?v=63894567436"
      ]
    },
    {
      "id_animal": 9,
      "especie": "Coelho",
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
      "especie": "Cachorro",
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