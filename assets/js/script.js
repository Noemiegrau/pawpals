// Page buttons
var $createProfileBtn = $('#createProfileBtn');
var $loginBtn = $('#loginBtn');

// Modals
var $create1 = $('#create-1');
var $create2 = $('#create-2');
var $create3 = $('#create-3');
var $create4 = $('#create-4');
var $create5 = $('#create-5');
var $modalAlert = $('#modal-alert');

// Modal buttons
var $create1Btn = $('#create1Btn');
var $create2Btn = $('#create2Btn');
var $create3Btn = $('#create3Btn');
var $create4Btn = $('#create4Btn');
var $create5Btn = $('#create5Btn');
var $alertBtn = $('#alert-btn');
var $newImgBtn = $('#new-img');

// Modal elements
var $alertText = $('#alert-text');
var $alertSubtext = $('#alert-subtext');
var $imgSelect = $('#img-select');

// Other variables
var modalNum = 0;
var profileExists = false;
var userProfileObj = {};
var createModalProps = {
    clickClose: false,
    showClose: false
};
 
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
            imgUrl = data.message;
            console.log("dog fetched");
            imageSelection(imgUrl);
    });
};

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
};

// load stored userProfileObj
var storedProfile = JSON.parse(localStorage.getItem('storedProfile'));

if (!storedProfile) {
    console.log('no profile found');
} else {
    console.log('profile found');
    profileExists = true;
    userProfileObj = storedProfile;
};

var alertModal = function(modalNum) {
    console.log(modalNum);

    switch(modalNum) {
            // if no user animal was selected
        case 1:
            $alertText.text('Please make a selection');
            $modalAlert.modal(createModalProps);
            break;

            // image select
        case 2:
            break;

            // if no name is entered
        case 3:
            $alertText.text('Please enter your name');
            $modalAlert.modal(createModalProps);
            break;

            // if no age is entered
        case 4:
            $alertText.text('Please enter your age');
            $modalAlert.modal(createModalProps);
            break;

            // if no interest choice is selected
        case 5:
            $alertText.text('Please make a selection');
            $modalAlert.modal(createModalProps);
            break;

            // if min-max aren't valid or min > max
        case 6:
            $alertText.text('Invalid selection');
            $modalAlert.modal(createModalProps);
            break;

            // login clicked, no profile
        case 7:
            $alertText.text('No profile found! Please create a profile');
            $modalAlert.modal(createModalProps);
            break;

            // profile finished
        case 8:
            $alertText.text('Profile Complete!');
            $alertSubtext.text("Let's find some furry friends!");
            $modalAlert.modal(createModalProps);
            break;
    };
};

var sendBackTo = function() {
    console.log('send back to');
    console.log(modalNum);

    switch(modalNum) {
            // send to animal selection
        case 1:
            $create1.modal(createModalProps);
            break;

            // send to image selection
        case 2:
            $create2.modal(createModalProps);
            break;

            // send to name input
        case 3:
            $create3.modal(createModalProps);
            break;

            // send to age input
        case 4:
            $create4.modal(createModalProps);
            break;

            // send to interest choice and age-range selection
        case 5:
            $create5.modal(createModalProps);
            break;

            // send to interest choice and age-range selection
        case 6:
            $create5.modal(createModalProps);
            break;

            // close no profile alert from login btn
        case 7:
            $.modal.close();
            break;

            // send to login check, then to ./swipe.html
        case 8:
            loginProfileCheck();
            break;
    };
};

var loginProfileCheck = function() {
    if (profileExists == true) {
        console.log('yeeee');
        location.href = './swipe.html';
    } else if (profileExists == false) {
        modalNum = 7;
        console.log('boooooo');
        alertModal(modalNum);
    }
};

var imageSelection = function(imgUrl) {
    console.log(imgUrl);
    $('.img-choice')
        .css(
            'backgroundImage', 
            "url('" + imgUrl + "')"
        );
};

var userAnimalCheck = function() {
    userAnimal = userProfileObj.animal;

    // check for which fetch request to run
    if (userAnimal === 'cat') {
        catApi();
    } else if (userAnimal === 'dog') {
        dogApi();
    };

    // pass to next modal
    $create2.modal(createModalProps);
};

var ageRangeOpts = function() {
    var $select = $('#user-age');
    for (i = 0; i < 40; i++) {
        var $userAgeOpt = $('<option>')
            .val(i)
            .text(i);
        $select.append($userAgeOpt);
    };
};

var minAgeOpts = function() {
    var $select = $('#match-min-age');
    for (i = 0; i < 40; i++) {
        var $ageOpt = $('<option>')
            .val(i)
            .text(i);
        $select.append($ageOpt);
    };
};

var maxAgeOpts = function() {
    var $select = $('#match-max-age');
    for (i = 0; i < 40; i++) {
        var $ageOpt = $('<option>')
            .val(i)
            .text(i);
        $select.append($ageOpt);
    };
};

var deselectRadios = function(radioLength) {
    for (i = 0; i < 5; i++) {
        console.log(radioLength);
        $("input[type='radio']")[i].checked = false;
    };
};

