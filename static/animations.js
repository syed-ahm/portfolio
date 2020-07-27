// Grabbing arrow image elements
var nextButton1 = document.getElementById('nextButton1'),
    nextButton2 = document.getElementById('nextButton2'),
    nextButton3 = document.getElementById('nextButton3'),
    nextButton4 = document.getElementById('nextButton4');

// Removes arrow image animation/delay so new animation can be added / allows scrolling after mainpage animations
setTimeout(function() {
    nextButton1.classList.remove('animate__bounceInDown', 'animate__delay-5s');
    document.getElementById('html').style.overflowY = 'scroll';
}, 6000)


// Adding onmouseover events on arrow images for shake animation
nextButton1.addEventListener('mouseover', nextButton1Shake);

nextButton2.addEventListener('mouseover', nextButton2Shake);
nextButton3.addEventListener('mouseover', nextButton3Shake);

nextButton4.addEventListener('mouseover', nextButton4Shake);


// Adds the animation to nextButtons and removes after 1s
function nextButton1Shake() {
    nextButton1.classList.add('animate__swing');
    setTimeout(function() {
        nextButton1.classList.remove('animate__swing');
    }, 1000);
}

function nextButton2Shake() {
    nextButton2.classList.add('animate__swing');
    setTimeout(function() {
        nextButton2.classList.remove('animate__swing');
    }, 1000);
}

function nextButton3Shake() {
    nextButton3.classList.add('animate__swing');
    setTimeout(function() {
        nextButton3.classList.remove('animate__swing');
    }, 1000);
}

function nextButton4Shake() {
    nextButton4.classList.add('animate__swing');
    setTimeout(function() {
        nextButton4.classList.remove('animate__swing');
    }, 1000);
}




// Add click event on nextButton1
nextButton1.addEventListener('click', aboutMeScreenAnimations);

// Adds and removes animations for aboutMe screen
function aboutMeScreenAnimations() {
    // add animations
    nextButton2.classList.add('animate__animated', 'animate__fadeInRight', 'animate__delay-1s');
    nextButton3.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__delay-1s');

    // removes after 1s
    setTimeout(function() {
        nextButton2.classList.remove('animate__fadeInRight', 'animate__delay-1s');
        nextButton3.classList.remove('animate__fadeInLeft', 'animate__delay-1s');
    }, 2000);
}




// Add click event on nextButton3
nextButton3.addEventListener('click', projectScreenAnimations);

// Adds and removes animations for projects screen
function projectScreenAnimations() {
    // add animations
    nextButton4.classList.add('animate__animated', 'animate__fadeInRight', 'animate__delay-1s');

    // removes after 1s
    setTimeout(function() {
        nextButton4.classList.remove('animate__fadeInRight', 'animate__delay-1s');
    }, 2000);
}




// Grabs emailButton, box
var emailButton = document.getElementById('emailButton'),
    emailBox = document.getElementById('emailBox');

// my email
const emailText = 'syed-hamdan@hotmail.com'

// Add emailButton click event listener
emailButton.addEventListener('click', emailCopyAnimation);

// Selects my email from invisible textbox and copies it to clipboard, then plays noti box animation
function emailCopyAnimation(event) {
    // copies text
    event.preventDefault();
    navigator.clipboard.writeText(emailText);

    // plays noti animaton
    emailBox.style.visibility = 'visible';
    emailBox.classList.add('animate__animated', 'animate__slideInLeft');
    setTimeout(function() {
        emailBox.classList.remove('animate__slideInLeft');
        emailBox.classList.add('animate__fadeOutLeft');
    }, 1900)
}









