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

const createDetailElement = (country) =>{
    const detailContainerElement = document.createElement("div");
    const flagImgElement = createFlagItemElement(country);
    const detailNameElement = document.createElement("strong");
    detailNameElement.innerText = country.countryName;

    detailContainerElement.appendChild(flagImgElement);
    detailContainerElement.appendChild(detailNameElement);

    detailContainerElement.appendChild(createInfoElement("Native name", country.nativeName));
    detailContainerElement.appendChild(createInfoElement("Population", country.population));
    detailContainerElement.appendChild(createInfoElement("Region", country.region));
    detailContainerElement.appendChild(createInfoElement("Sub region", country.subregion));
    detailContainerElement.appendChild(createInfoElement("Capital", country.capital));
    detailContainerElement.appendChild(createInfoElement("Top level domain", country.tld));
    detailContainerElement.appendChild(createInfoElement("Currencies", country.currencies));
    detailContainerElement.appendChild(createInfoElement("Languages", country.languages));
    detailContainerElement.appendChild(createInfoElement("Borders", country.borders));

    return detailContainerElement;
};

const createDetailButton =(text, link) =>{
    const anchorElement = document.createElement("a");
    anchorElement.innerText = text;
    anchorElement.classList.add("detail-back-link");
    anchorElement.href = link;

    return anchorElement;
}


const createBorderCountriesContainer = () =>{
    const borderCountriesContainerElement = document.createElement("div");
    const labelElement = document.createElement("strong");
    labelElement.innerText = "Border Countries";
}

export const renderCountriesList = (countries) => {
    const rootElement = document.querySelector("#root");
    rootElement.innerHTML = "";
    rootElement.appendChild(createListElement(countries));
};

export const renderCountryDetails = (country) => {
    const rootElement = document.querySelector("#root");
    rootElement.innerHTML = "";
    rootElement.appendChild(createDetailButton("Go back", "/"));
    rootElement.appendChild(createDetailElement(country));
}