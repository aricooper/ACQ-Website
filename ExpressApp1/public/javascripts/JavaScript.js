function highlight(focus) {
    var notActive = document.getElementsByClassName("active")[0];
    notActive.classList.toggle("active");
    focus.classList.toggle("active");

}