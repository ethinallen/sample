import { useEffect } from 'react';
import { useAuth } from '@frontegg/react';
import { useNavigate } from 'react-router-dom';

export default function CallbackHandler() {
  const { state } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const { from } = state || {};
    navigate(from || '/');
  }, [state, navigate]);

  return <div>Loading...</div>;
}