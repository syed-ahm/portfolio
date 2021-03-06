// Grabbing buttons
var nextButton1 = document.getElementById('nextButton1'),
    nextButton2 = document.getElementById('nextButton2'),
    nextButton3 = document.getElementById('nextButton3');

// Removes nextButton1 animation/delay so new animation can be added / allows scrolling after mainpage animations
setTimeout(function() {
    nextButton1.classList.remove('animate__bounceInDown', 'animate__delay-2s');
    document.getElementById('html').style.overflowY = 'scroll';
}, 3000)




// Adding onmouseover events on arrow images for shake animation
nextButton1.addEventListener('mouseover', nextButton1Shake);
nextButton2.addEventListener('mouseover', nextButton2Shake);
nextButton3.addEventListener('mouseover', nextButton3Shake);

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
    nextButton3.classList.add('animate__animated', 'animate__swing');
    setTimeout(function() {
        nextButton3.classList.remove('animate__animated', 'animate__swing');
    }, 1000);
}




// Grabs all icons in iconContainer
var icons = [
    resumeButton = document.getElementById('resumeButton'),
    githubButton = document.getElementById('githubButton'),
    linkedInButton = document.getElementById('linkedInButton'),
    emailButton = document.getElementById('emailButton'),
];

// Grabs all navbar items
var navItems = [
    homeNavButton = document.getElementById('homeNavButton'),
    projNavButton = document.getElementById('projNavButton'),
    resumeNavButton = document.getElementById('resumeNavButton'),
    moreItemsNavButton = document.getElementById('moreItemsNavButton')
]

// Adds click event to nextButton1
nextButton1.addEventListener('click', aboutScreenAnimations);

// Adds and removes animations on iconContainer icons and navbar items 
function aboutScreenAnimations() {
    for (var icon=0; icon < icons.length; icon++) {
        icons[icon].classList.add('animate__fadeInLeft');
    }

    for (var item=0; item < navItems.length; item++) {
        navItems[item].classList.add('animate__fadeInDown');
    }

    setTimeout(function() {
        for (var icon=0; icon < icons.length; icon++) {
            icons[icon].classList.remove('animate__fadeInLeft');
        }

        for (var item=0; item < navItems.length; item++) {
            navItems[item].classList.remove('animate__fadeInDown');
        }
    }, 1900)

}


// Add click event on projNavButton
projNavButton.addEventListener('click', projectScreenAnimations);

// Adds and removes animations for projects screen
function projectScreenAnimations() {
    // add animations
    nextButton2.classList.add('animate__animated', 'animate__fadeInRight', 'animate__delay-1s');

    // removes after 1s
    setTimeout(function() {
        nextButton2.classList.remove('animate__fadeInRight', 'animate__delay-1s');
    }, 2000);
}



// initalize's animation on scroll
AOS.init({
    offset: 180,
    duration: 1500,
});






