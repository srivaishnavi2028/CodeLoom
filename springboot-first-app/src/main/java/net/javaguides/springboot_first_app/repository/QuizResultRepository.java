package net.javaguides.springboot_first_app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import net.javaguides.springboot_first_app.model.QuizResult;

public interface QuizResultRepository extends JpaRepository<QuizResult, Long> {

    List<QuizResult> findByEmailOrderByAttemptDateDesc(String email);
}