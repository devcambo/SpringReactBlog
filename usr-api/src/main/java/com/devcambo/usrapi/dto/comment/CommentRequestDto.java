package com.devcambo.usrapi.dto.comment;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record CommentRequestDto(
  @NotEmpty(message = "Content cannot be empty!") String content,
  @NotNull(message = "Post Id cannot be empty!") Integer postId,
  @NotNull(message = "User Id cannot be empty!") Integer userId
) {}
