

const container = document.querySelector('.container')
console.log(container)

container.style.display = "flex"
container.style.justifyContent = "center"
container.style.alignItem = "center"
container.style.height = "480px"
container.style.width = "480px"
// container.style.gap = "1rem"
container.style.flexWrap = "wrap"
// container.style.minWidth = "250px"

// Test div boxes
// const div1 = document.createElement('div')
// div1.setAttribute ('class', 'grid 1')
// div1.style.border = "2px solid red"
// div1.style.backgroundColor = "blue"
// div1.style.height = "100px"
// div1.style.width =  "100px"
// div1.style.margin = "10px"
// container.append(div1)

// const div2 = document.createElement('div')
// div2.setAttribute ('class', 'grid 1')
// div2.style.border = "2px solid white"
// div2.style.height = "100px"
// div2.style.width =  "100px"
// div2.style.margin = "10px"
// container.append(div2)

// function changes background colour 
const changeColor = (el) => {
    el.target.style.backgroundColor = "blue"
}

// function changes background colour to white
const removeColor = (el) => {
    el.target.style.backgroundColor = "white"
}



// calculate dimensions of square 
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
// const removeBoxes = () => {
//     while (container.lastChild){
//         container.lastChild.remove()
//     }
// }

// removeBoxes()

// createBoxes(container, 20)




