const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const inputEl = document.querySelector("input")


function doStuff(input) {
  let res = "";
  
  input.forEach(letter => {
    for (let i = 1; i < alphabet.length; i++) {
      if (letter === alphabet[i-1]) {
        res += `${i} `
      }
    }
  })
  return res.trim()
}

function populateTable(table, input, output) {
  const firstLine = document.querySelector(".firstLine")
  const secondLine = document.querySelector(".secondLine")
  
  // Resets the table upon clicking the button
  firstLine.innerHTML = ``
  secondLine.innerHTML = ``
  
  output = output.split(" ")
  
  input.forEach(letter => {
    const column = document.createElement("td")
    column.innerText = letter
    firstLine.appendChild(column)
  })
  
  output.forEach(letter => {
    const column = document.createElement("td")
    column.innerText = letter
    secondLine.appendChild(column)
  })
}

const btn = document.querySelector("button")
btn.addEventListener("click", e => {
  
  // Gets the value of the inputted letters only, in lowercase and with no space.
  let input = [...inputEl.value.toLowerCase().replaceAll(/[^a-z]/g, "")]
  let output = doStuff(input)
  /*document.querySelector(".input").innerText = input.join("")
  document.querySelector(".output").innerText = output*/
  
  const table = document.querySelector("table")
  
  populateTable(table, input, output)
})