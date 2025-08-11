package com.hexaware.cricket.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hexaware.cricket.dto.StatePlayerCountDto;
import com.hexaware.cricket.entity.Player;

import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

    @Query("SELECT new com.hexaware.cricket.dto.StatePlayerCountDto(p.stateName, COUNT(p)) " + 
           "FROM Player p GROUP BY p.stateName")
    List<StatePlayerCountDto> countPlayersByState();
}
