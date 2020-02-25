import React from "react";
import { Typography, Link, makeStyles } from "@material-ui/core";
import { Summary } from "../Summary/Summary";

const useStyles = makeStyles({
  introduction: {
    margin: "5rem 0"
  },
  link: {
    fontSize: "36px",
    margin: "2rem",
    fontWeight: 400
  }
});

export function Introduction() {
  const classes = useStyles();

  return (
    <div className={classes.introduction}>
      <Summary />
      <Link href="/contact">
        <Typography variant="h3" className={classes.link}>
          Lets work together
        </Typography>
      </Link>
    </div>
  );
}
