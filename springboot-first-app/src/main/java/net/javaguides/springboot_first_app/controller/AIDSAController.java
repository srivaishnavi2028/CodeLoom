package net.javaguides.springboot_first_app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot_first_app.model.AIDSAQuestion;
import net.javaguides.springboot_first_app.service.AIDSAService;

@RestController
public class AIDSAController {

    private final AIDSAService aiDSAService;

    public AIDSAController(AIDSAService aiDSAService) {
        this.aiDSAService = aiDSAService;
    }

    @GetMapping("/ai/dsa")
    public AIDSAQuestion generateProblem(
            @RequestParam String topic) {

        return aiDSAService.generateProblem(topic);
    }
}