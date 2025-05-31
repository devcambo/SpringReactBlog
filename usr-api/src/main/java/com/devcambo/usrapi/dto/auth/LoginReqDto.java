package com.devcambo.usrapi.dto.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

public record LoginReqDto(
  @NotEmpty(message = "Email cannot be empty!") @Email String email,
  @NotEmpty(message = "Password cannot be empty!") String pwd
) {}
