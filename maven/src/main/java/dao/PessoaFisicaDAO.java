package dao;

import model.PessoaFisica;

import java.sql.*;

//import java.util.List;
//
//import java.util.ArrayList;


public class PessoaFisicaDAO extends DAO {
//Construtores	
	public PessoaFisicaDAO()
	{
		super();
		conectar();
	}
	
//Metodo para encerrar a conexao com o banco de dados
	public void finalize ()
	{
		close();
	}
	
//Metodos de interacao com o banco de dados (Criar, Editar, Excluir)	
	public boolean inserirPessoa (PessoaFisica pessoa)
	{
	//Definir dados locais
		boolean status = false;
	//Tentar fazer a chamada
		try
		{
    //Estabelecer conexao com o banco de dados
			Statement st = getConexao().createStatement();
    //Definir comando SQL para adicionar Pessoa (Supertipo)
      String sqlSupertipo = "INSERT INTO pessoa (id, nome, email, senha, foto_perfil) " +
        "VALUES (" + pessoa.getId() + ", '" + pessoa.getNome() + "', '" + pessoa.getEmail() + 
        "', '" + pessoa.getSenha() + "', '" + pessoa.getFoto_perfil() + "');";
    //Definir comando SQL para adicionar Pessoa Fisica (Subtipo)
      String sqlSubtipo = "INSERT INTO pessoa_fisica (id_pessoa, cpf, data_de_nascimento) " +
        "VALUES (" + pessoa.getId() + ", '" + pessoa.getCpf() + "', '" + pessoa.getData_de_nascimento() + "');";
    //Executar query para adicionar Pessoa (Supertipo)
			st.executeUpdate(sqlSupertipo);
    //Executar query para adicionar PessoaFisica (Subtipo)
      st.executeUpdate(sqlSubtipo);
    //Finalizar conexao com o banco de dados
			st.close();
    //Definir status da operacao de insercao
			status = true;
		}
		catch (SQLException u)
		{
			throw new RuntimeException(u);
		}
	//retornar
		return status;
	}

	public boolean atualizarPessoa (PessoaFisica pessoa)
	{
	//Definir dados locais
		boolean status = false;
	//Tentar fazer a chamada
		try
		{
    //Estabelecer conexao com o banco de dados
			Statement st = getConexao().createStatement();
    //Definir comando SQL para atualizar Pessoa (Supertipo)
			String sqlSupertipo = "UPDATE pessoa SET nome = '" + pessoa.getNome() + "', email = '" + pessoa.getEmail() + 
        "', senha = '" + pessoa.getSenha() + "', foto_perfil = '" + pessoa.getFoto_perfil() + "' WHERE id = " + pessoa.getId();
    //Definir comando SQL para atualizar Pessoa Fisica (Subtipo)
      String sqlSubtipo =  "UPDATE pessoa_fisica SET cpf = '" + pessoa.getCpf() + 
        "', data_de_nascimento =  '" + pessoa.getData_de_nascimento() + "' WHERE pessoa_id = " + pessoa.getId();
    //Executar query para atualizar Pessoa (Supertipo)
			st.executeUpdate(sqlSupertipo);
    //Executar query para atualizar Pessoa Fisica (Subtipo)
      st.executeUpdate(sqlSubtipo);
    //Finalizar conexao com o banco de dados
			st.close();
    //Definir status da operacao de atualizacao
			status = true;
		}
	//Coletar o erro
		catch (SQLException u)
		{
			throw new RuntimeException(u);
		}
	//Retornar
		return status;
	}
	
