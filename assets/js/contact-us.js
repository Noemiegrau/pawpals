// Event listener for submit button
document.getElementById("submit-btn").addEventListener("click", function() {
    // Message box appears
    document.getElementById("submitted-container").classList.remove("hide");
    // Make background blur
    document.getElementById("main-page-container").classList.add("blur");
});

// Event listener for cross button in message box
document.getElementById("submitted-cross-message").addEventListener("click", function() {
    // Message box disappears
    document.getElementById("submitted-container").classList.add("hide");
    // Remove blur from background
    document.getElementById("main-page-container").classList.remove("blur");
});