package com.devcambo.usrapi.service;

import com.devcambo.usrapi.dto.comment.CommentDto;
import com.devcambo.usrapi.dto.comment.CommentRequestDto;
import java.util.List;

public interface CommentService {
  List<CommentDto> findAllComments();
  CommentDto findCommentById(Integer id);
  CommentDto createComment(CommentRequestDto commentRequestDto);
  CommentDto updateComment(Integer id, CommentRequestDto commentRequestDto);
  void deleteComment(Integer id);
}
