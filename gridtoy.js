// create container and set properties

const container = document.querySelector('.container')
console.log(container)

container.style.display = "flex"
container.style.justifyContent = "center"
container.style.alignItem = "center"
container.style.height = "480px"
container.style.width = "480px"
// container.style.gap = "1rem"
container.style.flexWrap = "wrap"

// function changes background colour 
const changeColor = (el) => {
    el.target.style.backgroundColor = "black"
}

// function changes background colour to white
const removeColor = (el) => {
    el.target.style.backgroundColor = generateRandomColor()
}



// calculate dimensions of each square 
let numOfSquares = 1
const gridSize = 480
let squareSize = gridSize/numOfSquares

// function to create square boxes
const createBox = (container, newDiv) => {
    newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'box')
    newDiv.style.outline = "0.5px solid purple"
    newDiv.style.height = `${squareSize}px`
    newDiv.style.width =  `${squareSize}px`
    // newDiv.style.margin = "10px"
    newDiv.addEventListener("mouseover", changeColor)
    newDiv.addEventListener("mouseout", removeColor)
    container.append(newDiv)
}


// function to create n number of boxes

const createBoxes = (container, num) => {
    for (let i = 0; i < num; i++) {
        for (let i = 0; i < num; i++){
            createBox(container, i)
        }
    }
}



// function to remove boxes
const removeBoxes = () => {
    while (container.lastChild){
        container.lastChild.remove()
    }
}

// removeBoxes()

// header

const header = document.querySelector('.header')
header.style.cssText = "color:#1E75CC; font-size:3rem; font-family: 'Roboto', sans-serif"
console.log(header)
header.style.margin = "30px"

// create buttons in sidebar

const nav = document.querySelector('nav')
console.log(nav)

const displayButton = document.createElement('button')
displayButton.setAttribute('class', 'btn display')
const resetButton = document.createElement('button')
resetButton.setAttribute('class', 'btn reset')

nav.append(displayButton)
nav.append(resetButton)


console.log(resetButton)
console.log(nav)

displayButton.textContent = 'Number of squares'
displayButton.style.cssText = "font-size: 1rem; background-color:yellow"
displayButton.style.margin = "10px"
displayButton.style.padding = "5px"

resetButton.textContent = 'Reset'
resetButton.style.cssText = "font-size: 1rem; background-color:lightgreen"
resetButton.style.margin = "10px"
resetButton.style.padding = "5px"

// prompt asking for the number of squares
const displayGrid = () => {
    numOfSquares = prompt("Enter number of squares from 1 and 100");
    squareSize = gridSize/numOfSquares
    createBoxes(container, numOfSquares)
}

displayButton.addEventListener('click',displayGrid)

// reset grid

const resetGrid = () => {
    location.reload()
}

resetButton.addEventListener('click', resetGrid)

// generate random color

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
console.log(generateRandomColor()); 