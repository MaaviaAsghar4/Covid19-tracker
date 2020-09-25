import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CoronaLogo from './coronavirus.png';
import '../App.css'

const useStyles = makeStyles((theme) => ({
  image: {
    width: 70,
    height: 70,
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className='header'>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Covid-19 Tracker
          </Typography>
          <img src={CoronaLogo} alt='Logo' className={classes.image} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
