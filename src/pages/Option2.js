import { useAuth, useIsAuthenticated } from '@frontegg/react';
import React from 'react';

function Option2() {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      return <div>Hey man you aren't logged in</div>;
    }
  
}

export default Option2;