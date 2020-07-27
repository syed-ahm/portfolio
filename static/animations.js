// Grabbing buttons
var nextButton1 = document.getElementById('nextButton1'),
    nextButton4 = document.getElementById('nextButton4');

// Removes nextButton1 animation/delay so new animation can be added / allows scrolling after mainpage animations
setTimeout(function() {
    nextButton1.classList.remove('animate__bounceInDown', 'animate__delay-4s');
    document.getElementById('html').style.overflowY = 'scroll';
}, 5000)




// Adding onmouseover events on arrow images for shake animation
nextButton1.addEventListener('mouseover', nextButton1Shake);
nextButton4.addEventListener('mouseover', nextButton4Shake);

// Adds the animation to nextButtons and removes after 1s
function nextButton1Shake() {
    nextButton1.classList.add('animate__swing');
    setTimeout(function() {
        nextButton1.classList.remove('animate__swing');
    }, 1000);
}

function nextButton4Shake() {
    nextButton4.classList.add('animate__swing');
    setTimeout(function() {
        nextButton4.classList.remove('animate__swing');
    }, 1000);
}




// Grabs all icons in iconContainer
var icons = [
    resumeButton = document.getElementById('resumeButton'),
    githubButton = document.getElementById('githubButton'),
    linkedInButton = document.getElementById('linkedInButton'),
    emailButton = document.getElementById('emailButton'),
    instagramButton = document.getElementById('instagramButton')
];

// Grabs all navbar items
var navItems = [
    homeNavButton = document.getElementById('homeNavButton'),
    projNavButton = document.getElementById('projNavButton'),
    resumeNavButton = document.getElementById('resumeNavButton')
]

// Adds click event to nextButton1
nextButton1.addEventListener('click', aboutScreenAnimations);

// Adds and removes animations on iconContainer icons and navbar items 
function aboutScreenAnimations() {
    for (var icon=0; icon < icons.length; icon++) {
        icons[icon].classList.add('animate__animated', 'animate__fadeInLeft');
    }

    for (var item=0; item < navItems.length; item++) {
        navItems[item].classList.add('animate__animated', 'animate__fadeInDown');
    }

    setTimeout(function() {
        for (var icon=0; icon < icons.length; icon++) {
            icons[icon].classList.remove('animate__animated', 'animate__fadeInLeft');
        }

        for (var item=0; item < navItems.length; item++) {
            navItems[item].classList.remove('animate__animated', 'animate__fadeInDown');
        }
        
    }, 3000)

}




// Add click event on projNavButton
projNavButton.addEventListener('click', projectScreenAnimations);

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










