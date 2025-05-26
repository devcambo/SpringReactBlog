package com.devcambo.usrapi.service;

import com.devcambo.usrapi.dto.interaction.InteractionRequestDto;
import java.util.List;

public interface InteractionService {
  void createInteraction(InteractionRequestDto interactionRequestDto);
}
