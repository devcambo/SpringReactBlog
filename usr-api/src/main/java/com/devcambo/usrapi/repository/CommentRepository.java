package com.devcambo.usrapi.repository;

import com.devcambo.usrapi.entity.Comment;
import com.devcambo.usrapi.entity.Post;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
  List<Comment> findAllByPost(Post post);
}
