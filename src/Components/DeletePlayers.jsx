// src/components/DeleteUser.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlayerService from "../Services/PlayerService";

function DeleteUser() {
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();

    // Fetch players list
    useEffect(() => {
        PlayerService.getAllPlayers()
            .then((res) => {
                //console.log("API Response:", res.data);
                setPlayers(res.data);
            })
            .catch((err) => {
                console.error("Error fetching players:", err);
            });
    }, []);

    // Delete player by ID
    const handleDelete = (playerId) => {
        if (window.confirm("Are you sure you want to delete this player?")) {
            PlayerService.deletePlayer(playerId)
                .then(() => {
                    setPlayers(players.filter((p) => p.playerId !== playerId));
                    alert("Player deleted successfully");
                })
                .catch((err) => {
                    console.error("Error deleting player:", err);
                    alert("Failed to delete player");
                });
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center text-danger">Delete Players</h2>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                <tr>
                    <th>Player ID</th>
                    <th>Player Name</th>
                    <th>Role</th>
                    <th>Jersey Number</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {players && players.length > 0 ? (
                    players.map((player) => (
                        <tr key={player.playerId}>
                            <td>{player.playerId}</td>
                            <td>{player.playerName}</td>
                            <td>{player.role}</td>
                            <td>{player.jerseyNumber}</td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(player.playerId)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5" className="text-center">
                            No players found
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            <div className="text-center mt-4">
                <button
                    className="btn btn-secondary"
                    onClick={() => navigate("/")}
                >
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
}

export default DeleteUser;
