import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/opportunities')
      .then(res => res.json())
      .then(data => setOpportunities(data));
  }, []);

  return (
    <div className="App">
      <h1>Research Opportunities</h1>
      <ul>
        {opportunities.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong> by {item.faculty} [{item.department}]
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
