/*Tabela Ong*/

CREATE TABLE Ong(
    idOng SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255),
    fotoPerfil BYTEA, 
    cnpj VARCHAR(18) UNIQUE NOT NULL,
    descricao TEXT
);

/*Tabela Pessoa*/

CREATE TABLE Pessoa(
    idPessoa SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255),
    fotoPerfil BYTEA, 
    cpf VARCHAR(15) UNIQUE NOT NULL,
    dataNascimento DATE NOT NULL
);

/*Tabela Vacina*/

CREATE TABLE Vacina(
    idVacina SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

/*Tabela Animal*/

CREATE TABLE Animal(
    idAnimal SERIAL PRIMARY KEY,
    idOng INT,
    idPessoa INT,
    condicao BOOLEAN NOT NULL,
    nome VARCHAR(255),
    especie VARCHAR(50) NOT NULL,
    raca VARCHAR(100),
    genero CHAR(1) CHECK (genero IN ('M', 'F', 'U')) NOT NULL,
    dataNascimento DATE,
    historia TEXT,
    castrado BOOLEAN,
    quantidade INT,
    localEncontro VARCHAR(255),
    larTemporario BOOLEAN,
    FOREIGN KEY (idOng) REFERENCES Ong(idOng) ON DELETE CASCADE,
    FOREIGN KEY (idPessoa) REFERENCES Pessoa(idPessoa) ON DELETE CASCADE
);

/*Tabela Formulario*/

CREATE TABLE Formulario(
    idFormulario SERIAL PRIMARY KEY,
    idPessoa INT NOT NULL,
    idAnimal INT NOT NULL,
    status CHAR(1) CHECK (status IN ('A', 'R', 'E')) NOT NULL,
    disponibilidade VARCHAR(255) NOT NULL,
    visitasOng BOOLEAN NOT NULL,
    consentimento BOOLEAN NOT NULL,
    experiencia BOOLEAN NOT NULL,
    viagem VARCHAR(255) NOT NULL,
    FOREIGN KEY (idAnimal) REFERENCES Animal(idAnimal) ON DELETE CASCADE,
    FOREIGN KEY (idPessoa) REFERENCES Pessoa(idPessoa) ON DELETE CASCADE
);

/*Tabela Aplicacao Vacina*/

CREATE TABLE AplicacaoVacina(
    idVacina INT NOT NULL,
    idAnimal INT NOT NULL,
    dataAplicacao DATE NOT NULL,
    PRIMARY KEY (idVacina, idAnimal),
   	FOREIGN KEY (idVacina) REFERENCES Vacina(idVacina) ON DELETE CASCADE,
   	FOREIGN KEY (idAnimal) REFERENCES Animal(idAnimal) ON DELETE CASCADE
);

/*Tabela Telefone*/

CREATE TABLE Telefone(
    idTelefone SERIAL PRIMARY KEY,
    idOng INT,
    idPessoa INT,
    numero VARCHAR(15) NOT NULL,
  	FOREIGN KEY (idOng) REFERENCES Ong(idOng) ON DELETE CASCADE,
   	FOREIGN KEY (idPessoa) REFERENCES Pessoa(idPessoa) ON DELETE CASCADE
);

/*Tabela Logradouro*/

CREATE TABLE Logradouro(
    idLogradouro SERIAL PRIMARY KEY,
    idOng INT NOT NULL,
    rua VARCHAR(255) NOT NULL,
    numero INT NOT NULL,
    bairro VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    cep VARCHAR(9) NOT NULL,
  	FOREIGN KEY (idOng) REFERENCES Ong(idOng) ON DELETE CASCADE
);

/*Tabela Imagem Animal*/

CREATE TABLE imagemAnimal (
    idImagem SERIAL PRIMARY KEY,
    idAnimal INT NOT NULL,
    imagem BYTEA,
    FOREIGN KEY (idAnimal) REFERENCES Animal(idAnimal) ON DELETE CASCADE
);

/*Tabela Tags Pessoa*/

CREATE TABLE TagsPessoa(
    idPessoa INT NOT NULL,
    atencao INT CHECK (atencao BETWEEN 1 AND 5) NOT NULL,
    passeio INT CHECK (passeio BETWEEN 1 AND 5) NOT NULL,
    carinho INT CHECK (carinho BETWEEN 1 AND 5) NOT NULL,
  	extrovertido INT CHECK (extrovertido BETWEEN 1 AND 5) NOT NULL,
  	animacao INT CHECK (animacao BETWEEN 1 AND 5) NOT NULL,
    PRIMARY KEY (idPessoa),
   	FOREIGN KEY (idPessoa) REFERENCES Pessoa(idPessoa) ON DELETE CASCADE
);

/*Tabela Tags Animal*/

CREATE TABLE TagsAnimal(
    idAnimal INT NOT NULL,
    atencao INT CHECK (atencao BETWEEN 1 AND 5) NOT NULL,
    passeio INT CHECK (passeio BETWEEN 1 AND 5) NOT NULL,
    carinho INT CHECK (carinho BETWEEN 1 AND 5) NOT NULL,
  	extrovertido INT CHECK (extrovertido BETWEEN 1 AND 5) NOT NULL,
  	animacao INT CHECK (animacao BETWEEN 1 AND 5) NOT NULL,
    PRIMARY KEY (idAnimal),
  	FOREIGN KEY (idAnimal) REFERENCES Animal(idAnimal) ON DELETE CASCADE
);
