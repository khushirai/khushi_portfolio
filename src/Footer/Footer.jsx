import React from "react";
import { Footnote } from "../Footnote/Footnote";
import { makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    container: {
      margin: "5rem 2rem",
      fontSize:"10px"
    },
  });


export function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Footnote />
    </div>
  )
}

