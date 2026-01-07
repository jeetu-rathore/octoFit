import React, { useState } from 'react';

function Teams() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);

  const teams = [
    { id: 1, name: 'Fitness Warriors', members: 12, totalPoints: 3420, rank: 1, captain: 'John Doe' },
    { id: 2, name: 'Cardio Kings', members: 8, totalPoints: 2980, rank: 2, captain: 'Jane Smith' },
    { id: 3, name: 'Strength Squad', members: 15, totalPoints: 2750, rank: 3, captain: 'Mike Johnson' },
    { id: 4, name: 'Yoga Enthusiasts', members: 10, totalPoints: 2420, rank: 4, captain: 'Sarah Williams' },
  ];

  const myTeam = teams[0];

  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Captain', points: 850, activities: 24 },
    { id: 2, name: 'Alice Brown', role: 'Member', points: 720, activities: 20 },
    { id: 3, name: 'Bob Wilson', role: 'Member', points: 680, activities: 18 },
    { id: 4, name: 'Carol Davis', role: 'Member', points: 590, activities: 16 },
  ];

  const getRankBadge = (rank) => {
    const badges = { 1: 'success', 2: 'info', 3: 'warning' };
    return badges[rank] || 'secondary';
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>
          <i className="bi bi-people-fill me-2"></i>
          Teams
        </h1>
        <div>
          <button className="btn btn-success me-2" onClick={() => setShowJoinModal(true)}>
            <i className="bi bi-box-arrow-in-right me-2"></i>
            Join Team
          </button>
          <button className="btn btn-primary" onClick={() => setShowCreateModal(true)}>
            <i className="bi bi-plus-circle me-2"></i>
            Create Team
          </button>
        </div>
      </div>

      {/* My Team Card */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card border-primary">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">
                <i className="bi bi-award me-2"></i>
                My Team: {myTeam.name}
              </h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3 text-center">
                  <h2 className="text-primary">{myTeam.members}</h2>
                  <p className="text-muted">Members</p>
                </div>
                <div className="col-md-3 text-center">
                  <h2 className="text-success">{myTeam.totalPoints}</h2>
                  <p className="text-muted">Total Points</p>
                </div>
                <div className="col-md-3 text-center">
                  <h2 className="text-warning">#{myTeam.rank}</h2>
                  <p className="text-muted">Rank</p>
                </div>
                <div className="col-md-3 text-center">
                  <h2 className="text-info">{myTeam.captain}</h2>
                  <p className="text-muted">Captain</p>
                </div>
              </div>
              
              {/* Team Members Table */}
              <h5 className="mt-4 mb-3">Team Members</h5>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Points</th>
                      <th>Activities</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamMembers.map((member, index) => (
                      <tr key={member.id}>
                        <td>{index + 1}</td>
                        <td>
                          <strong>{member.name}</strong>
                        </td>
                        <td>
                          <span className={`badge ${member.role === 'Captain' ? 'bg-warning' : 'bg-secondary'}`}>
                            {member.role}
                          </span>
                        </td>
                        <td>{member.points}</td>
                        <td>{member.activities}</td>
                        <td>
                          <button className="btn btn-sm btn-outline-primary">
                            <i className="bi bi-eye"></i> View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Teams Grid */}
      <h3 className="mb-3">All Teams</h3>
      <div className="row">
        {teams.map((team) => (
          <div key={team.id} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-light">
                <h5 className="mb-0">
                  <i className="bi bi-trophy-fill me-2 text-warning"></i>
                  {team.name}
                </h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Rank</span>
                    <span className={`badge bg-${getRankBadge(team.rank)}`}>
                      #{team.rank}
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Members</span>
                    <strong>{team.members}</strong>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Total Points</span>
                    <strong>{team.totalPoints}</strong>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Captain</span>
                    <span>{team.captain}</span>
                  </div>
                </div>
              </div>
              <div className="card-footer bg-white">
                <button className="btn btn-outline-primary btn-sm w-100">
                  <i className="bi bi-info-circle me-1"></i>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Team Modal */}
      {showCreateModal && (
        <div className="modal show d-block" tabIndex="-1" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">
                  <i className="bi bi-plus-circle me-2"></i>
                  Create New Team
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setShowCreateModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Team Name</label>
                    <input type="text" className="form-control" placeholder="Enter team name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows="3" placeholder="Describe your team"></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Team Type</label>
                    <select className="form-select">
                      <option>Public - Anyone can join</option>
                      <option>Private - Invitation only</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowCreateModal(false)}
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  <i className="bi bi-save me-2"></i>
                  Create Team
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Join Team Modal */}
      {showJoinModal && (
        <div className="modal show d-block" tabIndex="-1" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">
                  <i className="bi bi-box-arrow-in-right me-2"></i>
                  Join Team
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setShowJoinModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Team Code or Name</label>
                    <input type="text" className="form-control" placeholder="Enter team code or search by name" />
                  </div>
                  <div className="alert alert-info">
                    <i className="bi bi-info-circle me-2"></i>
                    Ask your team captain for the team code or search for public teams.
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowJoinModal(false)}
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-success">
                  <i className="bi bi-check-circle me-2"></i>
                  Join Team
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Teams;
