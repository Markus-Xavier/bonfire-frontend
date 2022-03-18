import React, { useEffect, useState } from 'react';
import { createSocketConnection } from '../../Services/Socket/emits';
import { useGetAccessToken } from '../../Hooks/Auth0/custom-auth0';

export default function RoomButton({ isAuthenticated }) {
  const [requestJoinRoom, setRequestJoinRoom] = useState(false);
  const accessToken = useGetAccessToken(requestJoinRoom);

  useEffect(() => {
    if (accessToken) {
      accessToken.then(createSocketConnection)
    }
  }, [accessToken, requestJoinRoom]);

  return (
    <>
      <p>{`${isAuthenticated}`}</p>
      <button onClick={() => setRequestJoinRoom(true)}>Join Room 1</button>
    </>
  )
}
