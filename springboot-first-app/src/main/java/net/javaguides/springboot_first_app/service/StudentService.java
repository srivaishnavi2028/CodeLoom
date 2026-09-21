package net.javaguides.springboot_first_app.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import net.javaguides.springboot_first_app.exception.CourseNotFoundException;
import net.javaguides.springboot_first_app.exception.StudentNotFoundException;
import net.javaguides.springboot_first_app.model.Course;
import net.javaguides.springboot_first_app.model.Student;
import net.javaguides.springboot_first_app.repository.CourseRepository;
import net.javaguides.springboot_first_app.repository.StudentRepository;

@Service
public class StudentService {

    private final StudentRepository studentRepository;
    private final CourseRepository courseRepository;

    public StudentService(
            StudentRepository studentRepository,
            CourseRepository courseRepository) {

        this.studentRepository = studentRepository;
        this.courseRepository = courseRepository;
    }

    public Student createStudent(Student student) {
        return studentRepository.save(student);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(Long id) {

        return studentRepository.findById(id)
                .orElseThrow(() ->
                        new StudentNotFoundException("Student not found"));
    }

    public Student getStudentByEmail(String email) {

        return studentRepository.findByEmail(email)
                .orElseThrow(() ->
                        new StudentNotFoundException("Student profile not found"));
    }

    public Student updateStudent(Long id, Student updatedStudent) {

        Student student = studentRepository.findById(id)
                .orElseThrow(() ->
                        new StudentNotFoundException("Student not found"));

        student.setName(updatedStudent.getName());
        student.setEmail(updatedStudent.getEmail());

        return studentRepository.save(student);
    }

    public String deleteStudent(Long id) {

        Student student = studentRepository.findById(id)
                .orElseThrow(() ->
                        new StudentNotFoundException("Student not found"));

        studentRepository.delete(student);

        return "Student deleted successfully";
    }

    @Transactional
    public String enrollCourse(String email, Integer courseId) {

        Student student = studentRepository.findByEmail(email)
                .orElseThrow(() ->
                        new StudentNotFoundException("Student account not found"));

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() ->
                        new CourseNotFoundException("Course not found"));

        if (!student.getCourses().contains(course)) {

            student.getCourses().add(course);

            studentRepository.save(student);
        }

        return "Student enrolled successfully";
    }

    @Transactional(readOnly = true)
    public List<Course> getMyCourses(String email) {

        return courseRepository.findCoursesByStudentEmail(email);
    }
}