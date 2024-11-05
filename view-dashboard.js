import { renderCountriesList } from "./dom-utils.js";

export const renderDashboard = () =>{

const API_URL_ALL = "https://restcountries.com/v3.1/all";

let countries;
let query = "";
let region = "";

fetch(API_URL_ALL)
.then((response)=> response.json())
.then((countriesRaw) => {
    countries = countriesRaw.map((country) => {
        return {
            capital: country.capital && country.capital[0],
            population: country.population.toLocaleString(),
            countryName: country.name.common,
            code: country.cioc,
            region: country.region,
            flagUrl: country.flags.png,
            area: country.area,
            languages: country.languages ? Object.values(country.languages).join(", ") : "Unknown",
            map: country.maps.googleMaps,
        };
     });
     renderCountriesList(countries);
    });

    const filterDataAndRenderCountriesList = () =>{
        const filteredCountries = countries.filter((country) =>{
            return(
                country.countryName.toLowerCase().includes(query) &&
                (!region || country.region === region) 
            )
        })
        renderCountriesList(filteredCountries);
    }

    document.querySelector('#query').addEventListener("input", (e)=>{
        //render countries based on query
     query = e.target.value.toLowerCase().trim();
     filterDataAndRenderCountriesList();
    })

    //render countries based on region
    document.querySelector("#region").addEventListener('change', (e)=>{
         region = e.target.value;
         filterDataAndRenderCountriesList();

       // e.target.value = "";
    })
}