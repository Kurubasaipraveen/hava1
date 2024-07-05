import React, { useState } from 'react';
import './Airports.css';

const initialAirportsData = [
  {
    name: 'Indira Gandhi International Airport',
    country: 'India',
    code: 'DEL',
    terminals: [
      { name: 'Terminal 1', description: 'Optional metadata should be two lines.', image: 'https://res.cloudinary.com/dyutmmnia/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1720159430/Screenshot_2024-07-05_112949_wjlubo.png' },
      { name: 'Terminal 2', description: 'Optional metadata should be two lines.', image: 'https://res.cloudinary.com/dyutmmnia/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1720159430/Screenshot_2024-07-05_112949_wjlubo.png' }
    ]
  },
  {
    name: 'Dubai International Airport',
    country: 'UAE',
    code: 'DXB',
    terminals: [
      { name: 'Terminal 1', description: 'Optional metadata should be two lines.', image: 'https://res.cloudinary.com/dyutmmnia/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1720159430/Screenshot_2024-07-05_112949_wjlubo.png' },
      { name: 'Terminal 2', description: 'Optional metadata should be two lines.', image: 'https://res.cloudinary.com/dyutmmnia/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1720159430/Screenshot_2024-07-05_112949_wjlubo.png' }
    ]
  },
  {
    name: 'Heathrow Airport',
    country: 'England',
    code: 'LHR',
    terminals: [
      { name: 'Terminal 1', description: 'Optional metadata should be two lines.', image: 'https://res.cloudinary.com/dyutmmnia/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1720159430/Screenshot_2024-07-05_112949_wjlubo.png' },
      { name: 'Terminal 2', description: 'Optional metadata should be two lines.', image: 'https://res.cloudinary.com/dyutmmnia/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1720159430/Screenshot_2024-07-05_112949_wjlubo.png' }
    ]
  },
  {
    name: 'Istanbul Airport',
    country: 'Turkey',
    code: 'IST',
    terminals: [
      { name: 'Terminal 1', description: 'Optional metadata should be two lines.', image: 'https://res.cloudinary.com/dyutmmnia/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1720159430/Screenshot_2024-07-05_112949_wjlubo.png' },
      { name: 'Terminal 2', description: 'Optional metadata should be two lines.', image: 'https://res.cloudinary.com/dyutmmnia/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1720159430/Screenshot_2024-07-05_112949_wjlubo.png' }
    ]
  },
  {
    name: 'Rajiv Gandhi International Airport',
    country: 'Texas',
    code: 'DFW',
    terminals: [
      { name: 'Terminal 1', description: 'Optional metadata should be two lines.', image: 'https://res.cloudinary.com/dyutmmnia/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1720159430/Screenshot_2024-07-05_112949_wjlubo.png' },
      { name: 'Terminal 2', description: 'Optional metadata should be two lines.', image: 'https://res.cloudinary.com/dyutmmnia/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1720159430/Screenshot_2024-07-05_112949_wjlubo.png' }
    ]
  }
];

