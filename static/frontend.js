// Grabbing arrow image elements
var projectsButton = document.getElementById('projectsButton');
var resumeButton = document.getElementById('resumeButton');


// Removes arrow image animations/delay so new animations can be added 
setTimeout(function() {
    projectsButton.classList.remove('animate__bounceInDown', 'animate__delay-5s');
    resumeButton.classList.remove('animate__bounceInUp', 'animate__delay-5s');
}, 6000)


// Adding onmouseover events on arrow images for shake animation
projectsButton.addEventListener('mouseover', projectsShake);
resumeButton.addEventListener('mouseover', resumeShake);


// Adds the shake animation and removes after 1s
function projectsShake() {
    projectsButton.classList.add('animate__swing');
    var wait = setTimeout(function() {
        projectsButton.classList.remove('animate__swing');
    }, 1000);
}


// Adds the shake animation and removes after 1s
function resumeShake() {
    resumeButton.classList.add('animate__swing');
    var wait = setTimeout(function() {
        resumeButton.classList.remove('animate__swing');
    }, 1000);
}





















