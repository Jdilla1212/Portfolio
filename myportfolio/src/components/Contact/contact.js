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
    contactContents: {
        padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "transparent",
    margin: "2%",
    }
  }));

const Contact = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
        <Grid item sm={12}>
          <Paper className={classes.header}>
            <Typed strings={["Get in touch!"]} typeSpeed={40} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
            <Paper className={classes.contactContents}>
          <h3>
            {/* <img src={Dilla} alt="Dilla" id="dilla" /> */}
            Have any questions for me?
            <br />
            <br />
            Let's get to know each other and see how we can be helpful to each other! <br />
            <br /> Please reach out with any questions, comments or concerns.  I look forward to getting to know you.
          </h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
        <Paper className={classes.contactContents}>
        <h3>
            Also, take a look at my resume <a
              href="https://docs.google.com/document/d/1Q6pys7prXz8e5Ph4MIIiqjesQMnX0YLegeVlniowWnY/edit?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              here!
            </a>
            <br />
            <br />
            Phone: (505)288-9749
            <br />
            <br />
            Email: 
            <a href="mailto:jdp237@nau.edu" target="_top" style={{color:'black'}}>jdp237@nau.edu</a>
            <br />
            <br />
          </h3>
          </Paper>
        </Grid>
        </Grid>
        </div>
    )
}

export default Contact
