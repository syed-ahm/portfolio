// Grabbing arrow image element
var nextButton1 = document.getElementById('nextButton1');
var nextButton2 = document.getElementById('nextButton2');

// Removes arrow image animation/delay so new animations can be added 
setTimeout(function() {
    nextButton1.classList.remove('animate__bounceInDown', 'animate__delay-5s');
}, 6000)


// Adding onmouseover events on arrow images for shake animation
nextButton1.addEventListener('mouseover', projectsShake);


// Adds the shake animation and removes after 1s
function projectsShake() {
    nextButton1.classList.add('animate__swing');
    var wait = setTimeout(function() {
        nextButton1.classList.remove('animate__swing');
    }, 1000);
}
































