import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlayerService from "../Services/PlayerService";

function ViewPlayers() {
    const [players, setPlayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        PlayerService.getAllPlayers()
            .then((res) => {
                setPlayers(res.data);
                setFilteredPlayers(res.data); // show all initially
            })
            .catch((err) => {
                console.error("Error fetching players:", err);
            });
    }, []);

    // Perform filtering only when Search button is clicked
    const handleSearch = () => {
        const term = searchTerm.trim().toLowerCase();
        if (!term) {
            setFilteredPlayers(players);
            return;
        }

        const filtered = players.filter((player) =>
            player.playerName?.toLowerCase().includes(term) ||
            player.role?.toLowerCase().includes(term) ||
            player.stateName?.toLowerCase().includes(term) ||
            player.teamName?.toLowerCase().includes(term)
        );

        setFilteredPlayers(filtered);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Players List</h2>

            {/* Search Bar */}
            <div className="mb-3 d-flex justify-content-between align-items-center">
                <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Search by Name, Role, State, or Team..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    className="btn btn-primary ms-2"
                    onClick={handleSearch}
                >
                    Search
                </button>
                <span className="ms-3">
                    player(s) found : {filteredPlayers.length}
                </span>
            </div>

            {/* Players Table */}
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                <tr>
                    <th>Player ID</th>
                    <th>Player Name</th>
                    <th>Role</th>
                    <th>Jersey Number</th>
                    <th>State</th>
                    <th>Team</th>
                </tr>
                </thead>
                <tbody>
                {filteredPlayers.length > 0 ? (
                    filteredPlayers.map((player) => (
                        <tr key={player.playerId}>
                            <td>{player.playerId}</td>
                            <td>{player.playerName}</td>
                            <td>{player.role}</td>
                            <td>{player.jerseyNumber}</td>
                            <td>{player.stateName}</td>
                            <td>{player.teamName}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6" className="text-center">
                            No players found
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

            {/* Back Button */}
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

export default ViewPlayers;