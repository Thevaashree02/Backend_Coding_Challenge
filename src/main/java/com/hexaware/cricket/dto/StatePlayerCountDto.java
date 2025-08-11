package com.hexaware.cricket.dto;

public class StatePlayerCountDto {
    private String stateName;
    private long playerCount;

    public StatePlayerCountDto(String stateName, long playerCount) {
        this.stateName = stateName;
        this.playerCount = playerCount;
    }

    public String getStateName() {
        return stateName;
    }
    public void setStateName(String stateName) {
        this.stateName = stateName;
    }
    public long getPlayerCount() {
        return playerCount;
    }
    public void setPlayerCount(long playerCount) {
        this.playerCount = playerCount;
    }
}

