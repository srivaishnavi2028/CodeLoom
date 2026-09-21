package net.javaguides.springboot_first_app.controller;

import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot_first_app.model.QuizResult;
import net.javaguides.springboot_first_app.repository.QuizResultRepository;

@RestController
@RequestMapping("/quiz-results")
public class QuizResultController {

    private final QuizResultRepository quizResultRepository;

    public QuizResultController(QuizResultRepository quizResultRepository) {
        this.quizResultRepository = quizResultRepository;
    }

    @PostMapping
    public QuizResult saveResult(
            @RequestBody QuizResult quizResult,
            Authentication authentication) {

        quizResult.setEmail(authentication.getName());

        return quizResultRepository.save(quizResult);
    }

    @GetMapping
    public List<QuizResult> getMyResults(Authentication authentication) {

        String email = authentication.getName();

        return quizResultRepository.findByEmailOrderByAttemptDateDesc(email);
    }
}