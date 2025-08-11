package com.hexaware.cricket.service;

import com.hexaware.cricket.entity.Player;
import java.util.List;

public interface IPlayerService {
    List<Player> getAllPlayers();
    Player getPlayerById(Long playerId);
    Player addPlayer(Player player);
    Player updatePlayer(Long playerId, Player updatedPlayer);
    String deletePlayerById(Long playerId);
}
