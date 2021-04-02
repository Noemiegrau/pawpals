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

// Function that displays the user profile info into the profile card
function displayProfileObj () {
    document.getElementById("animal-name").innerHTML = userProfileObj.name;
    document.getElementById("animal-age").innerHTML = "Age: " + userProfileObj.age;
    document.getElementById("animal-type").innerHTML = "Type of animal: " + userProfileObj.animal;
    document.getElementById("animal-interest").innerHTML = "Interest/Orientation: " + userProfileObj.interest;
    document.getElementById("animal-image").innerHTML = userProfileObj.profileImg;
    document.getElementById("min-max").innerHTML = "Min-Max Age: " + userProfileObj.minAge + " - " + userProfileObj.maxAge;
};

displayProfileObj();

//Add event listener for delete button
document.getElementById("delete-btn").addEventListener("click", function() {
    // document.getElementById("animal-image").innerHTML = "You have no profile";
	// document.getElementById("animal-name").innerHTML = "You have no profile";
	// document.getElementById("animal-age").innerHTML = "You have no profile";
	// document.getElementById("animal-type").innerHTML = "You have no profile";
	// document.getElementById("animal-interest").innerHTML = "You have no profile";
	// document.getElementById("min-max").innerHTML = "You have no profile";
	// document.getElementById("my-profile-container").classList.add("hide");
    document.getElementById("my-profile-container").remove();
    document.getElementById("analytics-container").remove();
    storage.removeItem(userProfileObj);

});