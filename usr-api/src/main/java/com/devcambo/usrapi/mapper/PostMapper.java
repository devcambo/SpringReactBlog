package com.devcambo.usrapi.mapper;

import com.devcambo.usrapi.dto.post.PostDto;
import com.devcambo.usrapi.dto.post.PostRequestDto;
import com.devcambo.usrapi.entity.Post;

public class PostMapper {

  public static PostDto toPostDto(Post post) {
    if (post == null) {
      return null;
    }
    return new PostDto(
      post.getPostId(),
      post.getTitle(),
      post.getContent(),
      post.getCategory(),
      post.getTags(),
      post.getPublicationDate()
    );
  }

  public static Post toPost(PostRequestDto postRequestDto) {
    if (postRequestDto == null) {
      return null;
    }
    Post post = new Post();
    post.setTitle(postRequestDto.title());
    post.setContent(postRequestDto.content());
    post.setCategory(postRequestDto.category());
    post.setTags(postRequestDto.tags());
    return post;
  }
}
