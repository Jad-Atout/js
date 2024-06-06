

var small_button = document.querySelector("#small");
var big_button = document.querySelector("#big");
var h = document.querySelector("h2");
var p = document.querySelector("p");

function increase(){
    h.classList.add("hsize");
    p.classList.add("psize");
}
function decrease(){
    h.classList.remove("hsize");
    p.classList.remove("psize");
}
small_button.onclick = decrease;
big_button.onclick = increase;