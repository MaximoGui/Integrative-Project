package com.ecommerce.getset.model;

import java.util.Date;

public class UserLogin {
	
		private long id;

		private String nome;
		
		private String email;
		
		private String senha;
		
		private String token;
		
		private String apelido;
		
		private Date dataNascimento;
		
		private String telefone;

		private int cep;
		
		private String rua;
		
		private int numero;
		
		private String complemento;
		
		private String bairro;
		
		private String cidade;
		
		private String uf;
		
		private String referencia;
		
		public String getApelido() {
			return apelido;
		}

		public void setApelido(String apelido) {
			this.apelido = apelido;
		}

		public Date getDataNascimento() {
			return dataNascimento;
		}

		public void setDataNascimento(Date dataNascimento) {
			this.dataNascimento = dataNascimento;
		}

		public String getTelefone() {
			return telefone;
		}

		public void setTelefone(String telefone) {
			this.telefone = telefone;
		}

		public int getCep() {
			return cep;
		}

		public void setCep(int cep) {
			this.cep = cep;
		}

		public String getRua() {
			return rua;
		}

		public void setRua(String rua) {
			this.rua = rua;
		}

		public int getNumero() {
			return numero;
		}

		public void setNumero(int numero) {
			this.numero = numero;
		}

		public String getComplemento() {
			return complemento;
		}

		public void setComplemento(String complemento) {
			this.complemento = complemento;
		}

		public String getBairro() {
			return bairro;
		}

		public void setBairro(String bairro) {
			this.bairro = bairro;
		}

		public String getCidade() {
			return cidade;
		}

		public void setCidade(String cidade) {
			this.cidade = cidade;
		}

		public String getUf() {
			return uf;
		}

		public void setUf(String uf) {
			this.uf = uf;
		}

		public String getReferencia() {
			return referencia;
		}

		public void setReferencia(String referencia) {
			this.referencia = referencia;
		}

		private boolean admin;

		public boolean isAdmin() {
			return admin;
		}

		public void setAdmin(boolean admin) {
			this.admin = admin;
		}

		public String getNome() {
			return nome;
		}

		public void setNome(String nome) {
			this.nome = nome;
		}

		public String getSenha() {
			return senha;
		}

		public void setSenha(String senha) {
			this.senha = senha;
		}

		public String getToken() {
			return token;
		}

		public void setToken(String token) {
			this.token = token;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}
		
		
}
