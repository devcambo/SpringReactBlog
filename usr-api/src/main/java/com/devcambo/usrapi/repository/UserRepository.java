package com.devcambo.usrapi.repository;

import com.devcambo.usrapi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
  boolean existsByEmail(String email);
}
