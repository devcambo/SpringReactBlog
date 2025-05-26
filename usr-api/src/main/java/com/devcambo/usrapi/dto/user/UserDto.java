package com.devcambo.usrapi.dto.user;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDateTime;

public record UserDto(
  Integer userId,
  String username,
  String email,
  String bio,
  String profilePicture,
  @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss a") LocalDateTime createdAt
) {}
