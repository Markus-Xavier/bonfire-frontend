import React, { useEffect, useState } from 'react';
import { createSocketConnection } from '../../Services/Socket/emits';
import { useGetAccessToken } from '../../Hooks/Auth0/custom-auth0';

export default function RoomButton({ isAuthenticated }) {
  const [requestJoinRoom, setRequestJoinRoom] = useState(false);
  const accessToken = useGetAccessToken(requestJoinRoom);

  // Delete fetch call out of this file 
  const getData = async (accessToken) => {
    if(accessToken) {
      console.log(accessToken);
      const response = await fetch('http://localhost:4000/api/private', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const parsedResponse = await response.json()
    console.log(parsedResponse);
    }
  }

  useEffect(() => {
    if (accessToken) {
      accessToken.then(getData)
    }
  }, [accessToken, requestJoinRoom]);

  return (
    <>
      <p>{`${isAuthenticated}`}</p>
      <button onClick={() => setRequestJoinRoom(true)}>Join Room 1</button>
    </>
  )
}
