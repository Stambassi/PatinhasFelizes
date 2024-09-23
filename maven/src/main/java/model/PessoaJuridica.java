package model;

public class PessoaJuridica extends Pessoa
{
//Definir atributos privados
  private String cnpj;
  private String descricao;

//Definir construtores
  public PessoaJuridica ()
  {
    setCnpj("");
    setDescricao("");
  }

  public PessoaJuridica (String cnpj, String descricao)
  {
    setCnpj(cnpj);
    setDescricao(descricao);
  }

  public PessoaJuridica (int id, String nome, String email, String senha, String foto_perfil, String cnpj, String descricao)
  {
    setId(id);
    setNome(nome);
    setEmail(email);
    setSenha(senha);
    setFoto_perfil(foto_perfil);  
    setCnpj(cnpj);
    setDescricao(descricao);
  }

//Definir getters
  public String getCnpj ()
  {   return this.cnpj;    }
  public String getDescricao ()
  {   return this.descricao;    }

//Definir setters
  public void setCnpj (String cnpj)
  {   this.cnpj = cnpj;   }
  public void setDescricao (String descricao)
  {   this.descricao = descricao;   }

//Definir metodo para converter em String
  public String toString ()
  {
    return "[id: " + getId()  + ", nome: " + getNome() + ", email: " + getEmail() + ", senha: " + getSenha() + ", cnpj: " + getCnpj() + ", descricao: " + getDescricao() + "]";
  }
}