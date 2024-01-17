import React from 'react';
import { Paper, Typography } from '@material-ui/core';

function Dashboard() {
  return (
    <Paper>
      <Typography variant="h5" component="h3">
        This is a sample dashboard.
      </Typography>
      <Typography component="p">
        Dashboard content goes here.
      </Typography>
    </Paper>
  );
}

export default Dashboard;