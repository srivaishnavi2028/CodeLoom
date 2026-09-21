package net.javaguides.springboot_first_app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot_first_app.service.JwtService;

@RestController
public class JwtTestController {
	
	private final JwtService jwtService;
public JwtTestController(JwtService jwtService) {
		this.jwtService = jwtService;
	}
	@GetMapping("/test-token")
	public String generateToken(@RequestParam String email) {
		return jwtService.generateToken(email);
	}
	@GetMapping("/test-email")
	public String extractEmail(@RequestParam String token) {
		return jwtService.extractEmail(token);
	}
	@GetMapping("/test-valid")
	public boolean validateToken(@RequestParam String token,@RequestParam String email) {
		return jwtService.isTokenValid(token, email);
	}

}
