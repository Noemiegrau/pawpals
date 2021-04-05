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

// Empty user Profile Object
var userProfileObj = {};

// Load user profile
var loadUserData = function() {
    // load stored userProfileObj
    var storedProfile = JSON.parse(localStorage.getItem('storedProfile'));

    if (!storedProfile) {
        console.log('no profile found');
    } else {
        console.log('profile found');
        userProfileObj = storedProfile;
    };
    console.log(userProfileObj);
};
loadUserData();

// Displays the user profile info into the profile card
function displayProfileObj () {
    document.getElementById("animal-name").innerHTML = userProfileObj.name;
    document.getElementById("animal-age-text").innerHTML = userProfileObj.age;
    document.getElementById("animal-type-text").innerHTML = userProfileObj.animal;
    document.getElementById("animal-interest-text").innerHTML = userProfileObj.interest;
    document.getElementById("animal-image").src = userProfileObj.profileImg;
    document.getElementById("animal-min-text").innerHTML = userProfileObj.minAge;
    document.getElementById("animal-max-text").innerHTML = userProfileObj.maxAge;
};
displayProfileObj();

// Allow to edit the profile info
function doEdit() {

    console.log("hello");
    // Makes the field a textarea on click on edit button
    document.getElementById("animal-name").innerHTML = '<textarea id="name-textarea">' + userProfileObj.name + '</textarea>';
    document.getElementById("animal-age-text").innerHTML = '<textarea id="age-textarea">' + userProfileObj.age + '</textarea>';
    // document.getElementById("animal-type-text").innerHTML = '<textarea id="type-textarea">' + userProfileObj.animal + '</textarea>';
    document.getElementById("type-secret-container").classList.remove('hide');
    document.getElementById("animal-type-text").innerHTML = '';
    // document.getElementById("animal-interest-text").innerHTML = '<textarea id="interest-textarea">' + userProfileObj.interest + '</textarea>';
    // document.getElementById("animal-interest-text").className.add('hide');
    document.getElementById("interest-secret-container").classList.remove('hide');
    document.getElementById("animal-interest-text").innerHTML = '';
    document.getElementById("animal-min-text").innerHTML = '<textarea id="min-textarea">' + userProfileObj.minAge + '</textarea>';
    document.getElementById("animal-max-text").innerHTML = '<textarea id="max-textarea">' + userProfileObj.maxAge + '</textarea>';
    
    // Edit img button appears
    document.getElementById("edit-img").classList.remove("hide");

    // Edit button disappears
    document.getElementById("edit-btn").classList.add("hide");

    // Save button appears
    document.getElementById("save-btn").classList.remove("hide");
};

// Allow to edit the profile picture
function editImg() {
    // Message box asks to select a picture or change
    document.getElementById("edit-img-message").classList.remove("hide");
    // Add blur background
    document.getElementById("my-profile-container").classList.add("blur");
    document.getElementById("analytics-container").classList.add("blur");
    // Gets random image from API
        userAnimal = userProfileObj.animal;
        if (userAnimal === 'cat') {
            catApi();
        } else if (userAnimal === 'dog') {
            dogApi();
        };
};

// Puts the image from API inside message box
var imageSelection = function(imgUrl) {
    console.log(imgUrl);
    document.getElementById("animal-image-edit").src = imgUrl;
};

