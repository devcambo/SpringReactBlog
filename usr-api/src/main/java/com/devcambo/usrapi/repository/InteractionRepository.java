package com.devcambo.usrapi.repository;

import com.devcambo.usrapi.entity.Interaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InteractionRepository extends JpaRepository<Interaction, Integer> {}
