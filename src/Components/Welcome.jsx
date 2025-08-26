import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

// Dashboard with buttons
function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container py-5">
        <div className="card shadow-lg w-100">
          <div className="card-body">
            <h1 className="card-title text-center mb-4">
              Player Management Dashboard
            </h1>
            <p className="text-center text-muted mb-5">
              Quick actions to view and maintain your players
            </p>

            {/* Buttons row */}
            <div className="row g-4 text-center">
              <div className="col-md-3 col-6">
                <button
                  className="btn btn-primary w-100 py-3"
                  onClick={() => navigate("/view-players")}
                >
                  View Players
                </button>
              </div>
              <div className="col-md-3 col-6">
                <button
                  className="btn btn-success w-100 py-3"
                  onClick={() => navigate("/add-players")}
                >
                  Add Players
                </button>
              </div>
              <div className="col-md-3 col-6">
                <button
                  className="btn btn-warning w-100 py-3"
                  onClick={() => navigate("/update-players")}
                >
                  Update Players
                </button>
              </div>
              <div className="col-md-3 col-6">
                <button
                  className="btn btn-danger w-100 py-3"
                  onClick={() => navigate("/delete-players")}
                >
                  Delete Players
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
