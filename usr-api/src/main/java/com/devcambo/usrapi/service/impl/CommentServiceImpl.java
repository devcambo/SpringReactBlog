package com.devcambo.usrapi.service.impl;

import com.devcambo.usrapi.dto.comment.CommentDto;
import com.devcambo.usrapi.dto.comment.CommentRequestDto;
import com.devcambo.usrapi.entity.*;
import com.devcambo.usrapi.exception.ResourceNotFoundExp;
import com.devcambo.usrapi.mapper.CommentMapper;
import com.devcambo.usrapi.repository.CommentRepository;
import com.devcambo.usrapi.repository.InteractionRepository;
import com.devcambo.usrapi.repository.PostRepository;
import com.devcambo.usrapi.repository.UserRepository;
import com.devcambo.usrapi.service.CommentService;
import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {

  private final CommentRepository commentRepository;
  private final UserRepository userRepository;
  private final PostRepository postRepository;
  private final InteractionRepository interactionRepository;

  @Override
  public List<CommentDto> findAllComments() {
    List<Comment> comments = commentRepository.findAll();
    return comments.stream().map(CommentMapper::toCommentDto).toList();
  }

  @Override
  public CommentDto findCommentById(Integer id) {
    Comment comment = getCommentById(id);
    return CommentMapper.toCommentDto(comment);
  }

  @Override
  public CommentDto createComment(CommentRequestDto commentRequestDto) {
    User commenters = userRepository
      .findById(commentRequestDto.userId())
      .orElseThrow(() ->
        new ResourceNotFoundExp("User", "id", commentRequestDto.userId().toString())
      );

    Post post = postRepository
      .findById(commentRequestDto.postId())
      .orElseThrow(() ->
        new ResourceNotFoundExp("Post", "id", commentRequestDto.postId().toString())
      );

    Comment comment = new Comment();
    comment.setContent(commentRequestDto.content());
    comment.setTimestamp(LocalDateTime.now());
    comment.setUser(commenters);
    comment.setPost(post);
    Comment savedComment = commentRepository.save(comment);

    // Update the interaction
    Interaction interaction = new Interaction();
    interaction.setType(InteractionType.COMMENT);
    interaction.setTimestamp(LocalDateTime.now());
    interaction.setUser(commenters);
    interaction.setPost(post);
    interactionRepository.save(interaction);

    return CommentMapper.toCommentDto(savedComment);
  }

  @Override
  public CommentDto updateComment(Integer id, CommentRequestDto commentRequestDto) {
    Comment existingComment = getCommentById(id);

    User commenters = userRepository
      .findById(commentRequestDto.userId())
      .orElseThrow(() ->
        new ResourceNotFoundExp("User", "id", commentRequestDto.userId().toString())
      );

    Post post = postRepository
      .findById(commentRequestDto.postId())
      .orElseThrow(() ->
        new ResourceNotFoundExp("Post", "id", commentRequestDto.postId().toString())
      );

    existingComment.setContent(commentRequestDto.content());
    existingComment.setContent(commentRequestDto.content());
    existingComment.setTimestamp(existingComment.getTimestamp());
    existingComment.setUser(commenters);
    existingComment.setPost(post);
    Comment updatedComment = commentRepository.save(existingComment);
    return CommentMapper.toCommentDto(updatedComment);
  }

  @Override
  public void deleteComment(Integer id) {
    Comment comment = getCommentById(id);
    commentRepository.delete(comment);
  }

  public Comment getCommentById(Integer id) {
    return commentRepository
      .findById(id)
      .orElseThrow(() -> new ResourceNotFoundExp("Comment", "id", id.toString()));
  }
}
