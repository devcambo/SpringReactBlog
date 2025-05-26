package com.devcambo.usrapi.service;

import com.devcambo.usrapi.dto.interaction.InteractionDto;
import java.util.List;

public interface InteractionService {
  List<InteractionDto> findAllByUserId(Integer userId);
}
