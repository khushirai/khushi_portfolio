import React, { useState } from "react";
import {
    makeStyles,
    TextField,
    Grid,
    Typography,
    Button
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        marginLeft: "35px"
    },
    textfeildSmall: {
        width: "95%",
        margin: "0 0 2rem 0"
    },
    textfeildSmallRight: {
        width: "95%",
        margin: "0 0 2rem 0",
        float: "right"
    },
    textfeild: {
        width: "100%",
        margin: "0 0 2rem 0"
    }
});

export function Form() {
    const classes = useStyles();
    const [formData, setFormData] = useState({ //setFormData is method
        firstName: "",
        lastName: "",
        email: "",
        bussinessName: "",
        bussinessDescription: "",
        projectDescription: "",
        comments: ""
    });

    const onFormChange = (event, property) => {
        setFormData({ ...formData, [property]: event.target.value.trim() }); //setFormData Asyncronous
    };

    const onFormSubmit = event => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <form className={classes.root} autoComplete="on" onSubmit={onFormSubmit}>
                <Grid container>
                    <Grid item sm={12} md={8} lg={6}>
                        <Typography variant="overline">Name</Typography>
                        <Grid container justify="space-between">
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    type="text"
                                    inputProps={{ maxLength: 12 }}
                                    className={classes.textfeildSmall}
                                    id="outlined-basic"
                                    value={formData.firstName}
                                    label="FirstName"
                                    variant="outlined"
                                    onChange={event =>
                                        onFormChange(event, "firstName")
                                    }
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    className={classes.textfeildSmallRight}
                                    id="outlined-basic"
                                    value={formData.lastName}
                                    label="LastName"
                                    variant="outlined"
                                    disabled={!formData.firstName.length}
                                    onChange={event =>
                                        onFormChange(event, "lastName")
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography variant="overline">
                                    Email
                                </Typography>
                                <TextField
                                    className={classes.textfeild}
                                    id="Email"
                                    type="email"
                                    value={formData.email}
                                    inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}} //regex
                                    variant="outlined"
                                    onChange={event =>
                                        onFormChange(event, "email")
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="overline">
                                    Business Name
                                </Typography>
                                <TextField
                                    className={classes.textfeild}
                                    id="BussinessName"
                                    value={formData.bussinessName}
                                    variant="outlined"
                                    type="number"
                                    inputProps={{ min: 10, max: 50 }}
                                    onChange={event =>
                                        onFormChange(event, "bussinessName")
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="overline">
                                    Please describe your business
                                </Typography>
                                <TextField
                                    className={classes.textfeild}
                                    value={formData.bussinessDescription}
                                    id="BussinessDescription"
                                    variant="outlined"
                                    onChange={event =>
                                        onFormChange(
                                            event,
                                            "bussinessDescription"
                                        )
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="overline">
                                    Please describe your project
                                </Typography>
                                <TextField
                                    className={classes.textfeild}
                                    value={formData.projectDescription}
                                    id="ProjectDescription"
                                    variant="outlined"
                                    multiline
                                    rows={3}
                                    onChange={event =>
                                        onFormChange(
                                            event,
                                            "projectDescription"
                                        )
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="overline">
                                    Additional Comments
                                </Typography>
                                <TextField
                                    className={classes.textfeild}
                                    value={formData.comments}
                                    id="Comments"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    onChange={event =>
                                        onFormChange(event, "comments")
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    size="large"
                                    variant="outlined"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}
