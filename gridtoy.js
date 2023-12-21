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
const whiteColor = (el) => {
    el.target.style.backgroundColor = 'white'
}

// function changes background colour to white
const randomColor = (el) => {
    el.target.style.backgroundColor = generateRandomColor()
}

// calculate dimensions of each square 
let numOfSquares = 1
const gridSize = 480
let squareSize = gridSize/numOfSquares

// function to create square boxes
const createBox = (container, newDiv, colorType) => {
    newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'box')
    newDiv.style.outline = "0.5px solid purple"
    newDiv.style.height = `${squareSize}px`
    newDiv.style.width =  `${squareSize}px`
    // newDiv.style.margin = "10px"
    newDiv.addEventListener("mouseover", changeColor)
    newDiv.addEventListener("mouseout", colorType)
    container.append(newDiv)
}


// function to create n number of grid - reveal white color

const whiteColorFill = (container, num) => {
    for (let i = 0; i < num; i++) {
        for (let i = 0; i < num; i++){
            createBox(container, i, whiteColor)
        }
    }
}

// function to create n number of grid - random white color

const randomColorFill = (container, num) => {
    for (let i = 0; i < num; i++) {
        for (let i = 0; i < num; i++){
            createBox(container, i, randomColor)
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

const whiteColorButton = document.createElement('button')
whiteColorButton.setAttribute('class', 'btn display')

const randomColorButton = document.createElement('button')
whiteColorButton.setAttribute('class', 'btn display')

const resetButton = document.createElement('button')
resetButton.setAttribute('class', 'btn reset')

nav.append(whiteColorButton)

nav.append(randomColorButton)

nav.append(resetButton)


console.log(resetButton)
console.log(nav)

whiteColorButton.textContent = 'White'
whiteColorButton.style.cssText = "font-size: 1rem; background-color:yellow"
whiteColorButton.style.margin = "10px"
whiteColorButton.style.padding = "5px"

randomColorButton.textContent = 'Random'
randomColorButton.style.cssText = "font-size: 1rem; background-color:pink"
randomColorButton.style.margin = "10px"
randomColorButton.style.padding = "5px"

resetButton.textContent = 'Reset'
resetButton.style.cssText = "font-size: 1rem; background-color:lightgreen"
resetButton.style.margin = "10px"
resetButton.style.padding = "5px"

// reveal white - prompt asking for the number of squares
const displayGridWhite = () => {
    numOfSquares = prompt("Enter number of squares from 1 and 100");
    while(numOfSquares < 1 || numOfSquares >100 || isNaN(numOfSquares)) {
        numOfSquares = prompt("Invalid input, Enter a number from 1 and 100");
    }
    squareSize = gridSize/numOfSquares
    whiteColorFill(container, numOfSquares)
}

whiteColorButton.addEventListener('click',displayGridWhite)

// reveal random color - prompt asking for the number of squares
const displayGridColor = () => {
    numOfSquares = prompt("Enter number of squares from 1 and 100");
    while(numOfSquares < 1 || numOfSquares >100 || isNaN(numOfSquares)) {
        numOfSquares = prompt("Invalid input, Enter a number from 1 and 100");
    }
    squareSize = gridSize/numOfSquares
    randomColorFill(container, numOfSquares)
}

randomColorButton.addEventListener('click',displayGridColor)

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