var clearAgeOpt = function() {
    $('#user-age, #match-min-age, #match-max-age').prop('selectedIndex', 0);
};

// Get users animal (cat or dog) for API fetch
var create1Click = function() {
    var animalChoice = $("input[name='animal-choice']");
    // set modalNum for alert switch cases
    modalNum = 1;

    // find which is selected
    for (i = 0; i < animalChoice.length; i++) {
        if (animalChoice[i].checked) {
            // store to user object
            var userAnimal = animalChoice[i].value;
            userProfileObj.animal = userAnimal;

            // send to animal check for image fetching,
            // pass to next modal
            userAnimalCheck();

            // clear radio buttons
            var radioLength = animalChoice.length;
            deselectRadios(radioLength);
            
            // if neither are checked
        } else if (!animalChoice[0].checked && !animalChoice[1].checked) {
            // send for alert modal
            alertModal(modalNum);
            break;
        };
    };
};

// Get user image selection
function create2Click() {
    // set modalNum for alert switch cases
    modalNum = 2;

    // get image URL and store to user object
    var userImg = $('.img-choice')
        .css('backgroundImage')
        .split("\"")[1];
    userProfileObj.profileImg = userImg;
    
    // clear name input on next modal
    $('#user-name').val('');
    // pass to next modal
    $create3.modal(createModalProps);
};

var create3Click = function() {
    // set modalNum for alert switch cases
    modalNum = 3;

    // get and format to lowercase
    var nameInput = 
        $('#user-name')
        .val()
        .toLowerCase();
    console.log(nameInput);

    // check for input
    if (!nameInput) {
        // send for alert modal
        alertModal(modalNum);
    } else {
        // format name properly (capitalized first letter)
        var nameSplit = nameInput.split(' ');
        for (var i = 0; i < nameSplit.length; i++) {
            nameSplit[i] = nameSplit[i][0].toUpperCase() + nameSplit[i].substr(1);
        };
        // recombine if more than one word
        var userName = nameSplit.join(' ');
        console.log(userName);

        // store name to user object
        userProfileObj.name = userName;

        // clear age input on next modal
        ageRangeOpts();
        // pass to next modal
        $create4.modal(createModalProps);
    };
};

var create4Click = function() {
    // set modalNum for alert switch cases
    modalNum = 4;

    // get user age input
    var userAge =
        $('#user-age')
        .val();
    console.log(userAge);

    // check for input
    if (!userAge) {
        // send for alert modal
        alertModal(modalNum);
    } else {
        // store age to user object
        userProfileObj.age = userAge;

        // clear age inputs for next modal
        clearAgeOpt();
        // initiate options for <select> on next modal
        minAgeOpts();
        maxAgeOpts();

        // pass to next modal
        $create5.modal(createModalProps);
    };
};

var create5Click = function() {
    var interestChoice = $("input[name='interest-choice']");

    // set modalNum for alert switch cases
    modalNum = 5;

    // find which radio button is selected
    for (i = 0; i < interestChoice.length; i++) {

        // if one is selected
        if (interestChoice[i].checked) {

            // store user interest to user object
            var userInterestChoice = interestChoice[i].value;
            userProfileObj.interest = userInterestChoice;

            // get user min-max ages
            var userMinAge = 
                $('#match-min-age')
                .val();
            var userMaxAge =
                $('#match-max-age')
                .val();
            
            // if min < max and both are numbers
            if (userMinAge < userMaxAge && userMinAge !== null && userMaxAge !== null) {
                console.log('correct');

                // store user min-max ages to user object
                userProfileObj.minAge = userMinAge;
                userProfileObj.maxAge = userMaxAge;

                // initialize matchData object in user object
                userProfileObj.matchData = {
                    matches: [],
                }
                console.log(userProfileObj);

                // store userProfileObj in localStorage
                localStorage.setItem('storedProfile', JSON.stringify(userProfileObj));

                // clear radio buttons
                var radioLength = interestChoice.length;
                deselectRadios(radioLength);

                // set to true for loginProfileCheck
                profileExists = true;
                // clear age inputs
                clearAgeOpt();

                // set modalNum for and send to profile complete confirmation
                modalNum = 8;
                alertModal(modalNum);
                break;

                // if min > max or either have not been selected
            } else if (userMinAge > userMaxAge || userMaxAge == null || userMinAge == null) {
                console.log('invalid');

                // set modalNum for alert switch cases
                modalNum = 6;
                // send for modal alert
                alertModal(modalNum);
            };

            // if no interest choice has been selected
        } else if (!interestChoice[0].checked && !interestChoice[1].checked && !interestChoice[2].checked) {
            // send for modal alert
            alertModal(modalNum);
            break;
        };
    };
};

// create profile btn click handler
var createClick = function() {
    // send to first profile creation modal
    $create1.modal(createModalProps);
}

// Create profile modal button click handlers
$createProfileBtn.click(createClick);
$alertBtn.click(sendBackTo);
$loginBtn.click(loginProfileCheck);
$newImgBtn.click(userAnimalCheck);
$create1Btn.click(create1Click);
$create2Btn.click(create2Click);
$create3Btn.click(create3Click);
$create4Btn.click(create4Click);
$create5Btn.click(create5Click);