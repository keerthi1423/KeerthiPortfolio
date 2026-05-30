const text = [
    "C++ Developer",
    "Python Learner",
    "Web Developer",
    "Problem Solver"
];

let index = 0;

function changeText() {

document.getElementById("typing").innerText =
text[index];

index++;

if(index >= text.length){
index = 0;
}

}

changeText();

setInterval(changeText,2000);