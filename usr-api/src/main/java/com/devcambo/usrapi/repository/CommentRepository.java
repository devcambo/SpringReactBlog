package com.devcambo.usrapi.repository;

import com.devcambo.usrapi.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Integer> {}
