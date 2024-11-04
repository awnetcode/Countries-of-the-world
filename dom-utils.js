const createInfoElement = (labelName, value) =>{
    const infoElement = document.createElement("div");

    const labelElement = document.createElement("strong");
    labelElement.innerText = `${labelName}: `;
    const valueElement = document.createElement("span");
    valueElement.innerText = value;

    infoElement.appendChild(labelElement);
    infoElement.appendChild(valueElement);

    return infoElement;
};

const createFlagItemElement = (country) =>{
    const imgContainerElement = document.createElement("div");
    const imgElement = document.createElement("img");
    imgElement.src = country.flagUrl;
    imgElement.alt = `${country.countryName} flag`;

    imgContainerElement.appendChild(imgElement);

    return imgContainerElement;
}

const createCountryItemElement = (country) =>{
    const countryElement = document.createElement("li");
    const anchorElement = document.createElement("a");
    const countryNameElement = document.createElement("strong");
    const countryMapLinkElement = document.createElement("span");
    countryNameElement.classList.add("country-name");



    anchorElement.href= `?country=${country.code}`;
    countryNameElement.innerText = country.countryName;

    countryElement.appendChild(createFlagItemElement(country));

    const infoContainerElement = document.createElement("div");
    infoContainerElement.classList.add("info-container");

    infoContainerElement.appendChild(countryNameElement);
    infoContainerElement.appendChild(createInfoElement("Region", country.region));
    infoContainerElement.appendChild(createInfoElement("Area", country.area));
    infoContainerElement.appendChild(createInfoElement("Population", country.population));
    infoContainerElement.appendChild(createInfoElement("Capital", country.capital));
    infoContainerElement.appendChild(createInfoElement("Languages", country.languages));

    infoContainerElement.appendChild(countryMapLinkElement);
    countryMapLinkElement.innerHTML = '<a class="map-link" href="'+country.map+'" target="blank">&#187; See on map &#187;</a>';

    anchorElement.appendChild(infoContainerElement);
    countryElement.appendChild(anchorElement);

    return countryElement;
}

const createListElement = (countries) =>{
    const listElement = document.createElement("ul");
    countries.forEach((country) =>{
        listElement.appendChild(createCountryItemElement(country));
    });

    return listElement;
}

export const renderCountriesList = (countries) => {
    const rootElement = document.querySelector("#root");
    rootElement.innerHTML = "";
    rootElement.appendChild(createListElement(countries));
};