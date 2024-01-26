import { Paper, Typography, Container, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '3rem',
    margin: "2rem",
  },
  jumbotronBody: {
    fontSize: "1.4rem"
  },
  modern: {
    color: '#009097', // Change this to your desired color
    fontStyle: 'italic',
  },
});

function Jumbotron() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
            <Paper elevation={3} className={classes.root}>
                <Typography variant="h4" component="h1">
                    Welcome to <span className={classes.modern}>Modern</span> Identity and Access Management.
                </Typography>
                <Typography component="h4" className={classes.jumbotronBody}>
                    Experience the powerful features and seamless integration of our Customer Identity and Access Management.
                </Typography>
            </Paper>
        </Grid>
    </Grid>
    </Container>
  );
}

export default Jumbotron;