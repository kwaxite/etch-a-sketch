// values for height and width
const total = 960
let numOfGrids = 2
let gridSize = total/numOfGrids
const container = document.querySelector('.container')
console.log(container)

container.style.display = "flex"
container.style.justifyContent = "center"
container.style.gap = "1rem"
container.style.flexWrap = "wrap"
container.style.minWidth = "250px"


const div1 = document.createElement('div')
div1.setAttribute ('class', 'grid 1')
div1.style.border = "2px solid red"
div1.style.backgroundColor = "blue"
div1.style.height = "100px"
div1.style.width =  "100px"
div1.style.margin = "10px"
container.append(div1)

const div2 = document.createElement('div')
div2.setAttribute ('class', 'grid 1')
div2.style.border = "2px solid white"
div2.style.height = "100px"
div2.style.width =  "100px"
div2.style.margin = "10px"
container.append(div2)

// function to create square boxes

const createBox = (container, newDiv) => {
    newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'box')
    newDiv.style.border = "2px solid purple"
    newDiv.style.height = "100px"
    newDiv.style.width =  "100px"
    newDiv.style.margin = "10px"
    container.append(newDiv)
}

// function to create n number of boxes

const createBoxes = (container, num) => {
    for (let i = 0; i < num; i++) {
        createBox(container, i)
    }
}

createBoxes(container, 16)

// function to remove boxes
// const removeBoxes = () => {
//     while (container.lastChild){
//         container.lastChild.remove()
//     }
// }

// removeBoxes()

// createBoxes(container, 20)

// function changes background colour 
const changeColor = (el) => {
    el.target.style.backgroundColor = "blue"
}


div2.addEventListener("mouseover", changeColor)

