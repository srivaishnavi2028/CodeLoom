package net.javaguides.springboot_first_app.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot_first_app.model.Course;
import net.javaguides.springboot_first_app.service.CourseService;

@RestController
@RequestMapping("/courses")
public class CourseController {

	private final CourseService courseService;
	public CourseController(CourseService courseService) {
		this.courseService=courseService;
	}
	@GetMapping
	public List<Course> getCourses() {
		return courseService.getAllCourses();
	}
	@PostMapping
	public String addCourse(@RequestBody Course course) {
		return courseService.addCourse(course);
		//return "course added successfully";
	}
	@PutMapping("/{id}")
	public String updateCourse(@PathVariable int id,@RequestBody Course updateCourse) {
		return courseService.updateCourse(id,updateCourse);
	}
	@PostMapping("/{courseId}/instructor/{instructorId}")
	public String assignInstructor(
	        @PathVariable Integer courseId,
	        @PathVariable Integer instructorId) {

	    return courseService.assignInstructor(courseId, instructorId);
	}
	@DeleteMapping("/{id}")
	public String deleteCourse(@PathVariable int id) {
		return courseService.deleteCourse(id);
	}

}
