import http from "../HttpCommon";

class PlayerService {
    // Get all players
    getAllPlayers() {
        return http.get("");
    }

    // Get player by ID
    getPlayerById(playerId) {
        return http.get(`/${playerId}`);
    }

    // Add new player
    addPlayer(player) {
        return http.post("", player);
    }

    // Update player by ID
    updatePlayer(playerId, player) {
        return http.put(`/${playerId}`, player);
    }

    // Delete player by ID
    deletePlayer(playerId) {
        return http.delete(`/${playerId}`);
    }

    // Get player count by state
    getPlayerCountByState() {
        return http.get("/state-player-count");
    }
}

export default new PlayerService();
