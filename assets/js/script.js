// Fullpage.js setup
new fullpage("#fullpage", {

    // License
    // licenseKey: 'YOUR_KEY_HERE',
    // Design
    sectionsColor: ["#ADD8E6", "#ADD8E6", "#ADD8E6"]
    // responsiveSlides: true
    // fixedElements: '.hero'
    // Events
	  // afterResponsive: function(isResponsive){}

  });

// API #1
function dogApi() {
    var dogFetchUrl = "https://dog.ceo/api/breeds/image/random";

    fetch(dogFetchUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // random dog image URL
        // console.log(data.message);
        imgUrl = data.message;
        console.log("dog fetched");
    });
}

// API #2
function catApi() {
    var catApiKey = "6239a053-498a-49cb-ac5c-e7a746598576";

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", catApiKey);

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    
    fetch("https://api.thecatapi.com/v1/images/search?format=json", requestOptions)
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
    imgUrl = data[0].url;
    console.log("cat fetched");
    });
}
