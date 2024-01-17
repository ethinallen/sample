import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import { useAuth, useLoginWithRedirect, ContextHolder } from "@frontegg/react";
import { AdminPortal } from '@frontegg/react';
import Dashboard from './components/Dashboard';
import { Paper, Typography } from '@material-ui/core';


import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Blurbs from './components/Blurbs';
import Option1 from './pages/Option1';
import Option2 from './pages/Option2';


import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#0D1117',
    },
    secondary: {
      main: '#161B22',
    },
    background: {
      default: '#21262D',
    },
    text: {
      primary: '#FFFFFF',
    },
    action: {
      active: '#58A6FF',
    },
  },
});

function App() {

  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
   };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Jumbotron />
            <Blurbs />
          </>
        } />
        <Route path="/option1" element={<Option1 />} />
        <Route path="/option2" element={<Option2 />} />
      </Routes>


    </ThemeProvider>

  );
}

export default App;
