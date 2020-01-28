import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

import './album.css';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const Album = (props) => {
    const classes = useStyles();
    return (    
        <Grid item xs={3}>
          <Paper className={classes.paper}> 
            <Link to={`/albums/${props.album.id}`} style={{textDecoration: "none"}}> 
                <PhotoLibraryIcon style={{ fontSize: 50 }} /><br/>{props.album.title} 
            </Link>
          </Paper>
        </Grid>
    );
}

export default Album