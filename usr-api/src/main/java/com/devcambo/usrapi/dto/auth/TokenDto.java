package com.devcambo.usrapi.dto.auth;

import com.fasterxml.jackson.annotation.JsonProperty;

public record TokenDto(@JsonProperty("access_token") String accessToken) {}
