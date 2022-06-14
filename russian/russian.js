// grab "section" to modify it

let sectionTag = document.querySelector('section');

// grab button and make section get back to 100vh

const projectsBtn = document.querySelector('.russian-btn');

projectsBtn.addEventListener('click', () => {
sectionTag.style.height = "100vh";
console.log('nice');
})


// grab parts of the grid and change the text when hover

// PROXIMITY

let proximity = document.querySelector('.proximity');

proximity.addEventListener('mouseover', () => {
    proximity.style.fontSize = "1rem";
    proximity.style.lineHeight = "1.4";
    proximity.innerHTML = "The Law Of Proximity can be seen in the navigation bar where similar elements are together."
})

proximity.addEventListener('mouseout', () => {
    proximity.innerHTML = "PROXIMITY";
    proximity.style.fontSize = "2rem";
})



// FATE

let fate = document.querySelector('.fate');

fate.addEventListener('mouseover', () => {
    fate.style.fontSize = "1rem";
    fate.style.lineHeight = "1.4";
    fate.innerHTML = "The Law Of Common Fate can be seen in the navigation bar when you hover over the items and they all get an underline decoration."
})

fate.addEventListener('mouseout', () => {
    fate.innerHTML = "COMMON FATE";
    fate.style.fontSize = "2rem";
})




// FIGURE-GROUND

let figure = document.querySelector('.figure-ground');

figure.addEventListener('mouseover', () => {
    figure.style.fontSize = "1rem";
    figure.style.lineHeight = "1.4";
    figure.innerHTML = "The Law Of Figure Ground can be seen when you hover over images and they acquire a box shadow that contrasts with the white background."
})

figure.addEventListener('mouseout', () => {
    figure.innerHTML = "FIGURE GROUND";
    figure.style.fontSize = "2rem";
})

// FIGURE GROUND MOBILE 

figure.addEventListener('click', () => {
    figure.style.fontSize = "1rem";
    figure.style.lineHeight = "1.4";
    figure.innerHTML = "The Law Of Figure Ground can be seen when you hover over images and they acquire a box shadow that contrasts with the white background."
})

// SIMILARITY

let similarity = document.querySelector('.similarity');

similarity.addEventListener('mouseover', () => {
    similarity.style.fontSize = "1rem";
    similarity.style.lineHeight = "1.4";
    
    similarity.innerHTML = "The Law Of Similarity can be seen in the 'h2' tags, since they share the same size, color and font family."
})

similarity.addEventListener('mouseout', () => {
    similarity.innerHTML = "SIMILARITY";
    similarity.style.fontSize = "2rem";
})

// SIMILARITY MOBILE 

similarity.addEventListener('click', () => {
    similarity.style.fontSize = "1rem";
    similarity.style.lineHeight = "1.4";
    
    similarity.innerHTML = "The Law Of Similarity can be seen in the 'h2' tags, since they share the same size, color and font family."
})

// CONTINUITY

let continuity = document.querySelector('.continuity');

continuity.addEventListener('mouseover', () => {
    continuity.style.fontSize = "1rem";
    continuity.style.lineHeight = "1.4";
    
    continuity.innerHTML = "The Law Of Continuity can be seen around the main title, where the design of the background forms a pattern."
})

continuity.addEventListener('mouseout', () => {
    continuity.innerHTML = "CONTINUITY";
    continuity.style.fontSize = "2rem";
})

// CONTINUITY MOBILE 

continuity.addEventListener('click', () => {
    continuity.style.fontSize = "1rem";
    continuity.style.lineHeight = "1.4";
    
    continuity.innerHTML = "The Law Of Continuity can be seen around the main title, where the design of the background forms a pattern."
})


// FOCAL

let focal = document.querySelector('.focal-point');

focal.addEventListener('mouseover', () => {
    focal.style.fontSize = "1rem";
    focal.style.lineHeight = "1.4";
    
    focal.innerHTML = "The Law Of Focal Point can be seen in the main title, as its red color contrasts with the background's black and white."
})

focal.addEventListener('mouseout', () => {
    focal.innerHTML = "FOCAL POINT";
    focal.style.fontSize = "2rem";
})

// FOCAL MOBILE 

focal.addEventListener('click', () => {
    focal.style.fontSize = "1rem";
    focal.style.lineHeight = "1.4";
    
    focal.innerHTML = "The Law Of Focal Point can be seen in the main title, as its red color contrasts with the background's black and white."
})
