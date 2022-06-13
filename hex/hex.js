// grab last image and change its source 

let solutionSvg = document.querySelector('.solution-svg');


function changeSource1(){
    solutionSvg.src = "img/hex-wire2.svg";
}

function changeSource2(){
    solutionSvg.src = "img/hex-wire6.svg";
}

function changeSource3(){
    solutionSvg.src = "img/hex-wire5.svg";
}

function everything(){
    setTimeout(changeSource1, 100);
    setTimeout(changeSource2, 3000);
    setTimeout(changeSource3, 5000);
    setTimeout(everything, 7000);
}

setTimeout(everything, 1000);