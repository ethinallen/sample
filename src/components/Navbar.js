import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useAuth, useLoginWithRedirect } from "@frontegg/react";


const useStyles = makeStyles({
  root: {
    marginBottom: '1rem',
  },
});

function Navbar() {
  const classes = useStyles();
  const { isAuthenticated, login } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();


  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4">
          Sample App
        </Typography>
        {isAuthenticated ? (
          <>
            <Button color="inherit" component={Link} to="/option1">Option 1</Button>
            <Button color="inherit" component={Link} to="/option2">Option 2</Button>
          </>
        ) : (
            <Button onClick={() => loginWithRedirect()}>Sign In</Button>
            )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;