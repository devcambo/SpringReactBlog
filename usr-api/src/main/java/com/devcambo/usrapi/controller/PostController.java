package com.devcambo.usrapi.controller;

import com.devcambo.usrapi.dto.post.PostDto;
import com.devcambo.usrapi.dto.post.PostRequestDto;
import com.devcambo.usrapi.service.PostService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/posts")
@RequiredArgsConstructor
@Slf4j
public class PostController {

  private final PostService postService;

  // TODO: implement pagination and sorting
  @GetMapping
  public ResponseEntity<List<PostDto>> findAll(HttpServletRequest request) {
    log.info("Fetching all posts");
    // Print cookie value
    Cookie[] cookies = request.getCookies();
    HttpSession session = request.getSession();
    if (cookies != null) {
      for (Cookie cookie : cookies) {
        log.info("Cookie name: {}, value: {}", cookie.getName(), cookie.getValue());
      }
    }
    if (session != null) {
      log.info("Session id: {}", session.getId());
    }
    return ResponseEntity.ok(postService.findAllPosts());
  }

  @GetMapping("/{id}")
  public ResponseEntity<PostDto> findById(@PathVariable Integer id) {
    log.info("Fetching post with id: {}", id);
    return ResponseEntity.ok(postService.findPostById(id));
  }

  @PostMapping
  public ResponseEntity<PostDto> create(
    @Valid @RequestBody PostRequestDto postRequestDto
  ) {
    log.info("Creating new post: {}", postRequestDto);
    return ResponseEntity
      .status(HttpStatus.CREATED)
      .body(postService.createPost(postRequestDto));
  }

  @PutMapping("/{id}")
  public ResponseEntity<PostDto> update(
    @PathVariable Integer id,
    @Valid @RequestBody PostRequestDto postRequestDto
  ) {
    log.info("Updating post with id: {}", id);
    return ResponseEntity.ok(postService.updatePost(id, postRequestDto));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable Integer id) {
    log.info("Deleting post with id: {}", id);
    postService.deletePost(id);
    return ResponseEntity.noContent().build();
  }
}
