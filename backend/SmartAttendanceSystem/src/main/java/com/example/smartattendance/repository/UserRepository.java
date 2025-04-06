package com.example.smartattendance.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.smartattendance.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
