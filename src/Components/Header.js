import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CoronaLogo from './coronavirus.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#2d2926ff !important',
  },
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
    <div className={classes.root}>
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
