// Buttons
// const imgButton = document.getElementById("imageBtn1")
// const imgButton1 = document.getElementById("imageBtn2")
// const imgButton2 = document.getElementById("imageBtn3")
// const imgButton3 = document.getElementById("imageBtn4")

// const mnElement = document.getElementById("mainElem")


// const addAnImage = ()=>{
// let imgElem = document.createElement("img")
// imgElem.src = "artfrog.jpeg"
// imgElem.alt = "frog with barret"


// mnElement.appendChild(imgElem)

// }


// imgButton.addEventListener("click", addAnImage)

// Alt gallery version
function galleryFunction1(smallImg){
    let fullImg = document.getElementById('imageBtn1')
    fullImg.src = smallImg.src
}



// Start,Stop
let nIntervId;

function changeImg() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(switchImg, 1000)
  }
}

function switchImg() {
  const oElem = document.getElementById("imageContainsmall")
  oElem.className = oElem.className === "start" ? "stop" : "start"
}

function stopswitchImg() {
  clearInterval(nIntervId);
  // release our intervalID from the variable
  nIntervId = null;
}

document.getElementById("start").addEventListener("click", switchImg);
document.getElementById("stop").addEventListener("click", stopswitchImg);



// Frog world :) title. credit to https://codepen.io/alvarotrigo
const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "frog",
    "world",
    ":)"
];

const morphTime = 3;
const cooldownTime = 0.5;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();