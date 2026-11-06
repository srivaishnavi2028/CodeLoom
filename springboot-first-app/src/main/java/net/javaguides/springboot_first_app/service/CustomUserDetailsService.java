package net.javaguides.springboot_first_app.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import net.javaguides.springboot_first_app.model.User;
import net.javaguides.springboot_first_app.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {

        System.out.println("========== LOGIN DEBUG ==========");
        System.out.println("EMAIL RECEIVED: " + email);

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> {
                    System.out.println("USER NOT FOUND");
                    return new UsernameNotFoundException("User not found");
                });

        System.out.println("USER FOUND: " + user.getEmail());
        System.out.println("ROLE: " + user.getRole());
        System.out.println("=================================");

        return org.springframework.security.core.userdetails.User
                .withUsername(user.getEmail())
                .password(user.getPassword())
                .roles(user.getRole())
                .build();
    }
}