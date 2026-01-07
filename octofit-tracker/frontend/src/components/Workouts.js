import React, { useState } from 'react';

function Workouts() {
  const [showModal, setShowModal] = useState(false);

  const workouts = [
    { 
      id: 1, 
      name: 'Morning Run Routine', 
      type: 'Cardio', 
      duration: 45, 
      exercises: 3,
      difficulty: 'Medium',
      calories: 520
    },
    { 
      id: 2, 
      name: 'Strength Training Basic', 
      type: 'Strength', 
      duration: 60, 
      exercises: 8,
      difficulty: 'Hard',
      calories: 380
    },
    { 
      id: 3, 
      name: 'Yoga Flow', 
      type: 'Flexibility', 
      duration: 40, 
      exercises: 12,
      difficulty: 'Easy',
      calories: 180
    },
    { 
      id: 4, 
      name: 'HIIT Cardio Blast', 
      type: 'Cardio', 
      duration: 30, 
      exercises: 6,
      difficulty: 'Hard',
      calories: 450
    },
  ];

  const getDifficultyBadge = (difficulty) => {
    const badges = {
      'Easy': 'success',
      'Medium': 'warning',
      'Hard': 'danger'
    };
    return badges[difficulty] || 'secondary';
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>
          <i className="bi bi-heart-pulse me-2"></i>
          Workout Plans
        </h1>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          <i className="bi bi-plus-circle me-2"></i>
          Create Workout
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="btn-group mb-4" role="group">
        <button type="button" className="btn btn-outline-primary active">All</button>
        <button type="button" className="btn btn-outline-primary">Cardio</button>
        <button type="button" className="btn btn-outline-primary">Strength</button>
        <button type="button" className="btn btn-outline-primary">Flexibility</button>
      </div>

      {/* Workout Cards Grid */}
      <div className="row">
        {workouts.map((workout) => (
          <div key={workout.id} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <div className={`card-header bg-${getDifficultyBadge(workout.difficulty)} text-white`}>
                <h5 className="mb-0">{workout.name}</h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  <span className="badge bg-info mb-2">{workout.type}</span>
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-clock me-2 text-primary"></i>
                    <strong>Duration:</strong> {workout.duration} min
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-list-check me-2 text-success"></i>
                    <strong>Exercises:</strong> {workout.exercises}
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-speedometer me-2 text-warning"></i>
                    <strong>Difficulty:</strong> 
                    <span className={`badge bg-${getDifficultyBadge(workout.difficulty)} ms-2`}>
                      {workout.difficulty}
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-fire me-2 text-danger"></i>
                    <strong>Calories:</strong> ~{workout.calories} kcal
                  </li>
                </ul>
              </div>
              <div className="card-footer bg-white">
                <button className="btn btn-primary w-100 mb-2">
                  <i className="bi bi-play-fill me-1"></i>
                  Start Workout
                </button>
                <button className="btn btn-outline-secondary w-100">
                  <i className="bi bi-info-circle me-1"></i>
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Suggested Workouts Section */}
      <div className="card mt-4">
        <div className="card-header bg-info text-white">
          <h5 className="mb-0">
            <i className="bi bi-lightbulb me-2"></i>
            Suggested Workouts for You
          </h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead className="table-light">
                <tr>
                  <th>Workout Name</th>
                  <th>Type</th>
                  <th>Duration</th>
                  <th>Difficulty</th>
                  <th>Match Score</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Evening Jog</strong></td>
                  <td>Cardio</td>
                  <td>35 min</td>
                  <td><span className="badge bg-warning">Medium</span></td>
                  <td>
                    <div className="progress" style={{height: '20px'}}>
                      <div className="progress-bar bg-success" style={{width: '95%'}}>95%</div>
                    </div>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-success">
                      <i className="bi bi-plus"></i> Add
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><strong>Core Strength</strong></td>
                  <td>Strength</td>
                  <td>25 min</td>
                  <td><span className="badge bg-success">Easy</span></td>
                  <td>
                    <div className="progress" style={{height: '20px'}}>
                      <div className="progress-bar bg-success" style={{width: '88%'}}>88%</div>
                    </div>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-success">
                      <i className="bi bi-plus"></i> Add
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><strong>Stretching Session</strong></td>
                  <td>Flexibility</td>
                  <td>20 min</td>
                  <td><span className="badge bg-success">Easy</span></td>
                  <td>
                    <div className="progress" style={{height: '20px'}}>
                      <div className="progress-bar bg-success" style={{width: '82%'}}>82%</div>
                    </div>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-success">
                      <i className="bi bi-plus"></i> Add
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Create Workout Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">
                  <i className="bi bi-plus-circle me-2"></i>
                  Create Custom Workout
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Workout Name</label>
                    <input type="text" className="form-control" placeholder="e.g., Morning Cardio Blast" />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Type</label>
                      <select className="form-select">
                        <option>Cardio</option>
                        <option>Strength</option>
                        <option>Flexibility</option>
                        <option>Mixed</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Difficulty</label>
                      <select className="form-select">
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Duration (minutes)</label>
                    <input type="number" className="form-control" placeholder="e.g., 45" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows="3" placeholder="Describe your workout plan"></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  <i className="bi bi-save me-2"></i>
                  Create Workout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Workouts;
