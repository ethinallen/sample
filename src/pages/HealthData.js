import React from 'react';
import { useAuth } from '@frontegg/react';
import { Paper, Typography, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';


import NotFound from './NotFound';

const data0 = [
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

const data1 = [
{ name: 'Jan', uv: 4000 },
{ name: 'Feb', uv: 3000 },
{ name: 'Mar', uv: 2000 },
{ name: 'Apr', uv: 2780 },
];

  const data2 = [
{ name: 'Apr', uv: 2780 },
{ name: 'May', uv: 1890 },
{ name: 'Jun', uv: 2390 },
{ name: 'Jul', uv: 3490 },
{ name: 'Jan', uv: 4000 },
{ name: 'Feb', uv: 3000 },
{ name: 'Mar', uv: 2839 },
{ name: 'Apr', uv: 2780 },
{ name: 'May', uv: 1890 },
{ name: 'Jun', uv: 2390 },
{ name: 'Jul', uv: 7000 },
];

const useStyles = makeStyles({
    header: {
        padding: '1rem',
    },
    tab: {
        '&.Mui-selected': {
        textolor: 'blue', // change this to your desired color
        },
    },
});

function HealthData() {
    const { user, loading } = useAuth();
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
            <Tabs value={value} onChange={handleChange} indicatorColor={"secondary"} textColor="secondary" variant="scrollable">
                <Tab label="Chart 1" />
                <Tab label="Chart 2" />
                <Tab label="Chart 3" />
            </Tabs>
            {
                value === 0 && <BarChart width={900} height={300} data={data0}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
            }
            {
                value === 1 && <BarChart width={900} height={300} data={data1}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>}
            {value === 2 && <BarChart width={900} height={300} data={data2}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>}
        </Paper>
    );
  }

export default HealthData;
