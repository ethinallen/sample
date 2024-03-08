import React, { useState } from 'react';
import { Card, Box, Grid, Paper, Typography, Container, Button, CardContent, Accordion, AccordionSummary, AccordionDetails, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles({
    root: {
      padding: '1rem',
      margin: "2rem"
    },
    blurbText: {
        fontSize: '1.2rem', // Adjust this to make the text bigger
        textAlign: 'center',
      },
    accordionDetails: {
    justifyContent: 'center',
    },
    blurbHeader: {
        textAlign: 'center',
    },
    readMore: {
        textAlign: 'right',
    }
  });

function Blurbs() {

  const classes = useStyles();
  const [expanded, setExpanded] = useState({
    easeOfIntegration: true,
    scalability: true,
    security: true,
    customizability: true,
  });

// Function to toggle accordion expansion
const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded({ ...expanded, [panel]: isExpanded });
    };

  return (
    <Container maxWidth="xl">
    <Grid  container spacing={3} >
        <Grid item xs={6} md={6}>
            <Accordion expanded={expanded.easeOfIntegration} onChange={handleAccordionChange('easeOfIntegration')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.blurbHeader} variant="h5" component="h2">
                        Ease of Integration
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Typography variant="body1" className={classes.blurbText}>
                        Frontegg offers a seamless integration experience with your existing application. It provides SDKs for popular backend frameworks, making it easy to add comprehensive user management and authentication capabilities to your app without having to build these features from scratch.
                        </Typography>
                        <Button component={Link} to="/blurb1" className={classes.readMore}>
                            Read More
                        </Button>
                    </Box>

                    </AccordionDetails>
            </Accordion>
      </Grid>
      <Grid item xs={6} sm={6}>
      <Accordion expanded={expanded.scalability} onChange={handleAccordionChange('scalability')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.blurbHeader} variant="h5" component="h2">
                    Scalability
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                    <Box display="flex" flexDirection="column" alignItems="center">

                        <Typography variant="body1" className={classes.blurbText}>
                        As your user base grows, managing user data and authentication can become increasingly complex. Frontegg is designed to scale with your needs, ensuring that your application can handle a growing number of users without compromising on performance or security.
                        </Typography>
                        <Button component={Link} to="/blurb1" className={classes.readMore}>
                            Read More
                        </Button>
                    </Box>
                </AccordionDetails>
            </Accordion>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Accordion expanded={expanded.security} onChange={handleAccordionChange('security')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.blurbHeader} variant="h5" component="h2">
                    Security
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="body1" className={classes.blurbText}>
                        Frontegg takes security seriously. We provide robust authentication and authorization features, including multi-factor authentication and role-based access control. This allows you to ensure that your users' data is protected and that they can only access the parts of your application that they are authorized to use.
                        </Typography>
                        <Button component={Link} to="/blurb1" className={classes.readMore}>
                            Read More
                        </Button>
                    </Box>
                </AccordionDetails>
            </Accordion>
      </Grid>
      <Grid item xs={6} sm={6}>
      <Accordion expanded={expanded.customizability} onChange={handleAccordionChange('customizability')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.blurbHeader} variant="h5" component="h2">
                    Customizability
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                <Box display="flex" flexDirection="column" alignItems="center">

                    <Typography variant="body1" className={classes.blurbText}>
                    Every application has unique needs when it comes to user management and authentication. Frontegg offers a high degree of customizability, allowing you to tailor its features to suit your application's specific requirements. Whether you need to customize the user registration process, the login flow, or the user profile management features, Frontegg has got you covered.
                    </Typography>
                    <Button component={Link} to="/blurb1" className={classes.readMore}>
                        Read More
                    </Button>
                    </Box>
                </AccordionDetails>
            </Accordion>
      </Grid>
    </Grid>
    </Container>
  );
}

export default Blurbs;