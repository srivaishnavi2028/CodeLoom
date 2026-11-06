package net.javaguides.springboot_first_app.controller;

import java.util.List;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import net.javaguides.springboot_first_app.dto.UserResponse;
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

    public UserController(UserService userService,
            AuthenticationManager authenticationManager,
            JwtService jwtService) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    @PostMapping("/register")
    public String registerUser(@Valid @RequestBody User user) {
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public String loginUser(@Valid @RequestBody LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(), request.getPassword()));
        return jwtService.generateToken(request.getEmail());
    }

    @GetMapping
    public List<UserResponse> getAllUsers() {
        return userService.getAllUsers().stream()
                .map(user -> new UserResponse(
                        user.getId(),
                        user.getName(),
                        user.getEmail(),
                        user.getRole()))
                .toList();
    }

    @GetMapping("/{id}")
    public UserResponse getUserById(@PathVariable Integer id) {
        User user = userService.getUserById(id);
        return new UserResponse(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getRole());
    }

    @PutMapping("/{id}")
    public String updateUser(@PathVariable Integer id,
            @Valid @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Integer id) {
        return userService.deleteUser(id);
    }
}
