import React from "react";
import { Summary } from "../Summary/Summary";
import { Typography, makeStyles, Grid } from "@material-ui/core";

const Services = ["Photography", "Art", "Direction"];
const Clients = ["Example1", "Example2", "Example3"];

const useStyles = makeStyles({
  summery: {
    fontSize: "24px",
    maxWidth: "50%",
    margin: "2rem",
    fontWeight: 400
  },
  clientTable: {
    margin: "5rem 2rem"
  },
  tableTitle: {
    fontWeight: "bold",
    marginBottom: "1.2rem"
  }
});

export function About() {
  const classes = useStyles();
  return (
    <div>
      <Summary />
      <Typography variant="body1" className={classes.summery}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet
        aliquam id diam maecenas ultricies. Venenatis urna cursus eget nunc
        scelerisque. Sagittis aliquam malesuada bibendum arcu vitae elementum
        curabitur vitae nunc. Eget aliquet nibh praesent tristique magna sit
        amet. Ornare quam viverra orci sagittis eu volutpat odio facilisis.
      </Typography>
      <div className={classes.clientTable}>
        <Grid container>
          <Grid item xs={3}>
            <Typography variant="subtitle1" className={classes.tableTitle}>
              Services
            </Typography>
            {Services.map((service,index) => {
                return <Typography key ={index+service} variant="body1">{service}</Typography>
            })}
          </Grid>
          <Grid item xs={9}>
            <Typography variant="subtitle1" className={classes.tableTitle}>
              Clients
            </Typography>
            {Clients.map((client,index) => {
                return <Typography key ={index+client} variant="body1">{client}</Typography>
            })}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}