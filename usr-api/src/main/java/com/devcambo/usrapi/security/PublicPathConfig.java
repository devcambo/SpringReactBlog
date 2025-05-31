package com.devcambo.usrapi.security;

import java.util.List;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PublicPathConfig {

  @Bean
  public List<String> publicPaths() {
    return List.of("/api/v1/products/**");
  }
}
