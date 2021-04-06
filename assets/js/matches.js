// get the storedProfile from local storage
var matchesProfile = JSON.parse(localStorage.getItem('storedProfile'))

if (!matchesProfile) {
    location.href = './index.html';
};

for (let i = 0; i <= matchesProfile.matchData.matches.length; i++) {

    // creating variables to get the match image, age, and name from storedProfile
    var matchImage = matchesProfile.matchData.matches[i].matchImg; 
    var matchAge = matchesProfile.matchData.matches[i].age;
    var matchName = matchesProfile.matchData.matches[i].name;

    // create variable to get the Match "columns" Card div container in match html
    var columnsContainerEl = document.getElementsByClassName('columns')[0];
    var columnDiv = document.getElementsByClassName('column')[0];

    // create a div with a class of 'card' and append to the 'column' div
    var cardDiv = document.createElement("div");
    cardDiv.classList.add('card');
    columnDiv.appendChild(cardDiv);

    // create a div with a class of 'card-image' and append to the 'card' div
    var cardImageDiv = document.createElement("div");
    cardImageDiv.classList.add('card-image');
    cardDiv.appendChild(cardImageDiv);

    // create a figure element with a class of 'image is-5by4' and append to the 'card-image'
    // and create a img tag that contains the match images and append to the figure element
    var figureEl = document.createElement("figure");
    figureEl.classList.add('image','is-5by4');
    figureEl.innerHTML = "<img src=" + matchImage  + ">";
    cardImageDiv.appendChild(figureEl);

    // create a div with a class of 'card content' and to append to the 'card' div
    var cardContentDiv = document.createElement("div");
    cardContentDiv.classList.add('card-content');
    cardDiv.appendChild(cardContentDiv);

    // create a div with a class of 'media' and append to the 'CardContentDiv' div
    var mediaDiv = document.createElement("div")
    mediaDiv.classList.add('media');
    cardContentDiv.appendChild(mediaDiv);

    // create a div with a class of 'media-content' and append to the 'media' div then create
    // <p> tag with a class of 'title is-4' that appends to the 'media content' div and insert
    // the matches name variable into it
    var mediaContentDiv = document.createElement("div");
    mediaContentDiv.classList.add('media-content');
    mediaContentDiv.innerHTML = "<p class='title is-4'>" + matchName + "</p> <p class='subtitle is-6'>" + matchAge + "</p>";
    mediaDiv.appendChild(mediaContentDiv);

}


