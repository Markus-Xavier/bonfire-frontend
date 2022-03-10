import './App.css';
import LoginButton from '../LoginButton/LoginButton';
import { io } from 'socket.io-client';

function App() {
  const socket = io('http://localhost:4000');

  return (
    <div>
      <h1>Dog Boy</h1>
      <LoginButton />
    </div>
  );
}

export default App;