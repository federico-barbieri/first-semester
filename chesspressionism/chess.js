

// grab topic span and write letter by letter as an animation

let topicSpan = document.querySelector('.topics-span');




function createMath(){
    topicSpan.innerHTML = "MATHS";
}

function createCancel(){
    topicSpan.innerHTML = "CANCEL CULTURE";
}

function createArt(){
    topicSpan.innerHTML = "ART";
}

function createPhilo(){
    topicSpan.innerHTML = "PHILOSOPHY";
}

function createHistory(){
    topicSpan.innerHTML = "HISTORY";
}

function createTech(){
    topicSpan.innerHTML = "TECHNOLOGY";
}

function everything(){
    setTimeout(createMath, 1000);
    setTimeout(createCancel, 2000);
    setTimeout(createArt, 3000);
    setTimeout(createPhilo, 4000);
    setTimeout(createHistory, 5000);
    setTimeout(everything, 6000);
}

setTimeout(everything, 1000);



// grab gigantic svg and switch between devices

let gigantic = document.querySelector('.gigantic-svg');

function switchSrc8(){
    gigantic.src = "img/chess8.svg";
}

function switchSrc5(){
    gigantic.src = "img/chess5.svg";
}

function switchsources(){
    setTimeout(switchSrc8, 1000);
    setTimeout(switchSrc5, 3000);
    setTimeout(switchsources, 5000);
}

setTimeout(switchsources, 1000);
