$(function() {

    var Increase = document.getElementById("Plus");
    var Reduce = document.getElementById("Minus");

    var text = document.getElementById("title");

    $("#Warning").click(function() {
        text.className = "text-center text-warning"
    })
    $("#Info").click(function() {
        text.className = "text-center text-info"
    })
    $("#Light").click(function() {
        text.className = "text-center text-light"
    })
    $("#Dark").click(function() {
        text.className = "text-center text-dark"
    })
    $("#Primary").click(function() {
        text.className = "text-center text-primary "
    })
    $("#Secondary").click(function() {
        text.className = "text-center text-secondary"
    })
    $("#Success").click(function() {
        text.className = "text-center text-success"
    })
    $("#Danger").click(function() {
        text.className = "text-center text-danger"
    })


    Increase.addEventListener("click", () => {
        var currentFontSize = parseFloat(getComputedStyle(text).fontSize);
        var newFontSize = currentFontSize + 1;
        text.style.fontSize = `${newFontSize}px`;
    });

    Reduce.addEventListener("click", () => {
        var currentFontSize = parseFloat(getComputedStyle(text).fontSize);
        var newFontSize = currentFontSize - 1;
        text.style.fontSize = `${newFontSize}px`;
    });
})