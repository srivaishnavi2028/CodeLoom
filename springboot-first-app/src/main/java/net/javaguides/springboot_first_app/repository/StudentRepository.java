package net.javaguides.springboot_first_app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import net.javaguides.springboot_first_app.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

    Optional<Student> findByEmail(String email);
}