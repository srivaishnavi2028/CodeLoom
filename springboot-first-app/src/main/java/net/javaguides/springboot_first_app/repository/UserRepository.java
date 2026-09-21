package net.javaguides.springboot_first_app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import net.javaguides.springboot_first_app.model.User;

public interface UserRepository extends JpaRepository<User,Integer>{
	Optional<User> findByEmail(String email);

}
