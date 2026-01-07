import React from 'react';

function Leaderboard() {
  const leaderboardData = [
    { rank: 1, name: 'John Doe', team: 'Fitness Warriors', points: 850, activities: 24, streak: 15, change: '+2' },
    { rank: 2, name: 'Alice Brown', team: 'Fitness Warriors', points: 720, activities: 20, streak: 12, change: '0' },
    { rank: 3, name: 'Mike Johnson', team: 'Strength Squad', points: 680, activities: 18, streak: 10, change: '-1' },
    { rank: 4, name: 'Jane Smith', team: 'Cardio Kings', points: 590, activities: 16, streak: 8, change: '+3' },
    { rank: 5, name: 'Sarah Williams', team: 'Yoga Enthusiasts', points: 550, activities: 15, streak: 7, change: '+1' },
    { rank: 6, name: 'Bob Wilson', team: 'Fitness Warriors', points: 520, activities: 14, streak: 6, change: '-2' },
    { rank: 7, name: 'Carol Davis', team: 'Cardio Kings', points: 490, activities: 13, streak: 5, change: '0' },
    { rank: 8, name: 'David Lee', team: 'Strength Squad', points: 460, activities: 12, streak: 4, change: '+1' },
  ];

  const teamLeaderboard = [
    { rank: 1, name: 'Fitness Warriors', members: 12, totalPoints: 3420, avgPoints: 285, change: '0' },
    { rank: 2, name: 'Cardio Kings', members: 8, totalPoints: 2980, avgPoints: 372, change: '+1' },
    { rank: 3, name: 'Strength Squad', members: 15, totalPoints: 2750, avgPoints: 183, change: '-1' },
    { rank: 4, name: 'Yoga Enthusiasts', members: 10, totalPoints: 2420, avgPoints: 242, change: '0' },
  ];

  const getRankBadge = (rank) => {
    if (rank === 1) return 'warning';
    if (rank === 2) return 'secondary';
    if (rank === 3) return 'danger';
    return 'primary';
  };

  const getChangeIcon = (change) => {
    if (change.includes('+')) return { icon: 'arrow-up', color: 'success' };
    if (change.includes('-')) return { icon: 'arrow-down', color: 'danger' };
    return { icon: 'dash', color: 'secondary' };
  };

  return (
    <div className="container">
      <h1 className="mb-4">
        <i className="bi bi-trophy-fill me-2 text-warning"></i>
        Leaderboard
      </h1>

      {/* Filter/Tab Buttons */}
      <ul className="nav nav-tabs mb-4" role="tablist">
        <li className="nav-item" role="presentation">
          <button 
            className="nav-link active" 
            data-bs-toggle="tab" 
            data-bs-target="#individual"
          >
            <i className="bi bi-person me-2"></i>
            Individual Rankings
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button 
            className="nav-link" 
            data-bs-toggle="tab" 
            data-bs-target="#team"
          >
            <i className="bi bi-people me-2"></i>
            Team Rankings
          </button>
        </li>
      </ul>

      <div className="tab-content">
        {/* Individual Leaderboard */}
        <div className="tab-pane fade show active" id="individual">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">
                <i className="bi bi-list-ol me-2"></i>
                Top Performers This Month
              </h5>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-dark">
                    <tr>
                      <th>Rank</th>
                      <th>Name</th>
                      <th>Team</th>
                      <th>Points</th>
                      <th>Activities</th>
                      <th>Streak</th>
                      <th>Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardData.map((user) => {
                      const changeData = getChangeIcon(user.change);
                      return (
                        <tr key={user.rank} className={user.rank <= 3 ? 'table-active' : ''}>
                          <td>
                            <span className={`badge bg-${getRankBadge(user.rank)}`}>
                              {user.rank === 1 && <i className="bi bi-trophy-fill me-1"></i>}
                              #{user.rank}
                            </span>
                          </td>
                          <td>
                            <strong>{user.name}</strong>
                            {user.rank <= 3 && (
                              <i className={`bi bi-star-fill ms-2 text-${getRankBadge(user.rank)}`}></i>
                            )}
                          </td>
                          <td>{user.team}</td>
                          <td>
                            <strong className="text-primary">{user.points}</strong>
                          </td>
                          <td>{user.activities}</td>
                          <td>
                            <span className="badge bg-success">
                              <i className="bi bi-fire me-1"></i>
                              {user.streak} days
                            </span>
                          </td>
                          <td>
                            <i className={`bi bi-${changeData.icon} text-${changeData.color}`}></i>
                            <span className={`ms-1 text-${changeData.color}`}>{user.change}</span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="row mt-4">
            <div className="col-md-4 mb-3">
              <div className="card text-center">
                <div className="card-body">
                  <i className="bi bi-trophy-fill text-warning" style={{fontSize: '3rem'}}></i>
                  <h5 className="card-title mt-2">Your Rank</h5>
                  <p className="card-text display-6">#1</p>
                  <p className="text-muted">Keep up the great work!</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card text-center">
                <div className="card-body">
                  <i className="bi bi-bar-chart-fill text-primary" style={{fontSize: '3rem'}}></i>
                  <h5 className="card-title mt-2">Your Points</h5>
                  <p className="card-text display-6">850</p>
                  <p className="text-muted">This month</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card text-center">
                <div className="card-body">
                  <i className="bi bi-fire text-danger" style={{fontSize: '3rem'}}></i>
                  <h5 className="card-title mt-2">Current Streak</h5>
                  <p className="card-text display-6">15</p>
                  <p className="text-muted">Days in a row</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Leaderboard */}
        <div className="tab-pane fade" id="team">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">
                <i className="bi bi-shield-fill me-2"></i>
                Team Rankings
              </h5>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-dark">
                    <tr>
                      <th>Rank</th>
                      <th>Team Name</th>
                      <th>Members</th>
                      <th>Total Points</th>
                      <th>Avg Points/Member</th>
                      <th>Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamLeaderboard.map((team) => {
                      const changeData = getChangeIcon(team.change);
                      return (
                        <tr key={team.rank} className={team.rank <= 3 ? 'table-active' : ''}>
                          <td>
                            <span className={`badge bg-${getRankBadge(team.rank)}`}>
                              {team.rank === 1 && <i className="bi bi-trophy-fill me-1"></i>}
                              #{team.rank}
                            </span>
                          </td>
                          <td>
                            <strong>{team.name}</strong>
                            {team.rank <= 3 && (
                              <i className={`bi bi-star-fill ms-2 text-${getRankBadge(team.rank)}`}></i>
                            )}
                          </td>
                          <td>
                            <i className="bi bi-people-fill me-1"></i>
                            {team.members}
                          </td>
                          <td>
                            <strong className="text-success">{team.totalPoints}</strong>
                          </td>
                          <td>{team.avgPoints}</td>
                          <td>
                            <i className={`bi bi-${changeData.icon} text-${changeData.color}`}></i>
                            <span className={`ms-1 text-${changeData.color}`}>{team.change}</span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
