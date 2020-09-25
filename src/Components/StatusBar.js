import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    gridRoot: {
        flexGrow: 1,
        margin: '20px 10px',
        textAlign: 'center',
    },
    infected: {
        color: "blue",
        fontWeight: 'bold',
    },
    recovered: {
        color: "green",
        fontWeight: 'bold',
    },
    deaths: {
        color: "red",
        fontWeight: 'bold',
    },
    infect: {
        color: "blue",
    },
    recover: {
        color: "green",
    },
    death: {
        color: "red",
    },
    infectCard: {
        borderBottom: '10px solid blue',
    },
    recoverCard: {
        borderBottom: '10px solid green',
    },
    deathCard: {
        borderBottom: '10px solid red',
    },
}))

export default function StatusBar({data}) {

    const classes = useStyles();


    if (!data.confirmed) {
        return 'Loading...'
    }

    return (
        <div className={classes.gridRoot}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card elevation={3}  className={classes.infectCard}>
                        <CardContent>
                            <Typography className={classes.infected}>Total Cases</Typography>
                            <Typography className={classes.infect}>{data.confirmed}</Typography>
                            <Typography color='textPrimary'>Last Updated</Typography>
                            <Typography color='textSecondary'>{new Date(data.lastUpdate).toDateString()}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card elevation={3} className={classes.recoverCard}>
                        <CardContent>
                            <Typography className={classes.recovered}>Total Recovered</Typography>
                            <Typography className={classes.recover}>{data.recovered}</Typography>
                            <Typography color='textPrimary'>Last Updated</Typography>
                            <Typography color='textSecondary'>{new Date(data.lastUpdate).toDateString()}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card elevation={3} className={classes.deathCard}>
                        <CardContent>
                            <Typography className={classes.deaths}>Total Deaths</Typography>
                            <Typography className={classes.death}>{data.deaths}</Typography>
                            <Typography color='textPrimary'>Last Updated</Typography>
                            <Typography color='textSecondary'>{new Date(data.lastUpdate).toDateString()}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}