package com.devcambo.usrapi.service.impl;

import com.devcambo.usrapi.dto.interaction.InteractionDto;
import com.devcambo.usrapi.entity.Interaction;
import com.devcambo.usrapi.entity.User;
import com.devcambo.usrapi.exception.ResourceNotFoundExp;
import com.devcambo.usrapi.mapper.PostMapper;
import com.devcambo.usrapi.repository.InteractionRepository;
import com.devcambo.usrapi.repository.UserRepository;
import com.devcambo.usrapi.service.InteractionService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class InteractionServiceImpl implements InteractionService {

  private final InteractionRepository interactionRepository;
  private final UserRepository userRepository;

  @Override
  public List<InteractionDto> findAllByUserId(Integer userId) {
    User user = userRepository
      .findById(userId)
      .orElseThrow(() -> new ResourceNotFoundExp("User", "id", userId.toString()));

    List<Interaction> interactions = interactionRepository.findAllByUser(user);
    return interactions
      .stream()
      .map(i ->
        new InteractionDto(
          i.getInteractionId(),
          i.getType().name(),
          i.getTimestamp(),
          PostMapper.toPostDto(i.getPost())
        )
      )
      .toList();
  }
}
