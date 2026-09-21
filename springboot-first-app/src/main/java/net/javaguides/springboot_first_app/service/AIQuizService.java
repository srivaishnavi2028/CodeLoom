package net.javaguides.springboot_first_app.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import net.javaguides.springboot_first_app.model.QuizQuestion;

import java.util.List;
import java.util.Map;

@Service
public class AIQuizService {

    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper objectMapper = new ObjectMapper();

    public List<QuizQuestion> generateQuiz(
            String subject,
            int numberOfQuestions) {

        String prompt = """
                Create exactly %d multiple-choice questions about %s.

                Return ONLY valid JSON.
                Do not include markdown.
                Do not include ```json.
                Do not include explanations outside the JSON.

                Use exactly this JSON format:

                {
                  "questions": [
                    {
                      "question": "Question text",
                      "options": [
                        "Option A",
                        "Option B",
                        "Option C",
                        "Option D"
                      ],
                      "correctAnswer": "Option A"
                    }
                  ]
                }

                Rules:
                - Create exactly %d questions.
                - Exactly 4 options per question.
                - correctAnswer must exactly match one of the four options.
                - Every question must have only one correct answer.
                - Make sure every answer is factually correct.
                - Do not repeat questions.
                - Keep questions beginner-friendly.
                """.formatted(
                        numberOfQuestions,
                        subject,
                        numberOfQuestions
                );

        String url = "http://localhost:11434/api/generate";

        Map<String, Object> requestBody = Map.of(
                "model", "llama3.2",
                "prompt", prompt,
                "stream", false
        );

        HttpEntity<Map<String, Object>> request =
                new HttpEntity<>(requestBody);

        ResponseEntity<Map<String, Object>> responseEntity =
                restTemplate.exchange(
                        url,
                        HttpMethod.POST,
                        request,
                        new ParameterizedTypeReference<Map<String, Object>>() {}
                );

        Map<String, Object> response =
                responseEntity.getBody();

        if (response == null || response.get("response") == null) {
            throw new RuntimeException("Failed to generate quiz");
        }

        String json = response.get("response").toString();

        System.out.println("========== AI QUIZ RESPONSE ==========");
        System.out.println(json);
        System.out.println("======================================");

        try {

            json = cleanJson(json);

            JsonNode root = objectMapper.readTree(json);

            if (root.has("questions")) {

                return objectMapper.readValue(
                        root.get("questions").toString(),
                        new TypeReference<List<QuizQuestion>>() {}
                );

            } else if (root.isArray()) {

                return objectMapper.readValue(
                        json,
                        new TypeReference<List<QuizQuestion>>() {}
                );

            } else {

                throw new RuntimeException(
                        "AI returned unexpected JSON format"
                );
            }

        } catch (Exception e) {

            throw new RuntimeException(
                    "Failed to generate AI quiz: "
                    + e.getMessage(),
                    e
            );
        }
    }

    private String cleanJson(String json) {

        json = json.trim();

        if (json.startsWith("```json")) {
            json = json.substring(7);
        }

        if (json.startsWith("```")) {
            json = json.substring(3);
        }

        if (json.endsWith("```")) {
            json = json.substring(0, json.length() - 3);
        }

        return json.trim();
    }
}