package com.devcambo.usrapi.dto.interaction;

import com.devcambo.usrapi.dto.post.PostDto;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDateTime;

public record InteractionDto(
  Integer interactionId,
  String type,
  @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss a") LocalDateTime timestamp,
  PostDto postDto
) {}
