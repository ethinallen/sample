import React from 'react';
import { useAuth } from '@frontegg/react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';


import NotFound from './NotFound';

const data = [
    { name: 'Jan', uv: 4000 },
    { name: 'Feb', uv: 3000 },
    { name: 'Mar', uv: 2000 },
    { name: 'Apr', uv: 2780 },
    { name: 'May', uv: 1890 },
    { name: 'Jun', uv: 2390 },
    { name: 'Jul', uv: 3490 },
    { name: 'Jan', uv: 4000 },
    { name: 'Feb', uv: 3000 },
    { name: 'Mar', uv: 2000 },
    { name: 'Apr', uv: 2780 },
    { name: 'May', uv: 1890 },
    { name: 'Jun', uv: 2390 },
    { name: 'Jul', uv: 3490 },
  ];

const useStyles = makeStyles({
header: {
    padding: '1rem',
},
});

function HealthData() {
    const { user, loading } = useAuth();
    const classes = useStyles();

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!user || !user.roles.some(role => role.name === 'patient')) {
      return <NotFound />;
    }

    return (
        <Paper style={{ width: '90%', margin: 'auto' }}>
            <Typography variant="h5" component="h3" className={classes.header}>
            Health Data Dashboard
            </Typography>
            <BarChart width={900} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
        </Paper>
    );
  }

export default HealthData;
