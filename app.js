import { renderCountriesList } from "./dom-utils.js";
const API_URL_ALL = "https://restcountries.com/v3.1/all";

let countries;

fetch(API_URL_ALL)
.then((response)=> response.json())
.then((countriesRaw) => {
    console.log(countriesRaw);
    countries = countriesRaw.map((country) => {
        return {
            capital: country.capital && country.capital[0],
            population: country.population,
            countryName: country.name.common,
            region: country.region,
            flagUrl: country.flags.png,
            area: country.area,
            languages: country.languages,
        };
     })
     renderCountriesList(countries);
    });
