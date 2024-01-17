import { Card, Grid, Paper, Typography, Container, Button, CardContent, Accordion, AccordionSummary, AccordionDetails, makeStyles } from '@material-ui/core';
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
        
    }
  });

function Blurbs() {

  const classes = useStyles();
  return (
    <Container maxWidth="xlg">
    <Grid  container spacing={3} >
        <Grid item xs={6} md={6}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.blurbHeader} variant="h5" component="h2">
                        Blurb 1
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                    <Typography variant="body1" className={classes.blurbText}>
                        This is a sample blurb.
                    </Typography>
                    <Button component={Link} to="/blurb1">
                        Read More
                    </Button>
                </AccordionDetails>
            </Accordion>
      </Grid>
      <Grid item xs={6} sm={6}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.blurbHeader} variant="h5" component="h2">
                        Blurb 2
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                    <Typography variant="body1" className={classes.blurbText}>
                        This is a sample blurb.
                    </Typography>
                    <Button component={Link} to="/blurb1">
                        Read More
                    </Button>
                </AccordionDetails>
            </Accordion>
      </Grid>
      <Grid item xs={6} sm={6}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.blurbHeader} variant="h5" component="h2">
                        Blurb 3
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                    <Typography variant="body1" className={classes.blurbText}>
                        This is a sample blurb.
                    </Typography>
                    <Button component={Link} to="/blurb1">
                        Read More
                    </Button>
                </AccordionDetails>
            </Accordion>
      </Grid>
    </Grid>
    </Container>
  );
}

export default Blurbs;