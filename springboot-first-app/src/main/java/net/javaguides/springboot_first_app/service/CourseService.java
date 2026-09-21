package net.javaguides.springboot_first_app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import net.javaguides.springboot_first_app.exception.CourseNotFoundException;
import net.javaguides.springboot_first_app.exception.InstructorNotFoundException;
import net.javaguides.springboot_first_app.model.Course;
import net.javaguides.springboot_first_app.model.Instructor;
import net.javaguides.springboot_first_app.repository.CourseRepository;
import net.javaguides.springboot_first_app.repository.InstructorRepository;

@Service
public class CourseService {

    private final CourseRepository courseRepository;
    private final InstructorRepository instructorRepository;

    public CourseService(CourseRepository courseRepository,
                         InstructorRepository instructorRepository) {
        this.courseRepository = courseRepository;
        this.instructorRepository = instructorRepository;
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public String addCourse(Course course) {
        courseRepository.save(course);
        return "course added successfully";
    }

    public String updateCourse(Integer id, Course updatedCourse) {

        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new CourseNotFoundException("course not found"));

        course.setTitle(updatedCourse.getTitle());
        course.setDuration(updatedCourse.getDuration());
        course.setName(updatedCourse.getName());
        course.setInstructor(updatedCourse.getInstructor());
        course.setYoutubeLink(updatedCourse.getYoutubeLink());

        courseRepository.save(course);

        return "course updated successfully";
    }

    public String assignInstructor(Integer courseId, Integer instructorId) {

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new CourseNotFoundException("course not found"));

        Instructor instructor = instructorRepository.findById(instructorId)
                .orElseThrow(() -> new InstructorNotFoundException("instructor not found"));

        course.setInstructor(instructor);

        courseRepository.save(course);

        return "instructor assigned successfully";
    }

    public String deleteCourse(Integer id) {

        if (!courseRepository.existsById(id)) {
            throw new CourseNotFoundException("course not found");
        }

        courseRepository.deleteById(id);

        return "course deleted successfully";
    }
}