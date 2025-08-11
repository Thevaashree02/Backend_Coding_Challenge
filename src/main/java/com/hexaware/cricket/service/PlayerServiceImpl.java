package com.hexaware.cricket.service;

import com.hexaware.cricket.entity.Player;
import com.hexaware.cricket.repository.PlayerRepository;
import com.hexaware.cricket.exception.PlayerNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerServiceImpl implements IPlayerService {

    @Autowired
    private PlayerRepository playerRepository;

    @Override
    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    @Override
    public Player getPlayerById(Long playerId) {
        return playerRepository.findById(playerId)
                .orElseThrow(() -> new PlayerNotFoundException("Player not found with ID: " + playerId));
    }

    @Override
    public Player addPlayer(Player player) {
        return playerRepository.save(player);
    }

    @Override
    public Player updatePlayer(Long playerId, Player player) {
        Player existingPlayer = playerRepository.findById(playerId)
                .orElseThrow(() -> new PlayerNotFoundException("Player not found with ID: " + playerId));

      
        existingPlayer.setPlayerName(player.getPlayerName());
        existingPlayer.setJerseyNumber(player.getJerseyNumber());
        existingPlayer.setRole(player.getRole());
        existingPlayer.setTotalMatches(player.getTotalMatches());
        existingPlayer.setTeamName(player.getTeamName());
        existingPlayer.setStateName(player.getStateName());
        existingPlayer.setDescription(player.getDescription());

     
        return playerRepository.save(existingPlayer);
    }

    @Override
    public String deletePlayerById(Long playerId) {
        Player player = playerRepository.findById(playerId)
                .orElseThrow(() -> new PlayerNotFoundException("Player not found with ID: " + playerId));
        playerRepository.delete(player);
        return "Player deleted successfully with ID: " + playerId;
    }
}
