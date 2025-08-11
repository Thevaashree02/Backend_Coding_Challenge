package com.hexaware.cricket.dto;


import jakarta.validation.constraints.*;

public class PlayerDto {

    private Long playerId;

    @NotBlank(message = "Player name is required")
    private String playerName;

    @NotNull(message = "Jersey number is required")
    @Min(value = 0, message = "Jersey number must be >= 0")
    @Max(value = 99, message = "Jersey number must be <= 99")
    private Integer jerseyNumber;

    @NotBlank(message = "Role is required")
    @Pattern(regexp = "Batsman|Bowler|Keeper|All Rounder", 
             message = "Role must be one of: Batsman, Bowler, Keeper, All Rounder")
    private String role;
    
    @NotNull(message = "Total matches is required")
    @Min(value = 0, message = "Total matches cannot be negative")
    private Integer totalMatches;

    @NotBlank(message = "Team name is required")
    private String teamName;

    @NotBlank(message = "State name is required")
    private String stateName;

    @Size(max = 500, message = "Description cannot exceed 500 characters")
    private String description;

    public PlayerDto() {}

    public PlayerDto(Long playerId, String playerName, Integer jerseyNumber, String role,
                     Integer totalMatches, String teamName, String stateName, String description) {
        this.playerId = playerId;
        this.playerName = playerName;
        this.jerseyNumber = jerseyNumber;
        this.role = role;
        this.totalMatches = totalMatches;
        this.teamName = teamName;
        this.stateName = stateName;
        this.description = description;
    }

	public Long getPlayerId() {
		return playerId;
	}

	public void setPlayerId(Long playerId) {
		this.playerId = playerId;
	}

	public String getPlayerName() {
		return playerName;
	}

	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}

	public Integer getJerseyNumber() {
		return jerseyNumber;
	}

	public void setJerseyNumber(Integer jerseyNumber) {
		this.jerseyNumber = jerseyNumber;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Integer getTotalMatches() {
		return totalMatches;
	}

	public void setTotalMatches(Integer totalMatches) {
		this.totalMatches = totalMatches;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public String getStateName() {
		return stateName;
	}

	public void setStateName(String stateName) {
		this.stateName = stateName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
    

}
