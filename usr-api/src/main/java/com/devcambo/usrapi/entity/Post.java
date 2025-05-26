package com.devcambo.usrapi.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "posts")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Post {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer postId;

  @Column(length = 400, nullable = false)
  private String title;

  @Lob
  private String content;

  @Column(length = 300)
  private String category;

  private LocalDateTime publicationDate;

  @Column(length = 300)
  private String tags;

  // One-to-many relationship with Comment
  @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private List<Comment> comments;

  // One-to-many relationship with Interaction
  @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private List<Interaction> interactions;
}
