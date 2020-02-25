import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import { Footnote } from "../Footnote/Footnote";
import { Form } from "../Form/Form";

const Follow = ["Instagram", "Twitter"];

const useStyles = makeStyles({
    heading: {
        maxWidth: "50%",
        margin: "2rem",
        fontWeight: 400
      },
  table: {
    margin: "5rem 2rem",
  }
});

export function Contact() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h3" className={classes.heading}>
        If you have a project in mind, please complete the form below to send
        your enquiry
      </Typography>
      <Form />
      <div className={classes.table}>
        <Grid container>
          <Grid item xs={3}>
            <Typography variant="subtitle1">Contact</Typography>
            <Footnote />
          </Grid>
          <Grid item xs={9}>
            <Typography variant="subtitle1">Follow</Typography>
            {Follow.map((follow, index) => {
              return (
                <Typography key={index + follow} variant="body1">
                  {follow}
                </Typography>
              );
            })}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
