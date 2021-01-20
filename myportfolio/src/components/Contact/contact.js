import React from 'react';
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: "50%",
      margin: "auto",
    },
    header: {
      padding: theme.spacing(2),
      textAlign: "center",
      backgroundColor: "transparent",
      marginTop: "5%",
      fontSize: "35px",
    },
  }));

const Contact = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
        <Grid item sm={12}>
          <Paper className={classes.header}>
            <Typed strings={["Contact Me"]} typeSpeed={40} />
          </Paper>
        </Grid>
        </Grid>
        </div>
    )
}

export default Contact