	public boolean excluirPessoa (int id)
	{
	//Definir dados locais
		boolean status = false;
	//Tentar fazer a chamada
		try
		{
    //Estabelecer conexao com o banco de dados
			Statement st = getConexao().createStatement();
    //Definir comando SQL para excluir Pessoa (Supertipo)
      String sqlSupertipo = "DELETE FROM pessoa WHERE id = " + id;
    //Definir comando SQL para excluir Pessoa Fisica (Subtipo)
      String sqlSubtipo = "DELETE FROM pessoa_fisica WHERE pessoa_id = " + id;
    //Executar query para excluir Pessoa (Supertipo)
			st.executeUpdate(sqlSupertipo);
    //Executar query para excluir Pessoa Fisica (Subtipo)
      st.executeUpdate(sqlSubtipo);
    //Finalizar conexao com o banco de dados
			st.close();
    //Definir status da operacao de exclusao
			status = true;
		}
	//Recolher o erro
		catch (SQLException u)
		{
			throw new RuntimeException(u);
		}
	//Retornar
		return status;
	}

//Metodos de leitura do banco de dados (Ler todos, ler um)
	
	public PessoaFisica getPessoa (int id)
	{
	//Definir dados locais
		PessoaFisica pessoa = null;
	//Tentar fazer a chamada
		try
		{
    //Estabelecer conexao com o banco de dados
			Statement st = getConexao().createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
    //Definir comando SQL para selecionar Pessoa (Supertipo)
			String sqlSupertipo = "SELECT * FROM pessoa WHERE id = " + id;
    //Definir comando SQL para selecionar Pessoa Fisica (Subtipo)
			String sqlSubtipo = "SELECT * FROM pessoa_fisica WHERE id = " + id;
    //Definir resultados
      ResultSet rSupertipo = st.executeQuery(sqlSupertipo);
      ResultSet rSubtipo = st.executeQuery(sqlSubtipo);
    //Testar resultados
			if (rSupertipo.next() && rSubtipo.next())
			{
      //Definir novo objeto Pessoa Fisica
        pessoa = new PessoaFisica ( rSupertipo.getInt("id"), rSupertipo.getString("nome"), 
          rSupertipo.getString("email"), rSupertipo.getString("senha"), rSupertipo.getString("foto_perfil"), 
          rSubtipo.getString("cpf"), rSubtipo.getString("data_de_nascimento") );
			}
    //Finalizar conexao com o banco de dados
			st.close();
		}
		catch (Exception e)
		{
			System.err.println(e.getMessage());
		}
	//Retornar
		return pessoa;
	}
	
	// public List<PessoaFisica> getPessoaFisicas (String orderBy)
	// {
	// //Definir dados locais
	// 	List<PessoaFisica> pessoas = new ArrayList<PessoaFisica>();
	// //Tentar fazer a chamada
	// 	try
	// 	{
  //   //Estabelecer conexao com o banco de dados
	// 		Statement st = getConexao().createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
  //   //Definir comando SQL para selecionar Pessoa (Supertipo)
	// 		String sqlSupertipo = "SELECT * FROM pessoa";
  //   //Definir comando SQL para selecionar Pessoa Fisica (Subtipo)
	// 		String sqlSubtipo = "SELECT * FROM pessoa_fisica";
  //   //Definir resultados
  //     ResultSet rSupertipo = st.executeQuery(sqlSupertipo);
  //     ResultSet rSubtipo = st.executeQuery(sqlSubtipo);
	// 		while( rSupertipo.next() && rSubtipo.next() )
	// 		{
  //     //Definir novo objeto
	// 			PessoaFisica p = new PessoaFisica ( rSupertipo.getInt("id"), rSupertipo.getString("nome"), 
  //         rSupertipo.getString("email"), rSupertipo.getString("senha"), rSupertipo.getString("foto_perfil"), 
  //         rSubtipo.getString("cpf"), rSubtipo.getString("data_de_nascimento") );
  //     //Adicionar objeto ao arraylist
	// 			pessoas.add(p);
	// 		}
  //   //Finalizar conexao com o banco de dados
	// 		st.close();
	// 	}
	// //Recolher os erros
	// 	catch (Exception e)
	// 	{
	// 		System.err.println(e.getMessage());
	// 	}
	// //Retornar
	// 	return livros;
	// }
}
