let count = 0
let savedCount = "Previous entires: "
let flagFirstSave = false
let saveEL = document.getElementById("save-el")
let autoSave = null

function increament() {
    console.log(count)
    count++
    document.getElementById("count-el").innerText = count
}

function save() {
    if (flagFirstSave == false){
        savedCount += count + " "
        flagFirstSave = true
    } else {
        savedCount += " - " + count 
    }
    saveEL.textContent = savedCount

    console.log(savedCount)
}

function reset() {
    count = 0
    document.getElementById("count-el").innerText = count
}


function autoSave() {
    autoSave = document.getElementById("switchValue").checked;
}

let welcomeEl = document.getElementById("welcome-el")
let myName = "Shayan Bali"
let greeting = "Welcome Back "
welcomeEl.innerText = greeting + myName + "👋"
