import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import FilterListRoundedIcon from "@material-ui/icons/FilterListRounded";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ContactMail from "@material-ui/icons/ContactMail";
import AssignmentIcon from '@material-ui/icons/Assignment';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import FolderRoundedIcon from '@material-ui/icons/FolderRounded';
import Avatar from "@material-ui/core/Avatar";
import avatar from "../../assets/images/avatar.png";
import { Link } from "react-router-dom";
import Hidden from '@material-ui/core/Hidden';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: "100%",
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  navigationLinks: {
    display: "flex",
    justify: "flex-end",
    padding: theme.spacing(0, 1),
    color: "black",
    fontWeight: "bold",
    marginLeft: "1%",
  },
  navigationAbout: {
    display: "flex",
    justify: "flex-end",
    padding: theme.spacing(0, 1),
    color: "black",
    fontWeight: "bold",
    marginLeft: "70%",
  }
}));

const menuItems = [
  {
    listIcon: <ListRoundedIcon />,
    listText: "About Me",
    href: "/about"
  },
  {
    listIcon: <AssignmentIcon />,
    listText: "Resume",
    href: "/resume"
  },
  {
    listIcon: <FolderRoundedIcon />,
    listText: "Projects",
    href: "/projects"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact Me",
    href: "/contact"
  },
];

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar
          style={{ background: "linear-gradient(to right, #19547b, #d7d2cc)" }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <FilterListRoundedIcon />
          </IconButton>  
          <Button
            style={{ fontSize: "20px" }}
            href="/"
            component="button"
            color="inherit"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            MY PORTFOLIO
          </Button>
          <Hidden smDown>
          <Button
            href="/about"
            className={classes.navigationAbout}
            component="button"
            color="inherit"
            onClick={handleDrawerClose}
          >
            ABOUT ME
          </Button>
          <Button
            href="/resume"
            className={classes.navigationLinks}
            component="button"
            color="inherit"
            onClick={handleDrawerClose}
          >
            RESUME
          </Button>
          <Button
            href="/projects"
            className={classes.navigationLinks}
            component="button"
            color="inherit"
            onClick={handleDrawerClose}
          >
            PROJECTS
          </Button>
          <Button
            href="/contact"
            className={classes.navigationLinks}
            component="button"
            color="inherit"
            onClick={handleDrawerClose}
          >
            CONTACT ME
          </Button>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Avatar
            className={classes.avatar}
            src={avatar}
            alt="Josh Padilla"
            style={{ margin: "auto" }}
          />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuItems.map((menuItem, key) => (
            <Link to={menuItem.href} color="inherit" className={`${classes.menuItem} drawerButton`} key={key}>
            <ListItem button  onClick={handleDrawerClose}>
              <ListItemIcon className={classes.menuItem}>
                {menuItem.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.menuItem}
                primary={menuItem.listText}
              ></ListItemText>
            </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      ></main>
    </div>
  );
}
