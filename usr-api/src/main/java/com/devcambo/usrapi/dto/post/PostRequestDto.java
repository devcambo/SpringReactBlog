package com.devcambo.usrapi.dto.post;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public record PostRequestDto(
  @NotEmpty(message = "Title cannot be empty!")
  @Size(min = 2, max = 400, message = "Title must be between 2 and 400 characters!")
  String title,

  String content,

  @Size(max = 300, message = "Category cannot exceed 300 characters!") String category,
  @Size(max = 300, message = "Tags cannot exceed 300 characters!") String tags
) {}
