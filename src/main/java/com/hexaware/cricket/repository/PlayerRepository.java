package com.hexaware.cricket.repository;

import com.hexaware.cricket.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {}
