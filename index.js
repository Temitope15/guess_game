const para = document.getElementById("para")
const btn = document.getElementById("btn")
const refreshBtn = document.getElementById("refresh")
const form = document.getElementById("guessed_number_parent")
const textContent = document.getElementById("guessed_number")
const user = document.getElementById("userName")
const userName = prompt("what is your name?")
user.textContent = `${userName},`
const randomNum = Math.floor((Math.random() * 10) + 1)
const refresh = () => {
    window.location.reload()
}


textContent.addEventListener('change', function () {
    const inputValue = Number(textContent.value)
    if (isNaN(inputValue)) {
        para.textContent = "please put in a valid number"
    } else if (inputValue > 10 || inputValue <= 0) {
        para.textContent = `Youtr input must be between 1 and 10 `
    }
    else if (inputValue === randomNum) {
        para.textContent = "Congratulations! You guessed right!"

        btn.style.display = "none"
        refreshBtn.style.display = "block"
    }
    else if (inputValue != randomNum) {
        para.textContent = `Sorry my dear, you put in ${inputValue}, the correct answer is ${randomNum}`

        btn.style.display = "none"
        refreshBtn.style.display = "block"
    }

    console.log(typeof (inputValue))
})
