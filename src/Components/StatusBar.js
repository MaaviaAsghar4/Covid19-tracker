import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    gridRoot: {
        flexGrow: 1,
        margin: '20px 10px',
        textAlign: 'center',
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
                    <Card elevation={3}>
                        <CardContent>
                            <Typography>Total Cases</Typography>
                            <Typography>{data.confirmed}</Typography>
                            <Typography>Last Updated</Typography>
                            <Typography>{new Date(data.lastUpdate).toDateString()}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography>Total Recovered</Typography>
                            <Typography>{data.recovered}</Typography>
                            <Typography>Last Updated</Typography>
                            <Typography>{new Date(data.lastUpdate).toDateString()}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography>Total Deaths</Typography>
                            <Typography>{data.deaths}</Typography>
                            <Typography>Last Updated</Typography>
                            <Typography>{new Date(data.lastUpdate).toDateString()}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}