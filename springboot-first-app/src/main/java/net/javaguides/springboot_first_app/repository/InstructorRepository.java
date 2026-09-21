package net.javaguides.springboot_first_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.javaguides.springboot_first_app.model.Instructor;

public interface InstructorRepository extends JpaRepository<Instructor,Integer> {

}
