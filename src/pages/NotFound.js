import React from 'react';
import { Container, Paper, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      marginTop: '2rem',
      padding: '2rem',
    },
    text: {
      fontSize: '2rem',
      textAlign: 'center',
    },
  });
  
  function NotFound() {
    const classes = useStyles();
  
    return (
      <Container maxWidth="md">
        <Paper className={classes.root}>
          <Typography variant="h1" component="h2" className={classes.text}>
            404
          </Typography>
          <Typography variant="h5" component="h2" className={classes.text}>
            Page not found
          </Typography>
          <Typography className={classes.text}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </Typography>
        </Paper>
      </Container>
    );
  }
  
  export default NotFound;