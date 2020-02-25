import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    body1: {
      display: "block",
      fontSize: "20px"
    },
    footer: {
     marginBottom:"50px"
    }
  
  });
  
  export function Footnote() {
    const classes = useStyles();
  
    return (
      <div className={classes.footer}> 
        <Typography variant="body1" className={classes.body1}>Khushi Rai</Typography>
        <Typography variant="body1" className={classes.body1}>778-241-9289</Typography>
      </div>
    );
  }