// grab the main title and change its inner html through functions

let mainTitle = document.querySelector('.forward-title');

function createMultimedia(){
    mainTitle.style.fontFamily = "ohm-bold, sans serif";
    mainTitle.innerHTML = "MULTIMEDIA DESIGNER";
    
}

function createFrontend(){
    mainTitle.style.fontFamily = "ohm-bold, sans serif";
    mainTitle.innerHTML = "FRONTEND";
}

function createCopywriter(){
    mainTitle.style.fontFamily = "ohm-bold, sans serif";
    mainTitle.innerHTML = "COPYWRITER";
    
    
}

function createName(){
    
    mainTitle.style.fontFamily = "ohm-bold, sans serif";
    mainTitle.innerHTML = "FEDERICO BARBIERI";
}

// make a function that holds all the other functions and put them in a timeout

function everything(){
    setTimeout(createMultimedia, 2000);
    setTimeout(createFrontend, 4000);
    setTimeout(createCopywriter, 6000);
    setTimeout(createName, 8000);
    setTimeout(everything, 10000);
}

setTimeout(everything, 1000);