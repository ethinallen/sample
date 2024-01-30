import { useEffect } from 'react';
import { useAuth } from '@frontegg/react';

export default function CallbackHandler() {
  const { loginWithRedirect } = useAuth();

  useEffect(() => {
    loginWithRedirect();
  }, [loginWithRedirect]);

  return <div>Loading...</div>;
}