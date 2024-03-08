import { useAuth, useStepUp, useIsSteppedUp } from '@frontegg/react';
import React from 'react';

function Option2() {
    const { isAuthenticated } = useAuth();
    const MAX_AGE = 60 * 60; // 1 hour

    const [value, setValue] = React.useState(0);
    const stepUp = useStepUp();
    const isSteppedUp = useIsSteppedUp({ maxAge: MAX_AGE });

    if (!isAuthenticated || !isSteppedUp) {
      return <div>You need to log in or Step Up</div>;
    }

    else {
        return(
            <div> hey you made it, glad to have you.</div>
        )
    }
  
}

export default Option2;