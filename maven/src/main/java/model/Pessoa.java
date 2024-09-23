package model;

public class Pessoa 
{
//Definir atributos privados
  private int id;
  private String nome;
  private String email;
  private String senha;
  private String foto_perfil;

//Definir construtores
  public Pessoa ()
  {
    setId(0);
    setNome("");
    setEmail("");
    setSenha("");
    setFoto_perfil("");
  }

  public Pessoa (int id, String nome, String email, String senha, String foto_perfil)
  {
    setId(id);
    setNome(nome);
    setEmail(email);
    setSenha(senha);
    setFoto_perfil(foto_perfil);    
  }

//Definir getters
  public int getId()
  {   return this.id;  }
  public String getNome()
  {   return this.nome;  }
  public String getEmail()
  {   return this.email;  }
  public String getSenha()
  {   return this.senha;  }
  public String getFoto_perfil()
  {   return this.foto_perfil;  }

//Definir setters
  public void setId( int id )
  {   this.id = id;   }
  public void setNome( String nome )
  {   this.nome = nome;   }
  public void setEmail( String email )
  {   this.email = email;   }
  public void setSenha( String senha )
  {   this.senha = senha;   }
  public void setFoto_perfil( String foto_perfil )
  {   this.foto_perfil = foto_perfil;   }
}