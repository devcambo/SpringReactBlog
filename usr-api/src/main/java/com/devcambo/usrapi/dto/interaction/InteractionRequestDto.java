package com.devcambo.usrapi.dto.interaction;

import com.devcambo.usrapi.entity.InteractionType;

public record InteractionRequestDto(
  InteractionType type,
  Integer userId,
  Integer postId
) {}
