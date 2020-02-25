import React from "react";
import { CardMedia, Typography, makeStyles, Link } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    height: "500px"
  },
  title:{
      marginTop:'1rem'
  }
});

export function Project({ alt, src, name, slug }) {
  const classes = useStyles();
  return (
    <Link underline='none' href={`/work/${slug}`}>
      {/* template string */}
      <CardMedia
        className={classes.image}
        component="img"
        src={src}
        alt={alt}
      />
      <Typography className={classes.title} variant="h4">{name}</Typography>
    </Link>
  );
}
