package net.javaguides.springboot_first_app.controller;

import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot_first_app.model.Course;
import net.javaguides.springboot_first_app.model.Student;
import net.javaguides.springboot_first_app.service.StudentService;

@RestController
@RequestMapping("/students")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Long id) {
        return studentService.getStudentById(id);
    }

    @GetMapping("/profile")
    public Student getMyProfile(Authentication authentication) {

        String email = authentication.getName();

        return studentService.getStudentByEmail(email);
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return studentService.createStudent(student);
    }

    @PostMapping("/courses/{courseId}")
    public String enrollCourse(
            @PathVariable Integer courseId,
            Authentication authentication) {

        String email = authentication.getName();

        return studentService.enrollCourse(email, courseId);
    }

    @PutMapping("/{id}")
    public Student updateStudent(
            @PathVariable Long id,
            @RequestBody Student updatedStudent) {

        return studentService.updateStudent(id, updatedStudent);
    }

    @GetMapping("/my-courses")
    public List<Course> getMyCourses(Authentication authentication) {

        String email = authentication.getName();

        return studentService.getMyCourses(email);
    }

    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable Long id) {
        return studentService.deleteStudent(id);
    }
}