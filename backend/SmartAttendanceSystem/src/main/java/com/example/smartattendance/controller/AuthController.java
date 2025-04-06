package com.example.smartattendance.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.smartattendance.dto.LoginRequest;
import com.example.smartattendance.model.User;
import com.example.smartattendance.service.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200") // Allow Angular frontend
public class AuthController {

    @Autowired
    private UserService userService;

    // ✅ User Registration
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        if (userService.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email already exists!");
        }
        User savedUser = userService.registerUser(user);
        return ResponseEntity.ok("User registered successfully!");
    }

    // ✅ Login with Role & Password Validation
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        Optional<User> foundUser = userService.findByEmail(loginRequest.getEmail());

        if (foundUser.isPresent()) {
            User user = foundUser.get();
            boolean passwordMatches = userService.verifyPassword(loginRequest.getPassword(), user.getPassword());
            boolean roleMatches = user.getRole().equalsIgnoreCase(loginRequest.getRole());

            if (passwordMatches && roleMatches) {
                return ResponseEntity.ok(user); // You can create a LoginResponse DTO here if needed
            }
        }

        return ResponseEntity.badRequest().body("Invalid credentials or role mismatch");
    }
}
