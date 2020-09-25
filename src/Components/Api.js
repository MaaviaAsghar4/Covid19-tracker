const url = 'https://covid19.mathdro.id/api';

export const fetchGlobalData = async (country) => {
    try {

        let changeableURL = url;
        
        if(country) {
            changeableURL = `${url}/countries/${country}`
        }
    
        const response = await fetch(changeableURL);
        let fetchedData = await response.json();
        return fetchedData;
    } catch (error) {
        return error;
    }
}


export const fetchAllCountries = async () => {
    try {
        const response = await fetch(`${url}/countries`);
        let fetchCountry = await response.json();
        return fetchCountry;
    } catch (error) {
        return error;
    }
}