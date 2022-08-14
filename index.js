let count = 0
let savedCount = "Previous entires: "
let flagFirstSave = false
let saveEL = document.getElementById("save-el")
let resetStatus = null

function increament() {
    console.log(count)
    count++
    document.getElementById("count-el").innerText = count
}

function save() {
    resetStatus = document.getElementById("switch-reset").checked;
    if (flagFirstSave == false){
        savedCount += count + " "
        flagFirstSave = true
    } else {
        savedCount += " - " + count 
    }
    saveEL.textContent = savedCount
    if (resetStatus == true ) {
        count = 0
        document.getElementById("count-el").innerText = count

    }
    console.log(savedCount)
}

function reset() {
    count = 0
    document.getElementById("count-el").innerText = count
}


let welcomeEl = document.getElementById("welcome-el")
let myName = "Shayan Bali"
let greeting = "Welcome Back "
welcomeEl.innerText = greeting + myName + "👋"
