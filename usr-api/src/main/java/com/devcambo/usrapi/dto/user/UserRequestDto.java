package com.devcambo.usrapi.dto.user;

import com.devcambo.usrapi.validation.UniqueEmail;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public record UserRequestDto(
  @NotEmpty(message = "Username cannot be empty!")
  @Size(min = 2, max = 50, message = "Username must be between 2 and 50 characters!")
  String username,

  @NotEmpty(message = "Email cannot be empty!")
  @Size(min = 5, max = 100, message = "Email must be between 5 and 100 characters!")
  @Email(message = "Invalid email address!")
  @UniqueEmail
  String email,

  @NotEmpty(message = "Password cannot be empty!")
  @Size(min = 6, max = 100, message = "Password must be between 6 and 100 characters!")
  String password,

  @Size(max = 500, message = "Bio cannot exceed 500 characters!") String bio,

  @Size(max = 100, message = "Profile picture URL cannot exceed 100 characters!")
  String profilePicture
) {}
