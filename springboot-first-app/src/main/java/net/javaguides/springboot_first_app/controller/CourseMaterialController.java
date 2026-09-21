package net.javaguides.springboot_first_app.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import net.javaguides.springboot_first_app.model.CourseMaterial;
import net.javaguides.springboot_first_app.service.CourseMaterialService;

@RestController
@RequestMapping("/course-materials")
public class CourseMaterialController {

    private final CourseMaterialService courseMaterialService;

    public CourseMaterialController(CourseMaterialService courseMaterialService) {
        this.courseMaterialService = courseMaterialService;
    }

    @GetMapping("/course/{courseId}")
    public ResponseEntity<List<CourseMaterial>> getMaterials(
            @PathVariable Integer courseId) {

        return ResponseEntity.ok(
                courseMaterialService.getMaterialsByCourseId(courseId)
        );
    }

    @PostMapping
    public ResponseEntity<CourseMaterial> addMaterial(
            @RequestBody CourseMaterial material) {

        return ResponseEntity.ok(
                courseMaterialService.addMaterial(material)
        );
    }
}