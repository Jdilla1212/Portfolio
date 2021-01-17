import React from "react";
import { Grid, Typography, Box, Avatar } from "@material-ui/core";
import avatar from "../../assets/images/avatar2.png";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";

const useStyles = makeStyles((theme) => ({
  container: {
      position: "absolute",
      top: "40%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100vw",
      textAlign: "center",
      zIndex: 1
  },
  large: {
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
      <Box className={classes.container}>
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
          <Typography className={classes.title} variant="h4">
            <Typed strings={["Josh Padilla"]} typeSpeed={40} />
          </Typography>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
        >
          <Typography variant="h5" style={{ color: "#66666" }}>
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
      </Box>
    </div>
  );
};

export default Home;
