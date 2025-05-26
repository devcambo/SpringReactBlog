package com.devcambo.usrapi.service.impl;

import com.devcambo.usrapi.dto.interaction.InteractionRequestDto;
import com.devcambo.usrapi.repository.InteractionRepository;
import com.devcambo.usrapi.service.InteractionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class InteractionServiceImpl implements InteractionService {

  private final InteractionRepository interactionRepository;

  @Override
  public void createInteraction(InteractionRequestDto interactionRequestDto) {}
}
