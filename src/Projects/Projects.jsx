import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Project } from "./Project";
import { ProjectArray } from "./ProjectArray";

const useStyles = makeStyles({
    root: {
        margin: "2rem"
    }
});

export function Projects() {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <Grid container spacing={8}>
                {ProjectArray.map(({ alt, src, name, slug }, index) => {
                    return (
                        <Grid item xs={12} md={6} lg={4} key={index + name}>
                            <Project alt={alt} src={src} name={name} slug={slug} />
                        </Grid>
                    );
                })}
            </Grid>
        </Grid>
    );
}
