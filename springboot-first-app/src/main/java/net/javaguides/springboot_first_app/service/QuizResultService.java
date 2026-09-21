package net.javaguides.springboot_first_app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import net.javaguides.springboot_first_app.model.QuizResult;
import net.javaguides.springboot_first_app.repository.QuizResultRepository;

@Service
public class QuizResultService {
	private final QuizResultRepository quizResultRepository;

	public QuizResultService(QuizResultRepository quizResultRepository) {
		this.quizResultRepository = quizResultRepository;
	}
	public QuizResult saveResult(QuizResult result) {
		return quizResultRepository.save(result);
	}
	public List<QuizResult> getAllResults(){
		return quizResultRepository.findAll();
	}

}
