const input = document.querySelector("#input");
const but = document.querySelector("#but");
const result = document.querySelector("#result");
const total = document.querySelector("#total");
let i = 0


but.addEventListener('click', (e) => {
if(input.value === '') return
    // result.innerHTML += `<li>${input.value}</li>`    
createDeleteElements(input.value)
input.value = ''
})

// создание и удаление 
function createDeleteElements(value) {
    i++
    const li = document.createElement("li")
    li.className = "li"
    li.textContent = value;
    

    const but = document.createElement("button");
    but.className = "but"
    but.textContent = "delete"
    li.appendChild(but)

// удаление
    but.addEventListener("click", (e) => {
    i--
    total.textContent = i
    result.removeChild(li)
    })
// зачеркивание
    li.addEventListener("click", (e) => {
        li.classList.toggle("li-active")
    })
    
    total.textContent = i
    result.appendChild(li)
}