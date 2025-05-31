package com.devcambo.usrapi.repository;

import com.devcambo.usrapi.entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
  boolean existsByEmail(String email);
  Optional<User> findByEmail(String email);
}