// Allow to save new changes to profile info
function saveEdit() {

    // Hide Type Checkboxes
    document.getElementById("type-secret-container").classList.add('hide');

    // Hide Interest Checkboxes
    document.getElementById("interest-secret-container").classList.add('hide');

    // Change value of NAME
    var nameTextarea = document.getElementById("name-textarea").value;
    console.log(nameTextarea);

    userProfileObj.name = nameTextarea;
    console.log(userProfileObj.name);

    // Change value of AGE
    var ageTextarea = document.getElementById("age-textarea").value;
    console.log(ageTextarea);

    userProfileObj.age = ageTextarea;
    console.log(userProfileObj.age);

    // Change value of TYPE
    // var typeTextarea = document.getElementById("type-textarea").value;
    // console.log(typeTextarea);

    // userProfileObj.animal = typeTextarea;
    // console.log(userProfileObj.animal);

    // Change value of INTEREST
    // userProfileObj.interest = userProfileObj.interest;

    // Change value of MIN
    var minTextarea = document.getElementById("min-textarea").value;
    console.log(minTextarea);

    userProfileObj.minAge = minTextarea;
    console.log(userProfileObj.minAge);

    // Change value of MAX
    var maxTextarea = document.getElementById("max-textarea").value;
    console.log(maxTextarea);

    userProfileObj.maxAge = maxTextarea;
    console.log(userProfileObj.maxAge);

    // Sets the new values in localStorage
    localStorage.setItem('storedProfile', JSON.stringify(userProfileObj)); 

    // Hide save button
    document.getElementById("save-btn").classList.add("hide");

    // Hide edit img button
    document.getElementById("edit-img").classList.add("hide");

    // Show edit button
    document.getElementById("edit-btn").classList.remove("hide");

    // Make textarea change to span that can't be modified
    document.getElementById("animal-name").innerHTML = '<span>' + userProfileObj.name + '</span>';
    document.getElementById("animal-age-text").innerHTML = '<span>' + userProfileObj.age + '</span>';
    document.getElementById("animal-type-text").innerHTML = '<span>' + userProfileObj.animal + '</span>';
    document.getElementById("animal-interest-text").innerHTML = '<span>' + userProfileObj.interest + '</span>';
    document.getElementById("animal-min-text").innerHTML = '<span>' + userProfileObj.minAge + '</span>';
    document.getElementById("animal-max-text").innerHTML = '<span>' + userProfileObj.maxAge + '</span>';
};

// EVENT LISTENERS FOR MESSAGES BUTTONS
// Event listener for delete button on profile card
document.getElementById("delete-btn").addEventListener("click", function() {
    document.getElementById("confirmation-delete-container").classList.remove("hide");
    document.getElementById("my-profile-container").classList.add("blur");
    document.getElementById("analytics-container").classList.add("blur");
});

// Event listener for cancel button in message box
document.getElementById("cancel-btn-message").addEventListener("click", function() {
    document.getElementById("confirmation-delete-container").classList.add("hide");
    document.getElementById("my-profile-container").classList.remove("blur");
    document.getElementById("analytics-container").classList.remove("blur");
});

// Event listener for cross buttons in message box
document.getElementById("delete-cross-message").addEventListener("click", function() {
    document.getElementById("confirmation-delete-container").classList.add("hide");
    document.getElementById("my-profile-container").classList.remove("blur");
    document.getElementById("analytics-container").classList.remove("blur");
});

// Event listener for delete button in message box
document.getElementById("delete-btn-message").addEventListener("click", function() {
    // Previous message disappears
    document.getElementById("confirmation-delete-container").classList.add("hide");
    // Message tells the user that the profile info has been deleted and will be redirected to the landing page
    document.getElementById("success-delete-container").classList.remove("hide");
    // Clears the profile info in localStorage
    localStorage.clear(userProfileObj);
});

// Event listener for cross button in second message box
document.getElementById("second-cross-message").addEventListener("click", function() {
    // Redirects to the home page
    window.location.replace("index.html");
    // Hide the second message container
    document.getElementById("success-delete-container").classList.add("hide");
});

// Event listener for save edit button in message box
document.getElementById("save-btn").addEventListener("click", function() {
    // Message tells the user that the profile info has been edited successfully
    document.getElementById("success-edit-container").classList.remove("hide");
    document.getElementById("my-profile-container").classList.add("blur");
    document.getElementById("analytics-container").classList.add("blur");
});

// Event listener for cross in save edit info message box
document.getElementById("edit-cross-message").addEventListener("click", function() {
    // Save edits message box disappears
    document.getElementById("success-edit-container").classList.add("hide");
    document.getElementById("my-profile-container").classList.remove("blur");
    document.getElementById("analytics-container").classList.remove("blur");
});

