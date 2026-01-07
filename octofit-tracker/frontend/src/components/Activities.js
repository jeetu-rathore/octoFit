import React, { useState } from 'react';

function Activities() {
  const [showModal, setShowModal] = useState(false);

  const activities = [
    { id: 1, date: '2026-01-07', type: 'Running', duration: 45, distance: '5.2 km', calories: 520, intensity: 'High' },
    { id: 2, date: '2026-01-06', type: 'Cycling', duration: 60, distance: '15 km', calories: 680, intensity: 'Medium' },
    { id: 3, date: '2026-01-05', type: 'Swimming', duration: 30, distance: '1 km', calories: 420, intensity: 'High' },
    { id: 4, date: '2026-01-04', type: 'Weight Training', duration: 50, distance: '-', calories: 380, intensity: 'High' },
    { id: 5, date: '2026-01-03', type: 'Yoga', duration: 40, distance: '-', calories: 180, intensity: 'Low' },
    { id: 6, date: '2026-01-02', type: 'Running', duration: 35, distance: '4.5 km', calories: 450, intensity: 'Medium' },
  ];

  const getIntensityBadge = (intensity) => {
    const badges = {
      'High': 'danger',
      'Medium': 'warning',
      'Low': 'success'
    };
    return badges[intensity] || 'secondary';
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>
          <i className="bi bi-activity me-2"></i>
          My Activities
        </h1>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          <i className="bi bi-plus-circle me-2"></i>
          Log Activity
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="btn-group mb-3" role="group">
        <button type="button" className="btn btn-outline-primary active">All</button>
        <button type="button" className="btn btn-outline-primary">Running</button>
        <button type="button" className="btn btn-outline-primary">Cycling</button>
        <button type="button" className="btn btn-outline-primary">Swimming</button>
        <button type="button" className="btn btn-outline-primary">Other</button>
      </div>

      {/* Activities Table */}
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Activity Log</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Activity Type</th>
                  <th>Duration (min)</th>
                  <th>Distance</th>
                  <th>Calories</th>
                  <th>Intensity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity) => (
                  <tr key={activity.id}>
                    <td>{activity.id}</td>
                    <td>{activity.date}</td>
                    <td>
                      <strong>{activity.type}</strong>
                    </td>
                    <td>{activity.duration}</td>
                    <td>{activity.distance}</td>
                    <td>{activity.calories} kcal</td>
                    <td>
                      <span className={`badge bg-${getIntensityBadge(activity.intensity)}`}>
                        {activity.intensity}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-1">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="table-light">
                <tr>
                  <td colSpan="3"><strong>Totals</strong></td>
                  <td><strong>260 min</strong></td>
                  <td><strong>25.7 km</strong></td>
                  <td><strong>2,630 kcal</strong></td>
                  <td colSpan="2"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for Adding Activity */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">
                  <i className="bi bi-plus-circle me-2"></i>
                  Log New Activity
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
                    <label className="form-label">Activity Type</label>
                    <select className="form-select">
                      <option>Running</option>
                      <option>Cycling</option>
                      <option>Swimming</option>
                      <option>Weight Training</option>
                      <option>Yoga</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input type="date" className="form-control" defaultValue="2026-01-07" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Duration (minutes)</label>
                    <input type="number" className="form-control" placeholder="e.g., 45" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Distance</label>
                    <input type="text" className="form-control" placeholder="e.g., 5.2 km" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Calories Burned</label>
                    <input type="number" className="form-control" placeholder="e.g., 520" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Intensity</label>
                    <select className="form-select">
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </select>
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
                  Save Activity
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Activities;
