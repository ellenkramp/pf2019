import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from 'assets/logo-white.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  buttons: {
    justifyContent: 'flex-end',
  },
  leftNav: {
    display: 'flex',
    alignContent: 'flex-end',
  },
  logo: {
    padding: 10,
    marginRight: theme.spacing(2),
    justifyContent: 'flex-start'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.buttons}>
          <img className={classes.logo} src={logo} height="45" width="150" />
          <Button color="inherit"><Link to="/" className={classes.link}>My Story</Link></Button>
          <Button color="inherit"><Link to="/resume" className={classes.link}>Resume</Link></Button>
          <Button color="inherit"><Link to="/contactme" className={classes.link}>Contact Me</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}