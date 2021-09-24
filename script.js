function up() {
    document.getElementById("menu").style.bottom = "0";
    document.getElementById("ha").style.bottom = "-20vh"
}
function down() {
    document.getElementById("menu").style.bottom = "-20vh"
    document.getElementById("ha").style.bottom = "0"
}

const text = document.getElementById("text")
const button = document.getElementById("butoun")

function randomQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            text.textContent = data.content;
        });
}

randomQuote();
button.addEventListener('click', () => {
    randomQuote();
});