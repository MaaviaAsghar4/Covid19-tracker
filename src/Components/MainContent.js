import React, {useEffect, useState} from 'react';
import CountrySelecter from './CountrySelecter';
import StatusBar from './StatusBar';
import { fetchGlobalData } from './Api'


export default function MainContent() {

    let [globalData, setGlobalData] = useState({});

    useEffect(()=>{
        async function fetchGlobalApi() {
            const fetchedGlobalData = await fetchGlobalData();
            setGlobalData({
                confirmed: fetchedGlobalData.confirmed.value,
                recovered: fetchedGlobalData.recovered.value,
                deaths: fetchedGlobalData.deaths.value,
                lastUpdate: fetchedGlobalData.lastUpdate,
            });
        }
        fetchGlobalApi()
    }, [setGlobalData]);

    async function countryChange(country) {
        const fetchedCountryData = await fetchGlobalData(country);

        setGlobalData({
            confirmed: fetchedCountryData.confirmed.value,
            recovered: fetchedCountryData.recovered.value,
            deaths: fetchedCountryData.deaths.value,
            lastUpdate: fetchedCountryData.lastUpdate,
            country: country,
        });
    }

    return (
        <div>
            <CountrySelecter countryChange={countryChange} />
            <StatusBar data={globalData}/>
        </div>
    );
}