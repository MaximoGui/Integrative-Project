package com.ecommerce.getset.service;

import java.nio.charset.Charset;
import java.util.Optional;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ecommerce.getset.model.UserLogin;
import com.ecommerce.getset.model.Usuario;
import com.ecommerce.getset.repository.UsuarioRepository;

@Service
public class UsuarioService {
		
		@Autowired
		private UsuarioRepository repository;
		
		public Usuario CadastrarUsuario(Usuario usuario) {
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
			
			String senhaEncoder = encoder.encode(usuario.getSenha());
			usuario.setSenha(senhaEncoder);
			
			return repository.save(usuario);
		}
		public Optional<UserLogin> Logar(Optional<UserLogin> user){
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
			Optional<Usuario> usuario = repository.findByEmail(user.get().getEmail());
			
			if(usuario.isPresent()) {
				if(encoder.matches(user.get().getSenha(), usuario.get().getSenha())) {
					
					String auth = user.get().getEmail() + ':' + user.get().getSenha();
					byte[] encodeAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
					String authHeader = "Basic " + new String(encodeAuth);
					
					user.get().setToken(authHeader);
					user.get().setId(usuario.get().getId());
					user.get().setNome(usuario.get().getNome());
					user.get().setApelido(usuario.get().getApelido());
					user.get().setDataNascimento(usuario.get().getDataNascimento());
					user.get().setTelefone(usuario.get().getTelefone());
					user.get().setCep(usuario.get().getCep());
					user.get().setRua(usuario.get().getRua());
					user.get().setNumero(usuario.get().getNumero());
					user.get().setComplemento(usuario.get().getComplemento());
					user.get().setBairro(usuario.get().getBairro());
					user.get().setCidade(usuario.get().getCidade());
					user.get().setUf(usuario.get().getUf());
					user.get().setReferencia(usuario.get().getReferencia());
					user.get().setAdmin(usuario.get().isAdmin());
					
					
					return user;
				}
			}
			return null;
		}
}