package com.devcambo.usrapi.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "interactions")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Interaction {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer interactionId;

  @Enumerated(EnumType.STRING)
  private InteractionType type;

  private LocalDateTime timestamp;

  // Many-to-one relationship with User
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id", referencedColumnName = "userId")
  private User user;

  // Many-to-one relationship with Post
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "post_id", referencedColumnName = "postId")
  private Post post;
}
