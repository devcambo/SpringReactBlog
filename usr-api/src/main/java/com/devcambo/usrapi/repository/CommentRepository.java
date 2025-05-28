package com.devcambo.usrapi.repository;

import com.devcambo.usrapi.entity.Comment;
import com.devcambo.usrapi.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
    List<Comment> findAllByPost(Post post);
}
