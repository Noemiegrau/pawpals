var $createProfileBtn = $('#createProfileBtn');
var $create1Btn = $('#create1Btn');
var $create2Btn = $('#create2Btn');
var $create3Btn = $('#create3Btn');
var $create4Btn = $('#create4Btn');
var $create5Btn = $('#create5Btn');
var $imgSelect = $('#img-select');
var $newImgBtn = $('#new-img');
var userProfileObj = {};
// new Pageable("#container");
 
new Pageable("#container", {
    childSelector: "[data-anchor]", // CSS3 selector string for the pages
    anchors: [], // define the page anchors
    pips: false, // display the pips
    animation: 300, // the duration in ms of the scroll animation
    delay: 0, // the delay in ms before the scroll animation starts
    throttle: 50, // the interval in ms that the resize callback is fired
    orientation: "vertical", // or horizontal
    swipeThreshold: 50, // swipe / mouse drag distance (px) before firing the page change event
    freeScroll: false, // allow manual scrolling when dragging instead of automatically moving to next page
    navPrevEl: false, // define an element to use to scroll to the previous page (CSS3 selector string or Element reference)
    navNextEl: false, // define an element to use to scroll to the next page (CSS3 selec++tor string or Element reference)
    infinite: false, // enable infinite scrolling (from 0.4.0)
    // slideshow: { // enable slideshow that cycles through your pages automatically (from 0.4.0)
    //     interval: 3000, // time in ms between page change,
    //     delay: 0 // delay in ms after the interval has ended and before changing page
    // },
    // events: {
    //     wheel: true, // enable / disable mousewheel scrolling
    //     mouse: true, // enable / disable mouse drag scrolling
    //     touch: true, // enable / disable touch / swipe scrolling
    //     keydown: true, // enable / disable keyboard navigation
    // },
    // easing: function(currentTime, startPos, endPos, interval) {
    //     // the easing function used for the scroll animation
    //     return -endPos * (currentTime /= interval) * (currentTime - 2) + startPos;
    // },
    onInit: function() {
        // do something when the instance is ready
    },
    onUpdate: function() {
        // do something when the instance updates
    },    
    onBeforeStart: function() {
        // do something before scrolling begins
    },
    onStart: function() {
        // do something when scrolling begins
    },
    onScroll: function() {
        // do something during scroll
    },
    onFinish: function() {
        // do something when scrolling ends
    },
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
            imageSelection(imgUrl);
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
            console.log(data);
            imgUrl = data[0].url;
            console.log("cat fetched");
            imageSelection(imgUrl);
    });
}

var imageSelection = function(imgUrl) {
    // console.log($choice.children().length);
    // if ($('#img-choice-1').children().length > 0) {
    //     $('#img-choice-1').empty();
    // }
    // if ($('img-choice-1').attr('backgroundImage'))
    console.log(imgUrl);
    $('.img-choice')
        .css(
            'backgroundImage', 
            "url('" + imgUrl + "')"
            );
    // var $choice = $(`#img-choice-1`);
    // console.log($choice);
    // var $image = $('<img>')
    //     .attr('width', '100%')
    //     .attr('src', imgUrl);
    // $choice.append($image);
    // $imgSelect.append($choice);

    // console.log(i);
};

var userAnimalCheck = function(userAnimal) {
    console.log(userAnimal);
    if (userAnimal === 'cat') {
        catApi();
    } else if (userAnimal === 'dog') {
        dogApi();
    };
    $('#create-2').modal();
}

var create1Click = function() {
    var animalChoice = $("input[name='animal-choice']");

    // find which is selected
    for (i = 0; i < animalChoice.length; i++) {
        if (animalChoice[i].checked) {
            var userAnimal = animalChoice[i].value;
            userProfileObj.animal = userAnimal;
            userAnimalCheck(userAnimal);
            // for (i = 0; i < 5; i++) {
            //     console.log(userProfileObj.animal);
                // if (userAnimal === 'cat') {
                //     catApi();
                // } else if (userAnimal === 'dog') {
                //     dogApi();
                // }
            // }
            // $('#create-2').modal();
            // break;
        } else if (!animalChoice[0].checked && !animalChoice[1].checked) {
            alert('Make a selection');
            $('#create-1').modal();
            // break;
        };
    };
};

function create2Click() {
    console.log('click');
    
    $('#create-3').modal();
};

var create3Click = function() {
    var name = $('#user-name');
    var userName = name.val();
    userProfileObj.name = userName;
    $('#create-4').modal();
};

var create4Click = function() {
    var age = $('#user-age');
    var userAge = age.val();
    userProfileObj.age = userAge;
    $('#create-5').modal();
};

var create5Click = function() {
    var interestChoice = $("input[name='interest-choice']");

    // find which radio button is selected
    for (i = 0; i < interestChoice.length; i++) {
        if (interestChoice[i].checked) {
            var userInterestChoice = interestChoice[i].value;
            userProfileObj.interest = userInterestChoice;
            console.log(userProfileObj);
            break;
        };
    };
    $.modal.close();
}

// Create profile modal button click handlers
$createProfileBtn.click(function() {
    $('#create-1').modal();
});

$create1Btn.click(create1Click);
$create2Btn.click(create2Click);
$newImgBtn.click(create1Click);
$create3Btn.click(create3Click);
$create4Btn.click(create4Click);
$create5Btn.click(create5Click);
