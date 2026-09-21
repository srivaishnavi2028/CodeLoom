package net.javaguides.springboot_first_app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot_first_app.service.AIQuizService;
import net.javaguides.springboot_first_app.model.QuizQuestion;

import java.util.List;

@RestController
public class AIQuizController {

    private final AIQuizService aiQuizService;

    public AIQuizController(AIQuizService aiQuizService) {
        this.aiQuizService = aiQuizService;
    }

    @GetMapping("/ai/generate-quiz")
    public List<QuizQuestion> generateQuiz(
            @RequestParam String subject,
            @RequestParam int numberOfQuestions) {

        return aiQuizService.generateQuiz(
                subject,
                numberOfQuestions
        );
    }
}