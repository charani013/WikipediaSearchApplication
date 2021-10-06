let searchInput = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");

function searchResultsEl(result) {
    let {
        title,
        link,
        description
    } = result;

    let divContainer = document.createElement("div");
    divContainer.classList.add("result-item");
    searchResults.appendChild(divContainer);

    let aHerfJs = document.createElement("a");
    aHerfJs.textContent = title;
    aHerfJs.classList.add("result-title");
    aHerfJs.herf = link;
    aHerfJs.target = "_black";
    divContainer.appendChild(aHerfJs);

    let linkBreak = document.createElement("br");
    divContainer.appendChild(linkBreak);

    let urlCreate = document.createElement("a");
    urlCreate.classList.add("result-url");
    urlCreate.href = link;
    urlCreate.target = "_blank";
    urlCreate.textContent = link;
    divContainer.appendChild(urlCreate);

    let linkBreaks = document.createElement("br");
    divContainer.appendChild(linkBreaks);

    let descriptionJs = document.createElement("p");
    descriptionJs.classList.add("link-description");
    descriptionJs.textContent = description;
    divContainer.appendChild(descriptionJs);
}



function createSearchClick(searchInputJs) {
    spinner.classList.add("d-none");
    for (let result of searchInputJs) {
        searchResultsEl(result)
    }
}


function clickedSearch() {
    if (event.key === "Enter") {

        spinner.classList.remove("d-none");
        searchResults.textContent = "";

        let searchInputValue = searchInput.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputValue;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                createSearchClick(search_results)

            })
    }
}



searchInput.addEventListener("keydown", clickedSearch)