function Airports() {
  const [airportsData, setAirportsData] = useState(initialAirportsData);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [currentAirport, setCurrentAirport] = useState(null);
  const [newAirport, setNewAirport] = useState({ name: '', country: '', code: '', terminals: [] });
  const [selectedAirport, setSelectedAirport] = useState(null);
  const [newTerminal, setNewTerminal] = useState({ name: '', description: '', image: '' });
  const [isAddingTerminal, setIsAddingTerminal] = useState(false);

  const handleDelete = (index) => {
    const updatedAirports = airportsData.filter((_, i) => i !== index);
    setAirportsData(updatedAirports);
  };

  const handleEdit = (index) => {
    setCurrentAirport({ ...airportsData[index], index });
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentAirport({ ...currentAirport, [name]: value });
  };

  const handleNewChange = (e) => {
    const { name, value } = e.target;
    setNewAirport({ ...newAirport, [name]: value });
  };

  const handleUpdate = () => {
    const updatedAirports = airportsData.map((airport, i) =>
      i === currentAirport.index ? currentAirport : airport
    );
    setAirportsData(updatedAirports);
    setIsEditing(false);
    setCurrentAirport(null);
  };

  const handleAddNew = () => {
    setAirportsData([...airportsData, newAirport]);
    setIsAdding(false);
    setNewAirport({ name: '', country: '', code: '', terminals: [] });
  };

  const handleSelectAirport = (airport) => {
    setSelectedAirport(airport);
  };

  const handleAddTerminalChange = (e) => {
    const { name, value } = e.target;
    setNewTerminal({ ...newTerminal, [name]: value });
  };

  const handleAddTerminal = () => {
    const updatedAirports = airportsData.map((airport) => {
      if (airport.code === selectedAirport.code) {
        return { ...airport, terminals: [...airport.terminals, newTerminal] };
      }
      return airport;
    });
    setAirportsData(updatedAirports);
    setSelectedAirport(updatedAirports.find(airport => airport.code === selectedAirport.code)); // update selectedAirport to reflect changes
    setNewTerminal({ name: '', description: '', image: '' });
    setIsAddingTerminal(false);
  };

  const handleCancelAddTerminal = () => {
    setNewTerminal({ name: '', description: '', image: '' });
    setIsAddingTerminal(false);
  };

  return (
    <div className="airports">
      <div className="header">
        <h2>Airports</h2>
        <button onClick={() => setIsAdding(true)}>Add New</button>
      </div>
      {isEditing ? (
        <div className="edit-form">
          <h3>Edit Airport</h3>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={currentAirport.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={currentAirport.country}
              onChange={handleChange}
            />
          </label>
          <label>
            Code:
            <input
              type="text"
              name="code"
              value={currentAirport.code}
              onChange={handleChange}
            />
          </label>
          <label>
            Terminals:
            <input
              type="number"
              name="terminals"
              value={currentAirport.terminals.length}
              onChange={handleChange}
            />
          </label>
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : isAdding ? (
        <div className="edit-form">
          <h3>Add New Airport</h3>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={newAirport.name}
              onChange={handleNewChange}
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={newAirport.country}
              onChange={handleNewChange}
            />
          </label>
          <label>
            Code:
            <input
              type="text"
              name="code"
              value={newAirport.code}
              onChange={handleNewChange}
            />
          </label>
          <label>
            Terminals:
            <input
              type="number"
              name="terminals"
              value={newAirport.terminals.length}
              onChange={handleNewChange}
            />
          </label>
          <button onClick={handleAddNew}>Save</button>
        </div>
      ) : (
        <>
          {selectedAirport ? (
            <div className="airport-details">
              <nav>
                <button onClick={() => setSelectedAirport(null)}>Airports</button> | {selectedAirport.name}
              </nav>
              <h3>{selectedAirport.name}</h3>
              <div className='ter'>
                <h4>Terminal</h4>
                <h4>Transport</h4>
                <h4>Contact details</h4>
              </div>
              <div className="terminals">
                {selectedAirport.terminals.map((terminal, index) => (
                  <div key={index} className="terminal">
                    <img src={terminal.image} alt={terminal.name} />
                    <div className='terminalcolumn'>
                      <h4>{terminal.name}</h4>
                      <p>{terminal.description}</p>
                    </div>
                  </div>
                ))}
                <button onClick={() => setIsAddingTerminal(true)}>Add Terminal</button>
                {isAddingTerminal && (
                  <div className="popup">
                    <div className="popup-inner">
                      <h4>Add Terminal</h4>
                      <label>
                        Terminal Title:
                        <input
                          type="text"
                          name="name"
                          value={newTerminal.name}
                          onChange={handleAddTerminalChange}
                        />
                      </label>
                      <label>
                        Description:
                        <input
                          type="text"
                          name="description"
                          value={newTerminal.description}
                          onChange={handleAddTerminalChange}
                        />
                      </label>
                      <label>
                        Image URL:
                        <input
                          type="text"
                          name="image"
                          value={newTerminal.image}
                          onChange={handleAddTerminalChange}
                        />
                      </label>
                      <button onClick={handleAddTerminal}>Save</button>
                      <button onClick={handleCancelAddTerminal}>Cancel</button>
                    </div>
                  </div>
                )}
              </div>
              <div className="services">
                <h4>Services</h4>
                <div>
                  <h5>Services Name</h5>
                  <select>
                    <option value="Option 1">Option 1</option>
                  </select>
                  <select>
                    <option value="Option 1">Option 1</option>
                  </select>
                  <input type="text" placeholder="Type here" />
                  <button>Upload Image</button>
                  <label htmlFor="switch" className="toggle">
                  </label>
                  <button>Save</button>
                </div>
                <div>
                  <h5>Lounge</h5>
                  {/* Add Lounge details here */}
                </div>
                <div>
                  <h5>Money Exchange</h5>
                  {/* Add Money Exchange details here */}
                </div>
              </div>
            </div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>Airport</th>
                  <th>Country</th>
                  <th>Code</th>
                  <th>Terminals</th>
                  
                </tr>
              </thead>
              <tbody>
                {airportsData.map((airport, index) => (
                  <tr key={index}>
                    <td><input type="checkbox" name="selectedAirport" /></td>
                    <td>
                      <button onClick={() => handleSelectAirport(airport)}>{airport.name}</button>
                    </td>
                    <td>{airport.country}</td>
                    <td>{airport.code}</td>
                    <td>{airport.terminals.length}</td>
                    
                      <button onClick={() => handleEdit(index)}><i className="fas fa-edit"></i></button>
                      <button onClick={() => handleDelete(index)}><i className="fas fa-trash"></i></button>
                   
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
}

export default Airports;
