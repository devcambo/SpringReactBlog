package com.devcambo.usrapi.mapper;

import com.devcambo.usrapi.dto.comment.CommentDto;
import com.devcambo.usrapi.entity.Comment;

public class CommentMapper {

  public static CommentDto toCommentDto(Comment comment) {
    if (comment == null) {
      return null;
    }
    return new CommentDto(
      comment.getCommentId(),
      comment.getContent(),
      comment.getTimestamp()
    );
  }
}
