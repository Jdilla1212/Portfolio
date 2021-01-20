import React from "react";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import manageerPic from '../../assets/images/manageer.png';
import budgetPic from '../../assets/images/budget.png';
import fitnessPic from '../../assets/images/fitness.png';
import burgerPic from '../../assets/images/burger.png';
import bookApp from '../../assets/images/bookApp.png';
import portfolioPic from '../../assets/images/portfolio.png';

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
  media: {
    height: 140,
  },
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <Paper className={classes.header}><Typed strings={["Projects"]} typeSpeed={40} /></Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
        <Card style={{margin: "auto"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={manageerPic}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Manageer ERP
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Manageer ERP is an application used to efficiently track, plan and manage all of the core components of your small business. Whether it's tracking financials, organizing your teams/departments, or onboarding new employees, Manageer does it all for you in one easy-to-use app!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="https://polar-dawn-89598.herokuapp.com/" size="small" color="primary">
          Link to deployed version
        </Button>
        <Button href="https://github.com/poserposer13/Demeter-Project" size="small" color="primary">
          Link to GitHub repo
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
        <Card style={{margin: "auto"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={budgetPic}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Budget Tracker
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Budget Tracker is an easy to use app that allows you track your expenses whether you're online or off so you can keep track on the go! <br/> <br/> This app uses an express and MongoDB back-end.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button href="https://polar-dawn-89598.herokuapp.com/" size="small" color="primary">
          Link to deployed version
        </Button>
        <Button href="https://powerful-sands-86074.herokuapp.com/" size="small" color="primary">
          Link to GitHub repo
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
        <Card style={{margin: "auto"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={fitnessPic}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Mongoose Fitness Tracker
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Workout Tracker is exactly what its name implies, an app that allows you track cardio and resistance training workouts! Log your sets, reps, weights, miles ran, and workout duration all in one simple and easy to use app!  This app uses an express and mongoose back-end.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button href="https://polar-bastion-88499.herokuapp.com/?id=5fd685d634bc0000176cbfe6" size="small" color="primary">
          Link to deployed version
        </Button>
        <Button href="https://github.com/Jdilla1212/Mongoose-Fitness-Tracker" size="small" color="primary">
          Link to GitHub repo
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
        <Card style={{margin: "auto"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={burgerPic}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Burger Devourer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A tasty app that lets you create and devour burgers! The app uses Node, MySQl, express and handlebars. MySQL to create the database of burgers on the back-end, node for the CLI and querying through the database, and handlebars to render HTML to the front-end
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button href="https://mighty-river-38472.herokuapp.com/" size="small" color="primary">
          Link to deployed version
        </Button>
        <Button href="https://github.com/Jdilla1212/Burger-devourer" size="small" color="primary">
          Link to GitHub repo
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
        <Card style={{margin: "auto"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={bookApp}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            React Reading List
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            An app that allows to keep track of the books you want to read, as well as add new ones!  Add the book title, author, and a short synopsis so you can remember all the books you need to get caught up on!  This app uses the ReactJS framework for the front-end and express and mongoose for the back-end.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button href="https://book-app-jdilla.herokuapp.com/" size="small" color="primary">
          Link to deployed version
        </Button>
        <Button href="https://github.com/Jdilla1212/book-app" size="small" color="primary">
          Link to GitHub repo
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
        <Card style={{margin: "auto"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={portfolioPic}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            React Portfolio Website
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            You're lookin' at it!  A fun project that brings some of my other projects together.  Learn about me, my work/education history and some of the things I've built.  Brought to life with React and MaterialUI
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button href="https://polar-dawn-89598.herokuapp.com/" size="small" color="primary">
          Link to deployed version
        </Button>
        <Button href="https://github.com/Jdilla1212/Portfolio" size="small" color="primary">
          Link to GitHub repo
        </Button>
      </CardActions>
    </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
