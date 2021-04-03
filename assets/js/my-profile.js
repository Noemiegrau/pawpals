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
    // document.getElementById("animal-age").innerHTML = "Age: " + userProfileObj.age;
    document.getElementById("animal-age-text").innerHTML = userProfileObj.age;
    document.getElementById("animal-type-text").innerHTML = userProfileObj.animal;
    document.getElementById("animal-interest-text").innerHTML = userProfileObj.interest;
    document.getElementById("animal-image").innerHTML = userProfileObj.profileImg;
    document.getElementById("animal-min-text").innerHTML = userProfileObj.minAge;
    document.getElementById("animal-max-text").innerHTML = userProfileObj.maxAge;
};
displayProfileObj();

// Edit function
function doEdit() {

    console.log("hello");
    // Makes the field a textarea on click on edit button
    document.getElementById("animal-name").innerHTML = '<textarea id="name-textarea">' + userProfileObj.name + '</textarea>';
    document.getElementById("animal-age-text").innerHTML = '<textarea id="age-textarea">' + userProfileObj.age + '</textarea>';
    document.getElementById("animal-type-text").innerHTML = '<textarea id="type-textarea">' + userProfileObj.animal + '</textarea>';
    document.getElementById("animal-interest-text").innerHTML = '<textarea id="interest-textarea">' + userProfileObj.interest + '</textarea>';
    document.getElementById("animal-min-text").innerHTML = '<textarea id="min-textarea">' + userProfileObj.minAge + '</textarea>';
    document.getElementById("animal-max-text").innerHTML = '<textarea id="max-textarea">' + userProfileObj.maxAge + '</textarea>';

    // Edit button disappears
    document.getElementById("edit-btn").classList.add("hide");

    // Save button appears
    document.getElementById("save-btn").classList.remove("hide");
};

// Save function
function saveEdit() {

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
    var typeTextarea = document.getElementById("type-textarea").value;
    console.log(typeTextarea);

    userProfileObj.animal = typeTextarea;
    console.log(userProfileObj.animal);

    // Change value of INTEREST
    var interestTextarea = document.getElementById("interest-textarea").value;
    console.log(interestTextarea);

    userProfileObj.interest = interestTextarea;
    console.log(userProfileObj.interest);

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

    // Save new information to localStorage 



    // Hide save button
    document.getElementById("save-btn").classList.add("hide");

    // Show edit button
    document.getElementById("edit-btn").classList.remove("hide");

    // Make textarea change to span that can't be modified
    document.getElementById("animal-name").innerHTML = '<span>' + userProfileObj.name + '</span>';
    document.getElementById("animal-age-text").innerHTML = '<span>' + userProfileObj.age + '</span>';
    document.getElementById("animal-type-text").innerHTML = '<span>' + userProfileObj.animal + '</span>';
    document.getElementById("animal-interest-text").innerHTML = '<span>' + userProfileObj.interest + '</span>';
    document.getElementById("animal-min-text").innerHTML = '<span>' + userProfileObj.minAge + '</span>';
    document.getElementById("animal-max-text").innerHTML = '<span>' + userProfileObj.maxAge + '</span>';

    // localStorage.setItem('userProfileObj.age', name);
    // localStorage.setItem('storedProfile', JSON.stringify(userProfileObj));

    // If min-max input are not numbers, sends an alert to tell the user
    // if () {}

};


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
