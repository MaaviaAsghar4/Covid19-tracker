const url = 'https://covid19.mathdro.id/api';

export const fetchGlobalData = async () => {
    try {
        const response = await fetch(url);
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