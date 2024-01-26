// src/components/HomePageSection.js
import { Box, Typography, Grid, Card, CardContent, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    box: {
      backgroundColor: theme.palette.grey[800], // adjust this to your desired color
      marginTop: "2rem",
      padding: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      [theme.breakpoints.down('xs')]: {
        width: '95%',
      },
    },
    card: {
        backgroundColor: '#283618', // adjust this to your desired color
      },
  }));

function PricingOptions() {
  
    const classes = useStyles();

    return (
    <Container>
        <Box className={classes.box}>
      <Typography variant="h4" style={{"color" : "white"}}>
        Pricing Plans
      </Typography>
      <Grid container spacing={3} style={{"marginTop" : ".5rem"}}>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5">Plan 1</Typography>
              <Typography variant="body1">Details of Plan 1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5">Plan 2</Typography>
              <Typography variant="body1">Details of Plan 2</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5">Plan 3</Typography>
              <Typography variant="body1">Details of Plan 3</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}

export default PricingOptions;