
// SLIDER

let i = 0;
let j = 4;


function autoPlay(){
 next();
 updateDotIndicator();
}

function next(){
    document.getElementById("content" + (i+1)).
    classList.remove("act");
    i = ( j + i + 1) % j;
    document.getElementById("content" + (i+1)).
    classList.add("act");
}

function prev(){
    document.getElementById("content" + (i+1)).
    classList.remove("act");
    i = ( j + i - 1) % j;
    document.getElementById("content" + (i+1)).
    classList.add("act");
}

let timer = setInterval(autoPlay,4000);