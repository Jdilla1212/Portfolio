import React from "react";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typed from "react-typed";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "50%",
    margin: "auto"
  },
  header: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "transparent",
    marginTop: "5%",
    fontSize: "35px",

  },
  resumeContents: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "transparent",
    margin: "2%",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <Paper className={classes.header}><Typed strings={["Resume"]} typeSpeed={40} /></Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.resumeContents}>
              <BusinessCenterIcon />
              <h2>Work Experience</h2>
              <Timeline style={{marginLeft: "-80%"}}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <h4 style={{ marginTop: "0%"}}>Physical Therapy Technician - Chandler Physical Therapy</h4><p style={{ fontSize: "12px"}}>2020-present</p>
            <p>
            Responsible for assisting physical therapists with non-clinical tasks while caring for individuals
            </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <h4 style={{ marginTop: "0%"}}>Personal Trainer - Life Time Fitness</h4><p style={{ fontSize: "12px"}}>2015-2020</p>
            <p>
            Responsible for assessing needs/wants of clients and creating health and wellness plans based on their goals
            </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
        <h4 style={{ marginTop: "0%"}}>Physical Therapy Technician - Chandler Physical Therapy</h4><p style={{ fontSize: "12px"}}>2020-present</p>
            <p>
            Responsible for assisting physical therapists with non-clinical tasks while caring for individuals.
            </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
              </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.resumeContents}>
              <SchoolIcon />
          <h2>Education Experience</h2>
          <Timeline style={{marginLeft: "-80%"}}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <h4 style={{ marginTop: "0%"}}>University of Arizona Full-Stack Web Development</h4><p style={{ fontSize: "12px"}}>August 2020 - Feb 2021</p>
            <p>
            Studied Full-Stack web development languages and frameworks such as HTML, CSS, Javascript, Express, NodeJS, MySQl, MongoDB, and ReactJS
            </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <h4 style={{ marginTop: "0%"}}>Physical Therapy Technician - Chandler Physical Therapy</h4><p style={{ fontSize: "12px"}}>2020-present</p>
            <p>
            Responsible for assisting physical therapists with non-clinical tasks while caring for individuals.
            </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
        <h4 style={{ marginTop: "0%"}}>Physical Therapy Technician - Chandler Physical Therapy</h4><p style={{ fontSize: "12px"}}>2020-present</p>
            <p>
            Responsible for assisting physical therapists with non-clinical tasks while caring for individuals.
            </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
              </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Resume;
