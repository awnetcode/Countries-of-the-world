export const renderDetail = () =>{
    const searchParams = new URLSearchParams(window.location.search);
    const countryCode = searchParams.get("country");

    if(!countryCode){
        goBackToDashboard();
        }

        const API_URL_DETAIL = ` https://restcountries.com/v3.1/alpha/${countryCode}`;
        fetch(API_URL_DETAIL)
        .then(res => res.json())
        .then(([country]) => {
            if(!country){
                goBackToDashboard();
            }
            console.log(country);
            country = {
                capital: country.capital && country.capital[0],
                population: country.population.toLocaleString(),
                countryName: country.name.common,
                nativeName: country.name.nativeName,
                code: country.cioc,
                region: country.region,
                subregion: country.subregion,
                flagUrl: country.flags.png,
                area: country.area,
                languages: country.languages,
                map: country.maps.googleMaps,
                //tld: country.tld[0],
            };    
        });
}

const goBackToDashboard = () =>{
    window.location.href = "/";
}