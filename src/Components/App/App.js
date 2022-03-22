import './App.css';
import React, { useState } from 'react';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import RoomButton from '../RoomButton/RoomButton';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <button onClick={() => setIsAuthenticated(!isAuthenticated)}>Change Auth Status</button>
      <h1>Dog Boy</h1>
      <LoginButton />
      <LogoutButton />
      <RoomButton isAuthenticated={isAuthenticated}/>
    </div>
  );
}

export default App;