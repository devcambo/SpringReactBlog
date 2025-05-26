package com.devcambo.usrapi.controller;

import com.devcambo.usrapi.dto.interaction.InteractionDto;
import com.devcambo.usrapi.service.InteractionService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/interactions")
@RequiredArgsConstructor
@Slf4j
public class InteractionController {

  private final InteractionService interactionService;

  @GetMapping // -> /api/v1/interactions?userId=1
  public ResponseEntity<List<InteractionDto>> findAllByUserId(
    @RequestParam(required = false) Integer userId
  ) {
    log.info("Fetching all interactions for user with ID: {}", userId);
    return ResponseEntity.ok(interactionService.findAllByUserId(userId));
  }
}
