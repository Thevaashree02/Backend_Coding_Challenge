import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlayerService from "../Services/PlayerService";

function UpdatePlayers() {
    const [playerId, setPlayerId] = useState("");
    const [formData, setFormData] = useState({
        playerName: "",
        role: "",
        jerseyNumber: "",
        description: "",
        stateName: "",
        teamName: "",
        totalMatches: "",
    });
    const [oldData, setOldData] = useState(null);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const fetchPlayerData = async () => {
        if (!playerId) {
            setMessage("⚠Please enter Player ID to fetch data.");
            return;
        }
        try {
            const response = await PlayerService.getPlayerById(playerId);
            setOldData(response.data);
            setMessage("Player data loaded. Enter fields to update.");
        } catch (error) {
            console.error("Error fetching player:", error);
            setMessage("Player not found or server error.");
            setOldData(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await PlayerService.updatePlayer(playerId, formData);
            alert("Player updated successfully!");
            setFormData({
                playerName: "",
                role: "",
                jerseyNumber: "",
                description: "",
                stateName: "",
                teamName: "",
                totalMatches: "",
            });
            setPlayerId("");
            setOldData(null);
        } catch (error) {
            console.error("Error updating player:", error);
            setMessage("Failed to update player.");
        }
    };


    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Update Player</h2>
            {message && <div className="alert alert-info">{message}</div>}

            <form onSubmit={handleSubmit} className="card p-4 shadow-lg">
                <div className="mb-3 d-flex">
                    <input
                        type="number"
                        className="form-control me-2"
                        placeholder="Enter Player ID"
                        value={playerId}
                        onChange={(e) => setPlayerId(e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        className="btn btn-info"
                        onClick={fetchPlayerData}
                    >
                        Fetch Player
                    </button>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Player Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="playerName"
                            value={formData.playerName}
                            onChange={handleChange}
                            placeholder={oldData?.playerName || "Current value"}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Role</label>
                        <input
                            type="text"
                            className="form-control"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            placeholder={oldData?.role || "Current value"}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Jersey Number</label>
                        <input
                            type="number"
                            className="form-control"
                            name="jerseyNumber"
                            value={formData.jerseyNumber}
                            onChange={handleChange}
                            placeholder={oldData?.jerseyNumber || "Current value"}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Total Matches</label>
                        <input
                            type="number"
                            className="form-control"
                            name="totalMatches"
                            value={formData.totalMatches}
                            onChange={handleChange}
                            placeholder={oldData?.totalMatches || "Current value"}
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder={oldData?.description || "Current value"}
                    ></textarea>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">State Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="stateName"
                            value={formData.stateName}
                            onChange={handleChange}
                            placeholder={oldData?.stateName || "Current value"}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Team Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="teamName"
                            value={formData.teamName}
                            onChange={handleChange}
                            placeholder={oldData?.teamName || "Current value"}
                        />
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">
                        Update Player
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => navigate("/")}
                    >
                        Back to Dashboard
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UpdatePlayers;
