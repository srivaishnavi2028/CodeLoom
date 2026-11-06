package net.javaguides.springboot_first_app.service;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import net.javaguides.springboot_first_app.exception.UserNotFoundException;
import net.javaguides.springboot_first_app.model.Student;
import net.javaguides.springboot_first_app.model.User;
import net.javaguides.springboot_first_app.repository.StudentRepository;
import net.javaguides.springboot_first_app.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final StudentRepository studentRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(
            UserRepository userRepository,
            StudentRepository studentRepository,
            PasswordEncoder passwordEncoder) {

        this.userRepository = userRepository;
        this.studentRepository = studentRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public String registerUser(User user) {

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        user.setRole("STUDENT");

        userRepository.save(user);

        if ("STUDENT".equalsIgnoreCase(user.getRole())) {

            Student student = new Student();

            student.setName(user.getName());
            student.setEmail(user.getEmail());

            studentRepository.save(student);
        }

        return "user registered successfully";
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Integer id) {
        return userRepository.findById(id)
                .orElseThrow(() ->
                        new UserNotFoundException("user not found"));
    }

    public String loginUser(String email, String password) {

        User user = userRepository.findByEmail(email).orElse(null);

        if (user == null) {
            return "user not found";
        }

        if (user.getPassword() == null ||
                !passwordEncoder.matches(password, user.getPassword())) {

            return "invalid password";
        }

        return "login successful";
    }

    public String updateUser(Integer id, User user) {

        User existingUser = userRepository.findById(id)
                .orElseThrow(() ->
                        new UserNotFoundException("user not found"));

        existingUser.setName(user.getName());
        existingUser.setEmail(user.getEmail());
        if (user.getPassword() != null && !user.getPassword().isBlank()) { existingUser.setPassword(passwordEncoder.encode(user.getPassword())); }

        userRepository.save(existingUser);

        return "user updated successfully";
    }

    public String deleteUser(Integer id) {

        User existingUser = userRepository.findById(id)
                .orElseThrow(() ->
                        new UserNotFoundException("user not found"));

        userRepository.delete(existingUser);

        return "user deleted successfully";
    }
}