package com.devcambo.usrapi.controller;

import com.devcambo.usrapi.dto.auth.LoginReqDto;
import com.devcambo.usrapi.dto.auth.RegisterDto;
import com.devcambo.usrapi.dto.auth.TokenDto;
import com.devcambo.usrapi.dto.user.UserDto;
import com.devcambo.usrapi.service.AuthService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

  private static final Logger log = LoggerFactory.getLogger(AuthController.class);

  private final AuthService authService;

  public AuthController(AuthService authService) {
    this.authService = authService;
  }

  @PostMapping("/register")
  public ResponseEntity<TokenDto> registerUser(@RequestBody RegisterDto registerDto) {
    log.info("Registering user: {}", registerDto);
    return ResponseEntity.ok(authService.register(registerDto));
  }

  @PostMapping("/login")
  public ResponseEntity<TokenDto> loginUser(@RequestBody LoginReqDto loginReqDto) {
    log.info("Login user: {}", loginReqDto);
    return ResponseEntity.ok(authService.login(loginReqDto));
  }
}
