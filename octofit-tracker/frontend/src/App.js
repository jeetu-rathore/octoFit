import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Activities from './components/Activities';
import Teams from './components/Teams';
import Leaderboard from './components/Leaderboard';
import Workouts from './components/Workouts';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <Router>
      <div className="App">
        {/* Bootstrap Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="/logo.png" alt="OctoFit Logo" />
              OctoFit Tracker
            </Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link 
                    className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}
                    to="/"
                    onClick={() => setActiveTab('dashboard')}
                  >
                    <i className="bi bi-speedometer2 me-1"></i>
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className={`nav-link ${activeTab === 'activities' ? 'active' : ''}`}
                    to="/activities"
                    onClick={() => setActiveTab('activities')}
                  >
                    <i className="bi bi-activity me-1"></i>
                    Activities
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className={`nav-link ${activeTab === 'workouts' ? 'active' : ''}`}
                    to="/workouts"
                    onClick={() => setActiveTab('workouts')}
                  >
                    <i className="bi bi-heart-pulse me-1"></i>
                    Workouts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className={`nav-link ${activeTab === 'teams' ? 'active' : ''}`}
                    to="/teams"
                    onClick={() => setActiveTab('teams')}
                  >
                    <i className="bi bi-people-fill me-1"></i>
                    Teams
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className={`nav-link ${activeTab === 'leaderboard' ? 'active' : ''}`}
                    to="/leaderboard"
                    onClick={() => setActiveTab('leaderboard')}
                  >
                    <i className="bi bi-trophy-fill me-1"></i>
                    Leaderboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container-fluid mt-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="footer mt-5 py-3 bg-light">
          <div className="container text-center">
            <span className="text-muted">OctoFit Tracker © 2026 - Track Your Fitness Journey</span>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
