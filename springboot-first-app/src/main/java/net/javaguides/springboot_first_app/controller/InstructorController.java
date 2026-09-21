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

import net.javaguides.springboot_first_app.model.Instructor;
import net.javaguides.springboot_first_app.service.InstructorService;

@RestController
@RequestMapping("/ins")
public class InstructorController {

    private final InstructorService instructorService;

    public InstructorController(InstructorService instructorService) {
        this.instructorService = instructorService;
    }

    @GetMapping
    public List<Instructor> getAllInstructors() {
        return instructorService.getAllInstructor();
    }

    @PostMapping
    public String addInstructor(@RequestBody Instructor instructor) {
        return instructorService.addInstructor(instructor);
    }

    @PutMapping("/{id}")
    public String updateInstructor(
            @PathVariable Integer id,
            @RequestBody Instructor updateInstructor) {

        return instructorService.updateInstructor(id, updateInstructor);
    }

    @DeleteMapping("/{id}")
    public String deleteInstructor(@PathVariable Integer id) {
        return instructorService.deleteInstructor(id);
    }
}