import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Button,
    AppBar,
    Toolbar,
    Link,
    Grid
} from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Links = [
    { name: "Work", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
];

const SocialIcons = [
    { alt: "Instagram", src: "#", icon: <InstagramIcon /> },
    { alt: "Twitter", src: "/#", icon: <TwitterIcon /> },
    { alt: "Linkedin", src: "/#", icon: <LinkedInIcon /> }
];

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        marginRight: "1rem"
    },
    linksContainer: {
        flexGrow: 1
    },
    link: {
        margin: ".5rem"
    }
}));

export function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Khushi Rai
                    </Typography>
                    <Grid className={classes.linksContainer}>
                        {Links.map(({ name, href }, index) => {
                            return (
                                <Link
                                    key={index + name}
                                    href={href}
                                    color="inherit"
                                    className={classes.link}
                                >
                                    {name}
                                </Link>
                            );
                        })}
                    </Grid>
                    <Grid>
                        {SocialIcons.map(({ alt, icon }, index) => {
                            // destructing socialIcon
                            return (
                                <Button key={index + alt} color="inherit">
                                    {icon}
                                </Button>
                            );
                        })}
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
