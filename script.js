let div = document.querySelector('.rectangle')

function changetocircle() {
    div.style.borderRadius = "50%";
}

function hide() {
    div.style.display = "none";
}

function show() {
    div.style.display = "block";
}

div.onmoussenter = function () {
    div.style.background = 'red';
}