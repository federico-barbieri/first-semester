// grab "section" to modify it

let sectionTag = document.querySelector('section');

// grab button and make section get back to 100vh

const projectsBtn = document.querySelector('.russian-btn');

projectsBtn.addEventListener('click', () => {
sectionTag.style.height = "100vh";
console.log('nice');
})