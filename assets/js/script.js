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
        case 1:
            $alertText.text('Please make a selection');
            $modalAlert.modal(createModalProps);
            break;
        case 2:
            break;
        case 3:
            $alertText.text('Please enter your name');
            $modalAlert.modal(createModalProps);
            break;
        case 4:
            $alertText.text('Please enter your age');
            $modalAlert.modal(createModalProps);
            break;
        case 5:
            $alertText.text('Please make a selection');
            $modalAlert.modal(createModalProps);
            break;
        case 6:
            $alertText.text('Invalid selection');
            $modalAlert.modal(createModalProps);
            break;
        case 7:
            $alertText.text('No profile found! Please create a profile');
            $modalAlert.modal(createModalProps);
            break;
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
        case 1:
            $create1.modal(createModalProps);
            break;
        case 2:
            $create2.modal(createModalProps);
            break;
        case 3:
            $create3.modal(createModalProps);
            break;
        case 4:
            $create4.modal(createModalProps);
            break;
        case 5:
            $create5.modal(createModalProps);
            break;
        case 6:
            $create5.modal(createModalProps);
            break;
        case 7:
            $.modal.close();
            break;
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

var userAnimalCheck = function() {
    userAnimal = userProfileObj.animal;
    if (userAnimal === 'cat') {
        catApi();
    } else if (userAnimal === 'dog') {
        dogApi();
    };
    $create2.modal(createModalProps);
};

var ageRangeOpts = function() {
    var $select = $('#user-age');
    for (i = 0; i < 40; i++) {
        var $userAgeOpt = $('<option>')
            .val(i)
            .text(i);
        $select.append($userAgeOpt);
    }
}

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
        var radios = $("input[type='radio']");
        radios[i].checked = false;
    };
};

var clearAgeOpt = function() {
    var ageSelect = $('#user-age');
    ageSelect.prop('selectedIndex', 0);
}

var clearAgeRangeOpt = function() {
    var $min = $('#match-min-age');
    var $max = $('#match-max-age');
    $min.prop('selectedIndex', 0);
    $max.prop('selectedIndex', 0);
}

var create1Click = function() {
    var animalChoice = $("input[name='animal-choice']");
    modalNum = 1;

    // find which is selected
    for (i = 0; i < animalChoice.length; i++) {
        if (animalChoice[i].checked) {
            var userAnimal = animalChoice[i].value;
            userProfileObj.animal = userAnimal;

            //send to check for image fetching
            userAnimalCheck();
            var radioLength = animalChoice.length;
            deselectRadios(radioLength);
            // for (i = 0; i < 5; i++) {
            //     console.log(userProfileObj.animal);
                // if (userAnimal === 'cat') {
                //     catApi();
                // } else if (userAnimal === 'dog') {
                //     dogApi();
                // }
            // }
        } else if (!animalChoice[0].checked && !animalChoice[1].checked) {
            alertModal(modalNum);
            break;
        };
    };
};

function create2Click() {
    modalNum = 2;
    console.log(modalNum);
    var userImg = $('.img-choice')
        .css('backgroundImage')
        .split("\"")[1];
    userProfileObj.profileImg = userImg;
    
    var name = $('#user-name').val('');
    $create3.modal(createModalProps);
};

var create3Click = function() {
    modalNum = 3;
    
    var nameInput = 
        $('#user-name')
        .val()
        .toLowerCase();
    console.log(nameInput);
    if (!nameInput) {
        alertModal(modalNum);
    } else {
        // format name properly
        var nameSplit = nameInput.split(' ');
        for (var i = 0; i < nameSplit.length; i++) {
              nameSplit[i] = nameSplit[i][0].toUpperCase() + nameSplit[i].substr(1);
        }
         var userName = nameSplit.join(' ');
         console.log(userName);

        userProfileObj.name = userName;
        ageRangeOpts();
        $create4.modal(createModalProps);
    };
};

var create4Click = function() {
    modalNum = 4;
    var userAge =
        $('#user-age')
        .val();
    console.log(userAge);
    if (!userAge) {
        alertModal(modalNum);
    } else {
        userProfileObj.age = userAge;
        clearAgeOpt();
        minAgeOpts();
        maxAgeOpts();
        $create5.modal(createModalProps);
    }
};

var create5Click = function() {
    modalNum = 5;
    var interestChoice = $("input[name='interest-choice']");

    // find which radio button is selected
    for (i = 0; i < interestChoice.length; i++) {
        if (interestChoice[i].checked) {
            var userInterestChoice = interestChoice[i].value;
            userProfileObj.interest = userInterestChoice;
            var userMinAge = 
                $('#match-min-age')
                .val();
            var userMaxAge =
                $('#match-max-age')
                .val();
            
            if (userMinAge < userMaxAge && userMinAge !== null && userMaxAge !== null) {
                console.log('correct');
                userProfileObj.minAge = userMinAge;
                userProfileObj.maxAge = userMaxAge;
                userProfileObj.matchData = {
                    matches: [],
                }
            console.log(userProfileObj);

            // store userProfileObj in localStorage
            localStorage.setItem('storedProfile', JSON.stringify(userProfileObj));
            var radioLength = interestChoice.length;
            deselectRadios(radioLength);

            modalNum = 8;
            profileExists = true;
            clearAgeRangeOpt();
            alertModal(modalNum);
            break;
            } else if (userMinAge > userMaxAge || userMaxAge == null || userMinAge == null) {
                console.log('invalid');
                modalNum = 6;
                alertModal(modalNum);
            } 
        } else if (!interestChoice[0].checked && !interestChoice[1].checked && !interestChoice[2].checked) {
            alertModal(modalNum);
            break;
        }
    };
}

var createClick = function() {
    $create1.modal(createModalProps);
}

// Create profile modal button click handlers
$createProfileBtn.click(createClick);
$alertBtn.click(sendBackTo);
$loginBtn.click(loginProfileCheck);
$newImgBtn.click(userAnimalCheck);
$create1Btn.click(create1Click);
$create2Btn.click(create2Click);
$newImgBtn.click(userAnimalCheck);
$create3Btn.click(create3Click);
$create4Btn.click(create4Click);
$create5Btn.click(create5Click);