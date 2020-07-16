var projectsButton = document.getElementById('projectsButton');
var resumeButton = document.getElementById('resumeButton');


projectsButton.addEventListener('mouseover', projectsShake);
resumeButton.addEventListener('mouseover', resumeShake);




function projectsShake() {
    projectsButton.classList.add('animate__swing');
    var wait = setTimeout(function() {
        projectsButton.classList.remove('animate__swing');
    }, 1000);
}




function resumeShake() {
    resumeButton.classList.add('animate__swing');
    var wait = setTimeout(function() {
        resumeButton.classList.remove('animate__swing');
    }, 1000);
}


setTimeout(function() {
    projectsButton.classList.remove('animate__bounceInDown', 'animate__delay-5s');
}, 6000)

setTimeout(function() {
    resumeButton.classList.remove('animate__bounceInUp', 'animate__delay-5s');
}, 6000)



var intro1 = document.getElementById('intro1');
var intro2 = document.getElementById('intro2');
var intro3 = document.getElementById('intro3');



