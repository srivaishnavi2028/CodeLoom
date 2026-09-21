package net.javaguides.springboot_first_app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import net.javaguides.springboot_first_app.model.CourseMaterial;
import net.javaguides.springboot_first_app.repository.CourseMaterialRepository;

@Service
public class CourseMaterialService {

    private final CourseMaterialRepository courseMaterialRepository;

    public CourseMaterialService(CourseMaterialRepository courseMaterialRepository) {
        this.courseMaterialRepository = courseMaterialRepository;
    }

    public List<CourseMaterial> getMaterialsByCourseId(Integer courseId) {
        return courseMaterialRepository.findByCourseId(courseId);
    }

    public CourseMaterial addMaterial(CourseMaterial material) {
        return courseMaterialRepository.save(material);
    }
}