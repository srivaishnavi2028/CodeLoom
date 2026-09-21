package net.javaguides.springboot_first_app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import net.javaguides.springboot_first_app.exception.InstructorNotFoundException;
import net.javaguides.springboot_first_app.model.Instructor;
import net.javaguides.springboot_first_app.repository.InstructorRepository;
@Service
public class InstructorService {

    
	private final InstructorRepository instructorRepository;

    public InstructorService(InstructorRepository instructorRepository) {
        this.instructorRepository=instructorRepository;
    }

    public List<Instructor> getAllInstructor() {
        return instructorRepository.findAll();
    }

    public String addInstructor(Instructor inst) {
        instructorRepository.save(inst);
        return "instructor added successfully";
    }

    public String updateInstructor(int id, Instructor updateInstructor) {
    	Instructor inst=instructorRepository.findById(id).orElseThrow(()-> new InstructorNotFoundException("instructor not found"));
           
                inst.setName(updateInstructor.getName());
                inst.setExpertise(updateInstructor.getExpertise());
                instructorRepository.save(inst);
                return "instructor updated successfully";
       
    }

    public String deleteInstructor(int id) {
        if(!instructorRepository.existsById(id)) {
        	throw new InstructorNotFoundException("instructor not found");
        	
        }
        instructorRepository.deleteById(id);
    	return "instructor deleted";
    }
}