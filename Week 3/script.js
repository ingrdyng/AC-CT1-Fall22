let clrButton = document.getElementById("colorBtn") 
console.log(clrButton)
const mnElement = document.getElementById("mainElem")
const txtButton = document.getElementById("textBtn")
const imgButton = document.getElementById("imageBtn")

const addSomeText = ()=>{
let htmlElem = document.createElement("h3")
let someText = "This is a string of text!"
htmlElem.innerText = someText

mnElement.appendChild(htmlElem)
}

const addAnImage = ()=>{
let imgElem = document.createElement("img")
imgElem.src = "https://pbs.twimg.com/media/EsvWkCoXYAAdJwc?format=jpg&name=900x900"
imgElem.alt = "frog on lilypad"

mnElement.appendChild(imgElem)

}

txtButton.addEventListener("click", addSomeText)
imgButton.addEventListener("click", addAnImage)
clrButton.addEventListener("click", ()=>{
    let red = Math.random()*255
    let green = Math.random()*255
    let blue = Math.random()*255
    console.log(red)
    mnElement.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"
})



