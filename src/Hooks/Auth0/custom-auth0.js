import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';

const useGetAccessToken = (requestJoinRoom) => {
  const [jwtToken, setJwtToken] = useState(null);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getUserAccessToken = async () => {
      console.log('Custom Hook Init');
  
      if (requestJoinRoom) {
        return (await getAccessTokenSilently());
      };
    }
    const parsedToken = getUserAccessToken().then(data => data)
    setJwtToken(parsedToken);
  }, [requestJoinRoom, getAccessTokenSilently])

  return jwtToken;
} 

export {
  useGetAccessToken
} 