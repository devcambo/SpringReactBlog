package com.devcambo.usrapi.service.impl;

import com.devcambo.usrapi.dto.auth.LoginReqDto;
import com.devcambo.usrapi.dto.auth.RegisterDto;
import com.devcambo.usrapi.dto.auth.TokenDto;
import com.devcambo.usrapi.entity.User;
import com.devcambo.usrapi.repository.UserRepository;
import com.devcambo.usrapi.security.JwtService;
import com.devcambo.usrapi.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

  private final UserRepository userRepository;
  private final PasswordEncoder encoder;
  private final AuthenticationManager authenticationManager;
  private final JwtService jwtService;

  @Override
  public TokenDto register(RegisterDto registerDto) {
    User user = new User();
    user.setUsername(registerDto.username());
    user.setEmail(registerDto.email());
    user.setPassword(encoder.encode(registerDto.password()));
    user.setRoles("user");
    User registeredUser = userRepository.save(user);
    return new TokenDto(generateJWTToken(registeredUser.getEmail()));
  }

  @Override
  public TokenDto login(LoginReqDto loginReqDto) {
    Authentication authentication = authenticationManager.authenticate(
      new UsernamePasswordAuthenticationToken(loginReqDto.email(), loginReqDto.pwd())
    );
    if (authentication.isAuthenticated()) {
      String token = generateJWTToken(loginReqDto.email());
      return new TokenDto(token);
    } else {
      throw new UsernameNotFoundException("Invalid user request!");
    }
  }

  private String generateJWTToken(String email) {
    return jwtService.generateToken(email);
  }
}
