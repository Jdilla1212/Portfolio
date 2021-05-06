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
    container: {
        
    },
    resumeContents: {
        padding: theme.spacing(2),
        textAlign: "center",
        backgroundColor: "transparent",
        margin: "2%",
    }
}));

const Resume = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid>
                <Grid item sm={12}>
                    <Paper className={classes.header}><Typed strings={["Resume"]} typeSpeed={40} /></Paper>
                </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <Paper className={classes.resumeContents}>
                        <BusinessCenterIcon />
                        <h2>Work Experience</h2>
                        <Timeline style={{ marginLeft: "-80%" }}>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                <h4 style={{ fontSize: "1.25rem", marginTop: "0%" }}>Freelance Web Developer - Salt River Psychological Services</h4><p style={{ fontSize: "15px", marginTop: "-2%" }}>2021-present</p>
                                    <p>
                                    Responsible for designing/developing a professional website that meets all of the clients wants and needs.  
            </p>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                <h4 style={{ fontSize: "1.25rem", marginTop: "0%" }}>Physical Therapy Technician - Chandler Physical Therapy</h4><p style={{ fontSize: "15px", marginTop: "-2%" }}>2020-present</p>
                                    <p>
                                        Responsible for assisting physical therapists with non-clinical tasks while caring for individuals. Improvement of company website with Wordpress
            </p>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <h4 style={{ fontSize: "1.25rem", marginTop: "0%" }}>Personal Trainer - Life Time Fitness</h4><p style={{ fontSize: "15px", marginTop: "-2%" }}>2015-2020</p>
                                    <p>
                                        Responsible for assessing needs/wants of clients and creating health and wellness plans based on their goals
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
                        <Timeline style={{ marginLeft: "-80%" }}>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <h4 style={{ fontSize: "1.25rem", marginTop: "0%" }}>University of Arizona Full-Stack Web Development</h4><p style={{ fontSize: "15px", marginTop: "-2%" }}>August 2020 - Feb 2021</p>
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
                                    <h4 style={{ fontSize: "1.25rem", marginTop: "0%" }}>Northern Arizona University, BS Exercise Science</h4><p style={{ fontSize: "15px", marginTop: "-2%" }}>2010-2014</p>
                                    <p>
                                        Received Bachelor's of Science in Exercise Science with a minor in Chemistry.  Graduated with a 3.4 GPA.
            </p>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <h4 style={{ fontSize: "1.25rem", marginTop: "0%" }}>Albuquerque Academy</h4><p style={{ fontSize: "15px", marginTop: "-2%" }}>2003-2010</p>
                                    <p>
                                    </p>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Paper>
                </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Resume;
