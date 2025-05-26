package com.devcambo.usrapi.service.impl;

import com.devcambo.usrapi.dto.post.PostDto;
import com.devcambo.usrapi.dto.post.PostRequestDto;
import com.devcambo.usrapi.entity.Post;
import com.devcambo.usrapi.exception.ResourceNotFoundExp;
import com.devcambo.usrapi.mapper.PostMapper;
import com.devcambo.usrapi.repository.PostRepository;
import com.devcambo.usrapi.service.PostService;
import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {

  private final PostRepository postRepository;

  @Override
  public List<PostDto> findAllPosts() {
    List<Post> posts = postRepository.findAll();
    return posts.stream().map(PostMapper::toPostDto).toList();
  }

  @Override
  public PostDto findPostById(Integer id) {
    Post post = getPostById(id);
    return PostMapper.toPostDto(post);
  }

  @Override
  public PostDto createPost(PostRequestDto postRequestDto) {
    Post post = PostMapper.toPost(postRequestDto);
    post.setPublicationDate(LocalDateTime.now());
    return PostMapper.toPostDto(postRepository.save(post));
  }

  @Override
  public PostDto updatePost(Integer id, PostRequestDto postRequestDto) {
    Post existingPost = getPostById(id);
    existingPost.setTitle(postRequestDto.title());
    existingPost.setContent(postRequestDto.content());
    existingPost.setCategory(postRequestDto.category());
    existingPost.setTags(postRequestDto.tags());
    existingPost.setPublicationDate(existingPost.getPublicationDate());
    return PostMapper.toPostDto(postRepository.save(existingPost));
  }

  @Override
  public void deletePost(Integer id) {
    Post post = getPostById(id);
    postRepository.deleteById(post.getPostId());
  }

  public Post getPostById(Integer id) {
    return postRepository
      .findById(id)
      .orElseThrow(() -> new ResourceNotFoundExp("Post", "id", id.toString()));
  }
}
