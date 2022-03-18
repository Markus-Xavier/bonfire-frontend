import { io } from 'socket.io-client';

const createSocketConnection = (jwt) => {
  if (jwt) {
    const socket = io('http://localhost:4000', {
      auth: {
        token: jwt
      }
    })
  }
} 

export {
  createSocketConnection
}