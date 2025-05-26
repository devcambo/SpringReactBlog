package com.devcambo.usrapi.repository;

import com.devcambo.usrapi.entity.Interaction;
import com.devcambo.usrapi.entity.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InteractionRepository extends JpaRepository<Interaction, Integer> {
  List<Interaction> findAllByUser(User user);
}
