package com.devcambo.usrapi.mapper;

import com.devcambo.usrapi.dto.user.UserDto;
import com.devcambo.usrapi.dto.user.UserRequestDto;
import com.devcambo.usrapi.entity.User;

public class UserMapper {

  public static UserDto toUserDto(User user) {
    if (user == null) {
      return null;
    }
    return new UserDto(
      user.getUserId(),
      user.getUsername(),
      user.getEmail(),
      user.getBio(),
      user.getProfilePicture(),
      user.getCreatedAt()
    );
  }

  public static User toUser(UserRequestDto userRequestDto) {
    if (userRequestDto == null) {
      return null;
    }
    User user = new User();
    user.setUsername(userRequestDto.username());
    user.setEmail(userRequestDto.email());
    user.setPassword(userRequestDto.password());
    user.setBio(userRequestDto.bio());
    user.setProfilePicture(userRequestDto.profilePicture());
    return user;
  }
}
