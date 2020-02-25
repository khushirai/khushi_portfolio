import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProjectArray } from "../Projects/ProjectArray";
import {
    CircularProgress,
    Typography,
    Grid,
    CardMedia,
    Link,
    Button,
    makeStyles
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export function ProjectDetail() {
    let param = useParams();
    const [projectDetail, setprojectDetail] = useState(null);
    const [nextProject, setNextProject] = useState(null);
    const [prevProject, setPrevProject] = useState(null);

    useEffect(() => {

        getProject(param.id);
    }, [param.id]); //montoring changes made in ID //coming from routes first arg is for running function if somthing in second arg changes

    const getProject = id => {
        const index = ProjectArray.findIndex(project => project.slug === id);
        setprojectDetail(ProjectArray[index]);
        setNextProject(index + 1);
        setPrevProject(index - 1);
    };

    const useStyles = makeStyles({
        root: {
            margin: "5px 40px"
        },
        spacing: {
            margin: "5px 0px 20px"
        },
        detail: {
            width: "50%",
            margin: "5px 0px 20px"
        },
        image: {
            height: "500px",
            marginBottom: "2rem"
        }
    });

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {projectDetail ? (
                <div>
                    <Typography className={classes.spacing} variant="h3">
                        {projectDetail.name}
                    </Typography>
                    <Typography className={classes.detail}>
                        {projectDetail.details.description}
                    </Typography>
                    <Grid container spacing={8}>
                        {projectDetail.details.images.map((image, index) => {
                            return (
                                <Grid item xs={12} lg={6} key={image + index}>
                                    <CardMedia
                                         className={classes.image}
                                        src={image}
                                        component="img"
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Typography className={classes.detail}>
                        {projectDetail.details.summary}
                    </Typography>
                    <Grid container justify="space-between">
                        <Grid item>
                            {prevProject >= 0 ? (
                                <Link
                                    href={`/work/${ProjectArray[prevProject].slug}`}
                                >
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        color="primary"
                                    >
                                        <ArrowBackIosIcon />
                                        {ProjectArray[prevProject].name}
                                    </Button>
                                </Link>
                            ) : null}
                        </Grid>
                        <Grid item>
                            {ProjectArray.length > nextProject ? (
                                <Link
                                    href={`/work/${ProjectArray[nextProject].slug}`}
                                >
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        color="primary"
                                    >
                                        {ProjectArray[nextProject].name}
                                        <ArrowForwardIosIcon />
                                    </Button>
                                </Link>
                            ) : null}
                        </Grid>
                    </Grid>
                </div>
            ) : (
                <CircularProgress />
            )}
        </div>
    );
}
