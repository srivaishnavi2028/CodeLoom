package net.javaguides.springboot_first_app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import net.javaguides.springboot_first_app.model.Course;

public interface CourseRepository extends JpaRepository<Course, Integer> {

    @Query("SELECT c FROM Student s JOIN s.courses c WHERE s.email = :email")
    List<Course> findCoursesByStudentEmail(String email);
}