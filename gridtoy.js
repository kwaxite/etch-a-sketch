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
    el.target.style.backgroundColor = "blue"
}

// function changes background colour to white
const removeColor = (el) => {
    el.target.style.backgroundColor = "white"
}



// calculate dimensions of each square 
let  numOfSquares = 8
const gridSize = 480
let squareSize = 480/numOfSquares

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

createBoxes(container, numOfSquares)

// function to remove boxes
const removeBoxes = () => {
    while (container.lastChild){
        container.lastChild.remove()
    }
}

removeBoxes()

// header

const header = document.querySelector('.header')
header.style.cssText = "color:#1E75CC; font-size:3rem; font-family: 'Roboto', sans-serif"
console.log(header)
header.style.margin = "30px"






