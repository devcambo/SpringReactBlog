package com.devcambo.usrapi.service;

import com.devcambo.usrapi.dto.auth.LoginReqDto;
import com.devcambo.usrapi.dto.auth.RegisterDto;
import com.devcambo.usrapi.dto.auth.TokenDto;

public interface AuthService {
  TokenDto register(RegisterDto registerDto);
  TokenDto login(LoginReqDto loginReqDto);
}
