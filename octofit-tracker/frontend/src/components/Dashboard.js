import React from 'react';

function Dashboard() {
  return (
    <div className="container">
      <h1 className="mb-4">
        <i className="bi bi-speedometer2 me-2"></i>
        Dashboard
      </h1>
      
      {/* Statistics Cards Row */}
      <div className="row mb-4">
        <div className="col-md-3 mb-3">
          <div className="card text-white bg-primary">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-activity me-2"></i>
                Total Activities
              </h5>
              <p className="card-text display-4">24</p>
              <small>This month</small>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 mb-3">
          <div className="card text-white bg-success">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-clock-history me-2"></i>
                Total Hours
              </h5>
              <p className="card-text display-4">42</p>
              <small>Workout time</small>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 mb-3">
          <div className="card text-white bg-warning">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-fire me-2"></i>
                Calories Burned
              </h5>
              <p className="card-text display-4">8.5k</p>
              <small>This month</small>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 mb-3">
          <div className="card text-white bg-info">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-trophy-fill me-2"></i>
                Rank
              </h5>
              <p className="card-text display-4">#3</p>
              <small>Team ranking</small>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="row">
        <div className="col-md-8 mb-4">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">
                <i className="bi bi-list-task me-2"></i>
                Recent Activities
              </h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                      <th>Date</th>
                      <th>Activity</th>
                      <th>Duration</th>
                      <th>Calories</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2026-01-07</td>
                      <td>Running</td>
                      <td>45 min</td>
                      <td>520 kcal</td>
                      <td><span className="badge bg-success">Completed</span></td>
                    </tr>
                    <tr>
                      <td>2026-01-06</td>
                      <td>Cycling</td>
                      <td>60 min</td>
                      <td>680 kcal</td>
                      <td><span className="badge bg-success">Completed</span></td>
                    </tr>
                    <tr>
                      <td>2026-01-05</td>
                      <td>Swimming</td>
                      <td>30 min</td>
                      <td>420 kcal</td>
                      <td><span className="badge bg-success">Completed</span></td>
                    </tr>
                    <tr>
                      <td>2026-01-04</td>
                      <td>Weight Training</td>
                      <td>50 min</td>
                      <td>380 kcal</td>
                      <td><span className="badge bg-success">Completed</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className="btn btn-primary w-100">
                <i className="bi bi-plus-circle me-2"></i>
                Log New Activity
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions & Goals */}
        <div className="col-md-4 mb-4">
          <div className="card mb-3">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">
                <i className="bi bi-lightning-charge me-2"></i>
                Quick Actions
              </h5>
            </div>
            <div className="card-body">
              <button className="btn btn-outline-primary w-100 mb-2">
                <i className="bi bi-plus-circle me-2"></i>
                New Activity
              </button>
              <button className="btn btn-outline-success w-100 mb-2">
                <i className="bi bi-journal-text me-2"></i>
                View Workouts
              </button>
              <button className="btn btn-outline-info w-100">
                <i className="bi bi-people me-2"></i>
                Join Team
              </button>
            </div>
          </div>

          <div className="card">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">
                <i className="bi bi-bullseye me-2"></i>
                Weekly Goals
              </h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <small>Activities</small>
                  <small>4/5</small>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-success" style={{width: '80%'}}>80%</div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <small>Workout Hours</small>
                  <small>8/10</small>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" style={{width: '80%'}}>80%</div>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between mb-1">
                  <small>Calories</small>
                  <small>1800/2000</small>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-warning" style={{width: '90%'}}>90%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
