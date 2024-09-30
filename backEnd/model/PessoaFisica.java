package model;

public class PessoaFisica extends Pessoa
{
//Definir atributos privados
  private String cpf;
  private String data_de_nascimento;

//Definir construtores
  public PessoaFisica ()
  {
    setCpf("");
    setData_de_nascimento("");
  }

  public PessoaFisica (String cpf, String data_de_nascimento)
  {
    setCpf(cpf);
    setData_de_nascimento(data_de_nascimento);
  }

  public PessoaFisica (int id, String nome, String email, String senha, String foto_perfil, String cpf, String data_de_nascimento)
  {
    setId(id);
    setNome(nome);
    setEmail(email);
    setSenha(senha);
    setFoto_perfil(foto_perfil);
    setCpf(cpf);
    setData_de_nascimento(data_de_nascimento);      
  }

//Definir getters
  public String getCpf()
  {   return this.cpf;    }
  public String getData_de_nascimento()
  {   return this.data_de_nascimento;    }

//Definir setters
  public void setCpf (String cpf)
  {   this.cpf = cpf;   }
  public void setData_de_nascimento (String data_de_nascimento)
  {   this.data_de_nascimento = data_de_nascimento;   }

//Definir metodo para converter em String
  public String toString ()
  {
    return "[id: " + getId()  + ", nome: " + getNome() + ", email: " + getEmail() + ", senha: " + getSenha() + ", cpf: " + getCpf() + ", data_de_nascimento: " + getData_de_nascimento() + "]";
  }
}