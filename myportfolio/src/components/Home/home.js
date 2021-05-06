import React from "react";
import { Grid, Typography, Avatar } from "@material-ui/core";
import avatar from "../../assets/images/avatar2.png";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";

const useStyles = makeStyles((theme) => ({
  container: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100vw",
      textAlign: "center",
      zIndex: 1
  },
  large: {
    marginTop: "2.5em",
    width: theme.spacing(30),
    height: theme.spacing(35),
  },
  title: {
    marginTop: "1.5%",
    color: "white"
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className={classes.container}>
        <Grid
          container
          justify="center"
          alignItems="center"
        >
          <Avatar className={classes.large} src={avatar} alt="Josh Padilla" />
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
        >
          <Typography className={classes.title} variant="h4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <Typed strings={["Josh Padilla"]} typeSpeed={40} />
          </Typography>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
        >
          <Typography variant="h5" style={{ color: "#66666", fontFamily: 'Open Sans, sans-serif' }}>
            <Typed
              strings={[
                "Full Stack Web Developer",
                "HTML/CSS",
                "Javascript",
                "React",
                "MERN Stack",
              ]}
              typeSpeed={40}
              backSpeed={20}
              loop
            />
          </Typography>
        </Grid>
        <Grid style={{ margin: "auto" }}>
          <div className="social-links" style={{ marginTop: "1.5%"}}>
          <a
              href="https://www.instagram.com/j_dillaa/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/joshua-padilla-4052371ab/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            <a
              href="https://github.com/Jdilla1212"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