// Event listener for cross in save edit image message box
document.getElementById("edit-cross-img").addEventListener("click", function() {
    // Message box disappears
    document.getElementById("edit-img-message").classList.add("hide");
    // Remove blur background
    document.getElementById("my-profile-container").classList.remove("blur");
    document.getElementById("analytics-container").classList.remove("blur");
});

// Event listener for cross in save edit image message box
document.getElementById("yes-edit-img").addEventListener("click", function() {
    // Message box disappear
    document.getElementById("edit-img-message").classList.add("hide");
    // Remove blur background
    document.getElementById("my-profile-container").classList.remove("blur");
    document.getElementById("analytics-container").classList.remove("blur");
});

// Event listener for YES (choosing the new image) button
document.getElementById("yes-edit-img").addEventListener("click", function() {
    console.log('hello');
    // Save image as new image in localStorage
    var newPicture = document.getElementById("animal-image-edit").src = imgUrl;
    console.log(imgUrl);
    // Change value of image
    userProfileObj.profileImg = newPicture;
    console.log(userProfileObj.profileImg);

    // Add to localStorage
    localStorage.setItem('storedProfile', JSON.stringify(userProfileObj));
    // Save image as new image on profile card
    document.getElementById("animal-image").src = imgUrl;
    
});

// Event listener for NAH (requesting other image) button
document.getElementById("nah-edit-img").addEventListener("click", function() {
    console.log('hello');
    // Gets new image from APIs
    editImg();
});

// Event listener for Interest Checkboxes DOGS
document.getElementById("dogs").addEventListener("click", function() {
    console.log('hello2');
    // Change value for interest in user Profile Obj
    var interestTextarea = document.getElementById("doggos").innerText;
    console.log(interestTextarea);

    userProfileObj.interest = interestTextarea;
    console.log(userProfileObj.interest);
});

// Event listener for Interest Checkboxes CATS
document.getElementById("cats").addEventListener("click", function() {
    console.log('hello2');
    // Change value for interest in user Profile Obj
    var interestTextarea = document.getElementById("catsCats").innerText;
    console.log(interestTextarea);

    userProfileObj.interest = interestTextarea;
    console.log(userProfileObj.interest);
    
});

// Event listener for Interest Checkboxes BOTH
document.getElementById("both").addEventListener("click", function() {
    console.log('hello2');
    // Change value for interest in user Profile Obj
    var interestTextarea = document.getElementById("catsDogs").innerText;
    console.log(interestTextarea);

    userProfileObj.interest = interestTextarea;
    console.log(userProfileObj.interest);
    
});

// Event listener for TYPE Checkboxes DOG
document.getElementById("isdogs").addEventListener("click", function() {
    console.log('hello2');
    // Change value for interest in user Profile Obj
    var typeTextarea = document.getElementById("isdoggos").innerText;
    console.log(typeTextarea);

    userProfileObj.animal = typeTextarea;
    console.log(userProfileObj.animal);
});

// Event listener for TYPE Checkboxes CAT
document.getElementById("iscats").addEventListener("click", function() {
    console.log('hello2');
    // Change value for interest in user Profile Obj
    var typeTextarea = document.getElementById("iscatsCats").innerText;
    console.log(typeTextarea);

    userProfileObj.animal = typeTextarea;
    console.log(userProfileObj.animal);
});

const analyticsObj = localStorage.getItem("analytics");
console.log(analyticsObj);
const parsedAnalyticsObj = JSON.parse(analyticsObj);
var totalSwipes = parseFloat(parsedAnalyticsObj.totalSwipes);
var totalMatch = parseFloat(parsedAnalyticsObj.totalMatch);
var matchRatio = parseFloat(parsedAnalyticsObj.matchRatio);
// console.log(totalSwipes);
// console.log(totalMatch);
// console.log(matchRatio);
// average ages calculations
var str = localStorage.getItem("ages");
var ages = JSON.parse(str);
var avg;
function makeInt() {
    let denominator = ages.length;
    let sum = 0;
    for (var i=0;i <ages.length; i++) {
        sum += parseInt(ages[i]);
        console.log(sum);
    }
    avg = sum / denominator;
    console.log(avg);
}
makeInt();