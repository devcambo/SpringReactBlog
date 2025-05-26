package com.devcambo.usrapi.controller;

import com.devcambo.usrapi.dto.comment.CommentDto;
import com.devcambo.usrapi.dto.comment.CommentRequestDto;
import com.devcambo.usrapi.service.CommentService;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/comments")
@RequiredArgsConstructor
@Slf4j
public class CommentController {

  private final CommentService commentService;

  // TODO: implement pagination and sorting
  @GetMapping
  public ResponseEntity<List<CommentDto>> findAll() {
    log.info("Fetching all comments");
    return ResponseEntity.ok(commentService.findAllComments());
  }

  @GetMapping("/{id}")
  public ResponseEntity<CommentDto> findById(@PathVariable Integer id) {
    log.info("Fetching comment with id: {}", id);
    return ResponseEntity.ok(commentService.findCommentById(id));
  }

  @PostMapping
  public ResponseEntity<CommentDto> create(
    @Valid @RequestBody CommentRequestDto commentRequestDto
  ) {
    log.info("Creating new comment: {}", commentRequestDto);
    return ResponseEntity
      .status(HttpStatus.CREATED)
      .body(commentService.createComment(commentRequestDto));
  }

  @PutMapping("/{id}")
  public ResponseEntity<CommentDto> update(
    @PathVariable Integer id,
    @Valid @RequestBody CommentRequestDto commentRequestDto
  ) {
    log.info("Updating comment with id: {}", id);
    return ResponseEntity.ok(commentService.updateComment(id, commentRequestDto));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable Integer id) {
    log.info("Deleting comment with id: {}", id);
    commentService.deleteComment(id);
    return ResponseEntity.noContent().build();
  }
}
