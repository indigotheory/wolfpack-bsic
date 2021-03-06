import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import GigDescription from './GigDescription';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function GigCard(props) {
  const classes = useStyles();


  return (
    
    <Grid item sm={6} xs={12}>
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                {props.business}
                </Typography>
                <Typography variant="h5" component="h2">
                ${props.rate}/hr
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                {props.date}
                </Typography>
                <Typography variant="body2" component="p">
                {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <GigDescription/>
                
            </CardActions>
        </Card>
    </Grid>
  );
}
