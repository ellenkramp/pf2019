import React from 'react';
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
}));

export default Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.buttons}>
          <img className={classes.logo} src={logo} height="45" width="150" />
          <Button color="inherit">My Story</Button>
          <Button color="inherit">Resume</Button>
          <Button color="inherit">Contact Me</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}