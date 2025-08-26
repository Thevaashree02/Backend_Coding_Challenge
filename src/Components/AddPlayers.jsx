import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlayerService from "../Services/PlayerService";

function AddPlayers() {
    const [formData, setFormData] = useState({
        playerName: "",
        role: "",
        jerseyNumber: "",
        description: "",
        stateName: "",
        teamName: "",
        totalMatches: "",
    });

    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...formData,
            jerseyNumber: formData.jerseyNumber
                ? parseInt(formData.jerseyNumber, 10)
                : 0,
            totalMatches: formData.totalMatches
                ? parseInt(formData.totalMatches, 10)
                : 0,
        };

        try {
            await PlayerService.addPlayer(payload);
            alert("Player added successfully!");
            setFormData({
                playerName: "",
                role: "",
                jerseyNumber: "",
                description: "",
                stateName: "",
                teamName: "",
                totalMatches: "",
            });
        } catch (error) {
            console.error("Error adding player:", error);
            setMessage("Failed to add player. Please try again.");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Add Player</h2>
            {message && <div className="alert alert-info">{message}</div>}
            <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Player Name</label>
                        <input
                            type="text"
                            name="playerName"
                            value={formData.playerName}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Role</label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="form-control"
                            required
                        >
                            <option value="">-- Select Role --</option>
                            <option value="Batsman">Batsman</option>
                            <option value="Bowler">Bowler</option>
                            <option value="Keeper">Keeper</option>
                            <option value="All Rounder">All Rounder</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Jersey Number</label>
                        <input
                            type="number"
                            name="jerseyNumber"
                            value={formData.jerseyNumber}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Total Matches</label>
                        <input
                            type="number"
                            name="totalMatches"
                            value={formData.totalMatches}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="form-control"
                        rows="2"
                    />
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">State Name</label>
                        <input
                            type="text"
                            name="stateName"
                            value={formData.stateName}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Team Name</label>
                        <input
                            type="text"
                            name="teamName"
                            value={formData.teamName}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">
                        Add Player
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

export default AddPlayers;
