import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useAuth, useLoginWithRedirect, ContextHolder } from "@frontegg/react";

import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Blurbs from './components/Blurbs';
import Option1 from './pages/Option1';
import Option2 from './pages/Option2';
import HealthData from './pages/HealthData';
import PricingOptions from './components/PricingOptions';
import CallbackHandler from './components/CallbackHandler';
import NotFound from './pages/NotFound';

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
  overrides: {
    MuiTab: {
      selected: {
        color: 'blue', // change this to your desired color
      },
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
            <PricingOptions />
          </>
        } />
        <Route path="/option1" element={<Option1 />} />
        <Route path="/option2" element={<Option2 />} />
        <Route path="/health-data" element={<HealthData />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/oauth/callback" element={<CallbackHandler />} />
      </Routes>


    </ThemeProvider>

  );
}

export default App;
