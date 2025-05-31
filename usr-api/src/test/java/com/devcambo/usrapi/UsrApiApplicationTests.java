package com.devcambo.usrapi;

import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

@SpringBootTest
class UsrApiApplicationTests {

  @Test
  void contextLoads() {
    var res = Stream
      .of("admin,user".split(","))
      .map(SimpleGrantedAuthority::new)
      .collect(Collectors.toList());
    res.stream().forEach(System.out::println);
  }
}
