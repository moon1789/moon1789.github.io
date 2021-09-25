function up() {
    document.getElementById("menu").style.bottom = "0";
    document.getElementById("ha").style.bottom = "-20vh"
}
function down() {
    document.getElementById("menu").style.bottom = "-20vh"
    document.getElementById("ha").style.bottom = "0"
}
function menu() {
    document.getElementById("menu").style.bottom = "0";
    document.getElementById("header").style.top = "0";
}
function port() {
    document.getElementById("menu").style.bottom = "0";
    document.getElementById("header").style.top = "0";
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

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.right = "20px";
    } else {
        mybutton.style.right = "-40vh";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
var textArray = [
    'Marhaba!',
    'Namaskar!',
    'Hola!',
    'Bonjour!',
    'Namaste!',
    'Olá',
    'Hola',
    'Salam!',
    'Hello!',


];
console.log("dont dare to look at the source code , its a mess, ty.")
var randomNumber = Math.floor(Math.random() * textArray.length);

document.getElementById("hello").innerHTML = ('src', textArray[randomNumber]);