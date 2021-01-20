import React from "react";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";
import Dilla from "../../assets/images/dilla.png";

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
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid>
        <Grid item sm={12}>
          <Paper className={classes.header}>
            <Typed strings={["About Me"]} typeSpeed={40} />
          </Paper>
        </Grid>
        <Grid>
          <p>
            <img src={Dilla} alt="Dilla" id="dilla" />
            Hello! My name is Josh Padilla.
            <br />
            <br />
            I am 28 years old and currently reside in Phoenix, Arizona. <br />
            <br /> I am a Full-Stack Web Developer, with my specialty being the
            MERN stack. I've been studying software engineering through the
            University of Arizona for the past 6 months and have come to realize
            it as one of my passions. I thoroughly enjoy making computers do
            cool things and giving life to applications and websites. React has
            been my go-to framework for javascript as I find it very powerful
            and fun to code with.
            <br />
            <br />
            Some of my other passions include hiking/backpacking (especially
            with my dog, Kenai), Photography, going to concerts (when there
            isn't a world-wide pandemic), and travelling (also when there isn't
            a world-wide pandemic going on). Check out my socials below to see
            some more of me! 👇👇
            <br />
            <br />
          </p>
          <div className="social-links">
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

export default About;
