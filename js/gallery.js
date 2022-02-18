function upDate(img) {
    document.getElementById('image').style.backgroundImage="url("+img.src+")";
    document.getElementById('image').innerHTML = img.alt;
}

function unDo() {
    document.getElementById('image').style.backgroundImage="url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}