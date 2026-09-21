package net.javaguides.springboot_first_app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import net.javaguides.springboot_first_app.model.CourseMaterial;

public interface CourseMaterialRepository
        extends JpaRepository<CourseMaterial, Integer> {

    List<CourseMaterial> findByCourseId(Integer courseId);
}