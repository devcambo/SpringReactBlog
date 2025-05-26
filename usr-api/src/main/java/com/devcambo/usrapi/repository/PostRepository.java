package com.devcambo.usrapi.repository;

import com.devcambo.usrapi.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Integer> {}
