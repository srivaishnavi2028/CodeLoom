package net.javaguides.springboot_first_app.controller;

import java.util.List;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

import net.javaguides.springboot_first_app.model.LoginRequest;
import net.javaguides.springboot_first_app.model.User;
import net.javaguides.springboot_first_app.service.JwtService;
import net.javaguides.springboot_first_app.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public UserController(
            UserService userService,
            AuthenticationManager authenticationManager,
            JwtService jwtService) {

        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    // REGISTER
    @PostMapping("/register")
    public String registerUser(@Valid @RequestBody User user) {
        return userService.registerUser(user);
    }

    // LOGIN
    @PostMapping("/login")
    public String loginUser(@Valid @RequestBody LoginRequest request) {

        System.out.println("LOGIN ENDPOINT REACHED");
        System.out.println("EMAIL: " + request.getEmail());

        Authentication authentication =
                authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                    )
                );

        String token =
                jwtService.generateToken(request.getEmail());

        return token;
    }

    // GET ALL USERS
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // GET USER BY ID
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Integer id) {
        return userService.getUserById(id);
    }

    // UPDATE USER
    @PutMapping("/{id}")
    public String updateUser(
            @PathVariable Integer id,
            @Valid @RequestBody User user) {

        return userService.updateUser(id, user);
    }

    // DELETE USER
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Integer id) {
        return userService.deleteUser(id);
    }
}