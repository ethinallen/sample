import { Avatar, IconButton, Menu, MenuItem, AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
// import logo from '../../public/logo.png';
import { useAuth, useLoginWithRedirect, AdminPortal, ContextHolder } from "@frontegg/react";



const useStyles = makeStyles({
  root: {
    marginBottom: '1rem',
  },
  logo: {
    height: '3rem', // adjust this value as needed
    width: 'auto',
    alignSelf: "baseline"
  },
});

function Navbar() {
  const classes = useStyles();
  const { isAuthenticated, login, user } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    handleClose();
    setTimeout(() => {
      AdminPortal.show();
    }, 0);
  };

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };


  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={`${process.env.PUBLIC_URL}/HealthEggLogo.png`} alt="Health Egg" className={classes.logo} />
          <Typography variant="h4" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', alignItems: "baseline"}}>
            Health Egg
          </Typography>
        </div>
        
        {isAuthenticated ? (
  <>
    <Button color="inherit" component={Link} to="/option1">User Information</Button>
    <IconButton edge="end" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
      <Avatar alt={user.name} src={user.profilePictureUrl} />
    </IconButton>
    <Menu id="menu-appbar" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
      <MenuItem onClick={handleClick}>Account Settings</MenuItem>
      <MenuItem onClick={logout}>Logout</MenuItem>
    </Menu>
  </>
) : (
  <Button onClick={() => loginWithRedirect()}>Sign In</Button>
)}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;