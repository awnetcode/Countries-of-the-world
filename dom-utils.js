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
    detailContainerElement.classList.add("detail-container");
    const flagImgElement = createFlagItemElement(country);
    const detailNameElement = document.createElement("strong");
    detailNameElement.classList.add("detail-name");
    detailNameElement.innerText = country.countryName;

    const leftPart = document.createElement("div");
    const rightPart = document.createElement("div");
    leftPart.classList.add("detail-part");
    rightPart.classList.add("detail-part");

    detailContainerElement.appendChild(flagImgElement);
    

    detailContainerElement.appendChild(leftPart);
    detailContainerElement.appendChild(rightPart);


    leftPart.appendChild(detailNameElement);
    leftPart.appendChild(createInfoElement("Native name", country.nativeName));
    leftPart.appendChild(createInfoElement("Population", country.population));
    leftPart.appendChild(createInfoElement("Region", country.region));
    leftPart.appendChild(createInfoElement("Sub region", country.subregion));
    leftPart.appendChild(createInfoElement("Capital", country.capital));
    rightPart.appendChild(createInfoElement("Top level domain", country.tld));
    rightPart.appendChild(createInfoElement("Currencies", country.currencies));
    rightPart.appendChild(createInfoElement("Languages", country.languages));
    rightPart.appendChild(createInfoElement("Borders", country.borders));

    const detailMap = document.createElement("iframe");
    detailMap.classList.add("detail-map");
    detailMap.src = country.map;
    detailMap.width = 800;
    detailMap.height = 600;
    detailMap.referrerpolicy = "no-referrer-when-downgrade";

//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2020756.4108567983!2d-11.8374914!3d8.42228685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf0106183aabf343%3A0x5369e9cdc72cf719!2sSierra%20Leone!5e0!3m2!1spl!2sde!4v1730886329878!5m2!1spl!2sde" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   // detailContainerElement.appendChild(detailMap);

    return detailContainerElement;
};

const createDetailButton =(text, link) =>{
    const anchorElement = document.createElement("a");
    anchorElement.innerHTML = '&larr;'+text;
    anchorElement.classList.add("detail-back-link");
    anchorElement.href = link;

    return anchorElement;
}

/*
const createBorderCountriesContainer = (country) =>{
    const borderCountriesContainerElement = document.createElement("div");
    borderCountriesContainerElement.classList.add("border-countries-container");
    const labelElement = document.createElement("strong");
    labelElement.innerText = "Border Countries";

    borderCountriesContainerElement.appendChild(labelElement);

    country.borders.forEach((border)=>{
        borderCountriesContainerElement.appendChild(
            createDetailButton(border, `/?country=${border}`)
        );
    })

    return borderCountriesContainerElement;
}
*/

export const renderCountriesList = (countries) => {
    const rootElement = document.querySelector("#root");
    rootElement.innerHTML = "";
    rootElement.appendChild(createListElement(countries));
};



export const renderCountryDetails = (country) => {
    const rootElement = document.querySelector("#root");
    rootElement.innerHTML = "";
    rootElement.appendChild(createDetailButton(" Go back", "/"));
    rootElement.appendChild(createDetailElement(country));
}