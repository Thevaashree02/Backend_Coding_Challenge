package com.hexaware.cricket.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hexaware.cricket.dto.StatePlayerCountDto;
import com.hexaware.cricket.entity.Player;
import com.hexaware.cricket.service.IPlayerService;

@RestController
@RequestMapping("/api/players")
public class PlayerController {

    @Autowired
    IPlayerService service;

    @GetMapping
    public ResponseEntity<List<Player>> getAllPlayers() {
        return new ResponseEntity<>(service.getAllPlayers(), HttpStatus.OK);
    }

    @GetMapping("/{playerId}")
    public ResponseEntity<Player> getPlayerById(@PathVariable Long playerId) {
        return new ResponseEntity<>(service.getPlayerById(playerId), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Player> addPlayer(@RequestBody Player player) {
        return new ResponseEntity<>(service.addPlayer(player), HttpStatus.CREATED);
    }

    @PutMapping("/{playerId}")
    public ResponseEntity<Player> updatePlayer(@PathVariable Long playerId, @RequestBody Player player) {
        return new ResponseEntity<>(service.updatePlayer(playerId, player), HttpStatus.OK);
    }

    @DeleteMapping("/{playerId}")
    public ResponseEntity<String> deletePlayer(@PathVariable Long playerId) {
        return new ResponseEntity<>(service.deletePlayerById(playerId), HttpStatus.OK);
    }
    
    @GetMapping("/state-player-count")
    public ResponseEntity<List<StatePlayerCountDto>> getPlayerCountByState() {
        List<StatePlayerCountDto> result = service.getPlayerCountByState();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

}
