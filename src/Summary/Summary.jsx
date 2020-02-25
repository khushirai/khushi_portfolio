import React from "react";
import { Typography, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
    summery: {
        fontSize: "36px",
        margin: "2rem",
        fontWeight: 400
    }
});

export function Summary() {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12} md={8} lg={6}>
                <Typography variant="h3" className={classes.summery}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. In fermentum posuere urna nec tincidunt praesent
                    semper. Faucibus in ornare quam viverra orci. Posuere
                    sollicitudin aliquam ultrices sagittis. Convallis convallis
                    tellus id interdum velit laoreet. Tempor commodo ullamcorper
                    a lacus vestibulum sed.
                </Typography>
            </Grid>
        </Grid>
    );
}
