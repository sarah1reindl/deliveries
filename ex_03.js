function displayThisText() {
    let text = "Hello World!";
    document.getElementById("out").innerHTML = text;
    stepAnimateText('.fade', 'bounceInDown', 0.02);
}

window.onload = function() {
    displayThisText();
};
