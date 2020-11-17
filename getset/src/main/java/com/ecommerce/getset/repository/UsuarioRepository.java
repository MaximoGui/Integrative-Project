package com.ecommerce.getset.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.getset.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	public Optional<Usuario> findByUsuario(String usuario);
}
