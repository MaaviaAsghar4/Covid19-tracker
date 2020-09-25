import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    gridRoot: {
        flexGrow: 1,
        margin: '20px 10px',
        textAlign: 'center',
    },
}))

export default function StatusBar({country}) {
    console.log(country)
    let [globalData, setGlobalData] = useState({});
    let url = 'https://covid19.mathdro.id/api';
    useEffect(() => {
    let changeableURl = url;
    if(country !== ""){
        changeableURl = `${url}/countries/${country}`;
    console.log(changeableURl)
    }
    
        async function fetchGlobalApi() {
            const response = await fetch(changeableURl);;
            let fetchedData = await response.json();
            setGlobalData({
                confirmed: fetchedData.confirmed,
                recovered: fetchedData.recovered,
                deaths: fetchedData.deaths,
                lastUpdate: fetchedData.lastUpdate,
            });
        }
        fetchGlobalApi();
    }, [])

    // useEffect(()=>{
    //     async function fetchGlobalApi() {
    //         const fetchedGlobalData = await fetchGlobalData();
    //         setGlobalData({
    //             confirmed: fetchedGlobalData.confirmed.value,
    //             recovered: fetchedGlobalData.recovered.value,
    //             deaths: fetchedGlobalData.deaths.value,
    //             lastUpdate: fetchedGlobalData.lastUpdate,
    //         });
    //     }
    //     fetchGlobalApi()
    // }, [])

    const classes = useStyles();

    if (!globalData.confirmed) {
        return 'Loading...'
    }

    return (
        <div className={classes.gridRoot}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography>Total Cases</Typography>
                            <Typography>{globalData.confirmed.value}</Typography>
                            <Typography>Last Updated</Typography>
                            <Typography>{new Date(globalData.lastUpdate).toDateString()}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography>Total Recovered</Typography>
                            <Typography>{globalData.recovered.value}</Typography>
                            <Typography>Last Updated</Typography>
                            <Typography>{new Date(globalData.lastUpdate).toDateString()}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography>Total Deaths</Typography>
                            <Typography>{globalData.deaths.value}</Typography>
                            <Typography>Last Updated</Typography>
                            <Typography>{new Date(globalData.lastUpdate).toDateString()}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}