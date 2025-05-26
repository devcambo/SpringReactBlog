package com.devcambo.usrapi.service;

import com.devcambo.usrapi.dto.user.UserDto;
import com.devcambo.usrapi.dto.user.UserRequestDto;
import java.util.List;

public interface UserService {
  List<UserDto> findAllUsers();
  UserDto findUserById(Integer id);
  UserDto createUser(UserRequestDto userRequestDto);
  UserDto updateUser(Integer id, UserRequestDto userRequestDto);
  void deleteUser(Integer id);
}
