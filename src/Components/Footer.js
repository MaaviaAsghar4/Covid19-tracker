import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import '../App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className='footer'>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Source: https://covid19.mathdro.id/api
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
