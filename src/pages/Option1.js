import { Paper, Typography, Container, Grid, CardContent, Card, Avatar, makeStyles } from '@material-ui/core';
import { useIsAuthenticated } from '@frontegg/react';
import { Redirect } from 'react-router-dom';
import React from 'react';

import LoginError from './LoginError';

import { useAuth } from '@frontegg/react';

const useStyles = makeStyles({
    root: {
      padding: '3rem',
      margin: "2rem",
    },
    jumbotronBody: {
      fontSize: "1.4rem",
      margin: "0 2rem", // Add this line
    },
    modern: {
      color: '#009097', // Change this to your desired color
      fontStyle: 'italic',
    },
    card: {
        marginBottom: '1rem',
      },
      avatar: {
        width: '100px',
        height: '100px',
      },
  });

function Option1() {
    const { isAuthenticated, user } = useAuth();

    const classes = useStyles();


    if (!isAuthenticated) {
      return <div>Hey man you aren't logged in</div>;
    }

    const renderUserInfo = (key, value) => {
        if (typeof value === 'object') {
          return (
            <Card key={key} variant="outlined" className={classes.card}>
              <CardContent>
                <Typography variant="h6">{key}</Typography>
                <ul>
                  {Object.entries(value).map(([subKey, subValue]) => (
                    <li key={subKey}>
                      <strong>{subKey}:</strong> {JSON.stringify(subValue, null, 2)}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        }
        return (
          <Typography key={key} component="div">
            <strong>{key}:</strong> {value}
          </Typography>
        );
      };
    
      return (
        <Paper elevation={3} className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" component="h1">
                User Information
              </Typography>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              { user && <Avatar alt={user.name} src={user.profilePictureUrl} className={classes.avatar} /> }
            </Grid>
            <Grid item xs={12} sm={6}>
                {user && Object.entries(user).map(([key, value]) => renderUserInfo(key, value))}
            </Grid> */}
          </Grid>
        </Paper>
      );
  
}

export default Option1;