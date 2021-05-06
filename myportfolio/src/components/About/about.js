import React from "react";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";
import Dilla from "../../assets/images/dilla.png";
import CertImg from "../../assets/images/cert.png";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "75%",
        margin: "auto",
    },
    header: {
        padding: theme.spacing(2),
        textAlign: "center",
        width: "75%",
        margin: "auto",
        marginBottom: "1em",
        backgroundColor: "transparent",
        marginTop: "10%",
        fontSize: "35px",
    },
    cert: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
    },
    certImg: {
        maxWidth: "75%"
    }
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
                        <Grid item lg={6} sm={12}>
                            <img src={Dilla} alt="Dilla" id="dilla" sm={12} />
                        </Grid>
            Hello! My name is Josh Padilla.
            <br />
                        <br />
            I am 28 years old and currently reside in Phoenix, Arizona. <br />
                        <br /> I am a Full-Stack Web Developer, with my specialty being the
            MERN stack. I've been studying software engineering for the past year and have recently been certified as a Full Stack Web Developer through the University of Arizona.
            <br />
                        <br />
                        <Grid item lg={4} sm={12} className={classes.cert}>
                            <img src={CertImg} alt="certImg" id="cert" className={classes.certImg} />
                        </Grid>
                        <br />
                        <br />
            I thoroughly enjoy making computers and websites do cool things and love giving users a quality and fun experience online.
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
