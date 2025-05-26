package com.devcambo.usrapi.dto.comment;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDateTime;

public record CommentDto(
  Integer commentId,
  String content,
  @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss a") LocalDateTime timestamp
) {}
