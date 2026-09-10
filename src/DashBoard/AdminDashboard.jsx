import { useState } from 'react';
import './Dashboard.css';

const AdminDashboard = () => {
  const [showAddDriverModal, setShowAddDriverModal] = useState(false);
  const [showViewDriverModal, setShowViewDriverModal] = useState(false);

  const handleAddDriverClose = () => setShowAddDriverModal(false);
  const handleAddDriverShow = () => setShowAddDriverModal(true);

  const handleViewDriverClose = () => setShowViewDriverModal(false);
  const handleViewDriverShow = () => setShowViewDriverModal(true);

  const [driverName, setDriverName] = useState('');
  const [driverNumber, setDriverNumber] = useState('');
  const [driverAge, setDriverAge] = useState('');
  const [route, setRoute] = useState('');
  const [assignedBus, setAssignedBus] = useState('');

  const handleAddDriverSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      driverName,
      driverNumber,
      driverAge,
      route,
      assignedBus,
    });
    handleAddDriverClose();
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome Admin</h1>
      </header>
      <div className="dashboard-body">
        <aside className="dashboard-sidebar">
          <h2>Services</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
            <li>Service 5</li>
            <li>Service 6</li>
          </ul>
        </aside>
        <main className="dashboard-main">
          <div className="cardds-container">
            <div className="cardd" onClick={handleAddDriverShow}>
              <h3>Add Driver</h3>
              <p>Click to add a new driver.</p>
            </div>
            <div className="cardd" onClick={handleViewDriverShow}>
              <h3>View Driver</h3>
              <p>Click to view driver details.</p>
            </div>
          </div>
        </main>
      </div>

      {/* Add Driver Modal */}
      {showAddDriverModal && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Add Driver</h2>
            <form onSubmit={handleAddDriverSubmit} className='submit-form'>
                <label>Driver Name</label>
                <input
                  type="text"
                  value={driverName}
                  onChange={(e) => setDriverName(e.target.value)}
                  required
                />
                <label>Driver Number</label>
                <input
                  type="text"
                  value={driverNumber}
                  onChange={(e) => setDriverNumber(e.target.value)}
                  required
                />
                <label>Driver Age</label>
                <input
                  type="number"
                  value={driverAge}
                  onChange={(e) => setDriverAge(e.target.value)}
                  required
                />
                <label>Route</label>
                <select value={route} onChange={(e) => setRoute(e.target.value)} required>
                  <option value="" disabled>Select Route</option>
                  <option value="Route 1">Naubasta</option>
                  <option value="Route 2">Vijaynagar</option>
                  <option value="Route 2">Kalyanpur</option>
                </select>
                <label>Assigned Bus</label>
                <input
                  type="text"
                  value={assignedBus}
                  onChange={(e) => setAssignedBus(e.target.value)}
                  required
                />
              <button type="submit">Save Changes</button>
            </form>
            <button className="close-button" onClick={handleAddDriverClose}>Close</button>
          </div>
        </div>
      )}


      {/* View Driver Modal */}
      {showViewDriverModal && (
        <div className="popup">
          <div className="popup-inner">
            <h2>View Driver</h2>
            <p>Driver details go here.</p>
            <button className="close-button" onClick={handleViewDriverClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
