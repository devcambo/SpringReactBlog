package com.devcambo.usrapi.service;

import com.devcambo.usrapi.dto.post.PostDto;
import com.devcambo.usrapi.dto.post.PostRequestDto;
import java.util.List;

public interface PostService {
  List<PostDto> findAllPosts();
  PostDto findPostById(Integer id);
  PostDto createPost(PostRequestDto postRequestDto);
  PostDto updatePost(Integer id, PostRequestDto postRequestDto);
  void deletePost(Integer id);
}
