// Toggle Menu

var navLinks = document.getElementById("navLinks");

    function showMenu(){
        navLinks.style.right="0";
    }
    function hideMenu(){
        navLinks.style.right="-300px";
    }


// Profile page
var x = document.getElementById("login");
var y = document.getElementById("signup");
var z = document.getElementById("btn");

function signup(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}     


//Lost page
// Add event listener to the reset button
var resetButton = document.getElementById("lost-item-reset-btn");
resetButton.addEventListener("click", function() {
    console.log("Reset button clicked");
});

// Add event listener to the submit button
var submitButton = document.getElementById("lost-item-submit-btn");
submitButton.addEventListener("click", function() {
    console.log("Submit button clicked");
});

// Add event listeners to the input fields
var nameInput = document.getElementById("lost-item-name-input");
nameInput.addEventListener("input", function() {
    console.log("Name input changed");
});

var emailInput = document.getElementById("lost-item-email-input");
emailInput.addEventListener("input", function() {
    console.log("Email input changed");
});

var notesInput = document.getElementById("lost-item-notes-input");
notesInput.addEventListener("input", function() {
    console.log("Notes input changed");
});

var foundInput = document.getElementById("lost-item-found-input");
foundInput.addEventListener("change", function() {
    console.log("Found input changed");
});

var statusInput = document.querySelectorAll('input[name="lostItemStatus"]');
statusInput.forEach(function(input) {
    input.addEventListener("change", function() {
        console.log("Status input changed");
    });
});

var ratingInput = document.getElementById("lost-item-rating-input");
ratingInput.addEventListener("input", function() {
    console.log("Rating input changed");
});

var passwordInput = document.getElementById("lost-item-password-input");
passwordInput.addEventListener("input", function() {
    console.log("Password input changed");
});

var urlInput = document.getElementById("lost-item-url-input");
urlInput.addEventListener("input", function() {
    console.log("URL input changed");
});

var searchInput = document.getElementById("lost-item-search-input");
searchInput.addEventListener("input", function() {
    console.log("Search input changed");
});

var hiddenInput = document.getElementById("lost-item-hidden-input");
hiddenInput.addEventListener("input", function() {
    console.log("Hidden input changed");
});