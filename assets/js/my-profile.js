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
    document.getElementById("animal-age").innerHTML = "Age: " + userProfileObj.age;
    document.getElementById("animal-type").innerHTML = "Type of animal: " + userProfileObj.animal;
    document.getElementById("animal-interest").innerHTML = "Interest/Orientation: " + userProfileObj.interest;
    document.getElementById("animal-image").innerHTML = userProfileObj.profileImg;
    document.getElementById("min-max").innerHTML = "Min-Max Age: " + userProfileObj.minAge + " - " + userProfileObj.maxAge;
};
displayProfileObj();

// Event listener for delete button on profile card
document.getElementById("delete-btn").addEventListener("click", function() {
    document.getElementById("confirmation-delete-container").classList.remove("hide");
});

// Event listener for cancel button in message box
document.getElementById("cancel-btn-message").addEventListener("click", function() {
    document.getElementById("confirmation-delete-container").classList.add("hide");
});

// Event listener for cross buttons in message box
document.getElementById("delete-cross-message").addEventListener("click", function() {
    document.getElementById("confirmation-delete-container").classList.add("hide");
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

// Edit function
