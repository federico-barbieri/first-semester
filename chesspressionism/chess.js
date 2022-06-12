

// grab topic span and write letter by letter as an animation

let topicSpan = document.querySelector('.topics-span');




function createMath(){
    topicSpan.style.fontFamily = "ohm-bold, sans serif";
    topicSpan.innerHTML = "MATHS";
    
}

function createCancel(){
    topicSpan.style.fontFamily = "bungee, sans serif";
    topicSpan.innerHTML = "CANCEL CULTURE";
    
}

function createArt(){
    topicSpan.style.fontFamily = "all-round-gothic, sans serif";
    topicSpan.innerHTML = "ART";
    
    
}

function createPhilo(){
    
    topicSpan.style.fontFamily = "courage, sans serif";
    topicSpan.innerHTML = "PHILOSOPHY";
}

function createHistory(){
    
    topicSpan.style.fontFamily = "poiret-one, sans serif";
    topicSpan.innerHTML = "HISTORY";
}

function createTech(){
    
    topicSpan.style.fontFamily = "nasalization, sans serif";
    topicSpan.innerHTML = "TECHNOLOGY";
}

function createScience(){
    
    topicSpan.style.fontFamily = "ff-nuvo-mono-web-pro, sans serif";
    topicSpan.innerHTML = "SCIENCE";
}


function everything(){
    setTimeout(createMath, 100);
    setTimeout(createCancel, 1000);
    setTimeout(createArt, 2000);
    setTimeout(createPhilo, 3000);
    setTimeout(createHistory, 4000);
    setTimeout(createTech, 5000);
    setTimeout(createScience, 6000);
    setTimeout(everything, 7000);
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
