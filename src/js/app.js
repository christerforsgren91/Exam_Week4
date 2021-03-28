window.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("quote")
    let message = document.getElementById("message")

    showMeQuote = () => {
        message.innerHTML = "hello how are you"
    }
    button.addEventListener("click", showMeQuote)
})