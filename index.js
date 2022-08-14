let count = 0
let savedCount = "Previous entires: "
let flagFirstSave = false
let saveEL = document.getElementById("save-el")

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
        savedCount += "- " + count + " "
    }
    saveEL.innerText = savedCount

    console.log(savedCount)
}


let welcomeEl = document.getElementById("welcome-el")
let myName = "Shayan Bali"
let greeting = "Welcome Back "
welcomeEl.innerText = greeting + myName + "👋"
