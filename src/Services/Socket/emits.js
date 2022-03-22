import { io } from 'socket.io-client';

const createSocketConnection = (jwt) => {
  if (jwt) {
    console.log(jwt);
    // const socket = io('http://localhost:4000', {
    //   extraHeaders: {
    //     Authorization: `Bearer ${jwt}`
    //   }
    // })
  }
} 

export {
  createSocketConnection
}