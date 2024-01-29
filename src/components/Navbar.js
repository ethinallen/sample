import { Avatar, IconButton, Menu, MenuItem, AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import { useAuth, useLoginWithRedirect, AdminPortal, ContextHolder, useAuthActions } from "@frontegg/react";



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
  const { switchTenant } = useAuthActions();
  const loginWithRedirect = useLoginWithRedirect();


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [tenantAnchorEl, setTenantAnchorEl] = React.useState(null);


  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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

      // Event handlers
    const handleTenantMenuOpen = (event) => {
      setTenantAnchorEl(event.currentTarget);
    };

    const handleTenantMenuClose = () => {
      setTenantAnchorEl(null);
    };

  const handleSwitchTenant = (tenantId) => {
    switchTenant({ tenantId });
    handleTenantMenuClose();
  };

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };


  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between'}}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
          <img src={`${process.env.PUBLIC_URL}/HealthEggLogo.png`} alt="Health Egg" className={classes.logo} />
          <Typography variant="h4">
            Health Egg
          </Typography>
        </Link>
        
        {isAuthenticated ? (
          <>
            {user && user.roles && user.roles.some(role => role.name === 'patient') && (
              <Button color="inherit" component={Link} to="/health-data">Patient Page</Button>
            )}
            <Button color="inherit" component={Link} to="/option1">User Information</Button>
            <Button aria-controls="tenant-menu" aria-haspopup="true" onClick={handleTenantMenuOpen}>
              Switch Tenants
            </Button>
            <Menu
              id="tenant-menu"
              anchorEl={tenantAnchorEl}
              keepMounted
              open={Boolean(tenantAnchorEl)}
              onClose={handleTenantMenuClose}
            >
              {user.tenantIds.map((tenantId) => (
                <MenuItem key={tenantId} onClick={() => handleSwitchTenant(tenantId)}>{tenantId}</MenuItem>
              ))}
            </Menu>
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