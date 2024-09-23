package model;

import java.util.Scanner;

class Teste
{
  public static Scanner sc = new Scanner (System.in);
  public static void main (String args [])
  {
  //Definir dados
    int id;
    String nome, email, senha;
    String cpf, data_de_nascimento;
    String cnpj, descricao;
  //Ler usuario
    System.out.println("----- USUARIO -----");
    id = sc.nextInt();
    nome = sc.nextLine();
    email = sc.nextLine();
    senha = sc.nextLine();
    cpf = sc.nextLine();
    data_de_nascimento = sc.nextLine(); String s = sc.nextLine();
  //Definir novo objeto
    PessoaFisica pessoa = new PessoaFisica(id, nome, email, senha, "", cpf, data_de_nascimento);
    System.out.println( pessoa.toString() );
  //Ler instituicao
    System.out.println("----- INSTITUICAO -----");
    id = sc.nextInt();
    nome = sc.nextLine();
    email = sc.nextLine();
    senha = sc.nextLine();
    cnpj = sc.nextLine();
    descricao = sc.nextLine();
  //Definir novo objeto
    PessoaJuridica instituicao = new PessoaJuridica(id, nome, email, senha, "", cnpj, descricao);
    System.out.println( instituicao.toString() );  
  }
}