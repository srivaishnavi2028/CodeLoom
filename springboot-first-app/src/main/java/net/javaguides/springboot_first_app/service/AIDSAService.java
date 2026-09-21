package net.javaguides.springboot_first_app.service;

import java.util.List;
import java.util.Map;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import net.javaguides.springboot_first_app.model.AIDSAQuestion;
import net.javaguides.springboot_first_app.model.Example;

@Service
public class AIDSAService {

    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper objectMapper = new ObjectMapper();

    public AIDSAQuestion generateProblem(String topic) {

        String prompt = """
                Create ONE easy beginner-friendly DSA problem for the topic: %s.

                Return ONLY valid JSON.

                Use exactly these fields:

                {
                  "problem": "problem statement",
                  "examples": [
                    {
                      "input": "example input",
                      "output": "correct output",
                      "explanation": "short explanation"
                    },
                    {
                      "input": "example input",
                      "output": "correct output",
                      "explanation": "short explanation"
                    }
                  ],
                  "explanation": "short explanation",
                  "approach": "short step-by-step approach",
                  "javaSolution": "complete Java program",
                  "pythonSolution": "complete Python program",
                  "cppSolution": "complete C++ program"
                }

                IMPORTANT RULES:

                1. Generate exactly ONE problem.
                2. Difficulty must be Easy.
                3. Problem must be beginner-friendly.
                4. Generate EXACTLY TWO examples.
                5. The examples array MUST contain TWO objects.
                6. Never return an empty examples array.
                7. Both examples must have correct inputs and outputs.
                8. Both examples must match the same problem.
                9. Explanation must match the problem.
                10. Approach must match the problem.
                11. Java, Python and C++ must solve the SAME problem.
                12. Java solution must be a complete runnable program.
                13. Python solution must be complete and runnable.
                14. C++ solution must be a complete runnable program.
                15. Do not add extra JSON fields.
                16. Do not omit required JSON fields.
                17. Do not use null values.
                18. Return JSON only.
                19. Do not use markdown.
                20. Do not use code fences.
                21. Keep the explanation short.
                22. Keep the approach short.
                23. Keep all code reasonably short so the complete JSON can be returned.
                24. Do not stop before returning all fields.

                Topic: %s
                """.formatted(topic, topic);

        String url = "http://localhost:11434/api/generate";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, Object> options = Map.of(
                "temperature", 0.2,
                "num_predict", 4000
        );

        Map<String, Object> requestBody = Map.of(
                "model", "llama3.2",
                "prompt", prompt,
                "stream", false,
                "format", "json",
                "options", options
        );

        HttpEntity<Map<String, Object>> request =
                new HttpEntity<>(requestBody, headers);

        ResponseEntity<Map<String, Object>> responseEntity =
                restTemplate.exchange(
                        url,
                        org.springframework.http.HttpMethod.POST,
                        request,
                        new ParameterizedTypeReference<Map<String, Object>>() {}
                );

        Map<String, Object> response = responseEntity.getBody();

        if (response == null || response.get("response") == null) {
            throw new RuntimeException("No response received from Ollama");
        }

        String text = response.get("response").toString();

        System.out.println("========== OLLAMA RESPONSE ==========");
        System.out.println(text);
        System.out.println("=====================================");

        try {

            JsonNode json = objectMapper.readTree(text);

            String problem = json.path("problem").asText();
            String explanation = json.path("explanation").asText();
            String approach = json.path("approach").asText();

            String javaSolution =
                    json.path("javaSolution").asText();

            String pythonSolution =
                    json.path("pythonSolution").asText();

            String cppSolution =
                    json.path("cppSolution").asText();

            JsonNode examplesNode = json.path("examples");

            if (!examplesNode.isArray()) {
                throw new RuntimeException(
                        "Invalid examples format returned by Ollama"
                );
            }

            List<Example> examples =
                    objectMapper.readerForListOf(Example.class)
                            .readValue(examplesNode.toString());

            if (problem.isBlank()
                    || examples.size() != 2
                    || explanation.isBlank()
                    || approach.isBlank()
                    || javaSolution.isBlank()
                    || pythonSolution.isBlank()
                    || cppSolution.isBlank()) {

                throw new RuntimeException(
                        "Ollama returned incomplete DSA solution"
                );
            }

            return new AIDSAQuestion(
                    problem,
                    examples,
                    explanation,
                    approach,
                    javaSolution,
                    pythonSolution,
                    cppSolution
            );

        } catch (Exception e) {

            throw new RuntimeException(
                    "Failed to parse Ollama response: " + text,
                    e
            );
        }
    }
}