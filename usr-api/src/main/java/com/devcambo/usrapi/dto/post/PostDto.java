package com.devcambo.usrapi.dto.post;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDateTime;

public record PostDto(
  Integer postId,
  String title,
  String content,
  String category,
  String tags,
  @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss a") LocalDateTime publicationDate
  // TODO: Add comments and interactions when those DTOs are created
) {}
