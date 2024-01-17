// src/pages/LoginError.js
import React from 'react';
import { Typography, Button, makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  button: {
    marginTop: '1rem',
  },
});

function LoginError() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4">
        You are attempting to access a page for authenticated users.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleLoginRedirect}
      >
        Try logging in again
      </Button>
    </div>
  );
}

export default LoginError;