$(function() {
    let body = document.querySelector("body");

    body.addEventListener("click", function(e) {
        let target = e.target;
        let popupClass = target.getAttribute("data-popup");
        console.log(popupClass);
    });

    let nav = $("#nav");
    let navToggle = $("#navToggle");
    
    $("#navToggle").on("click", function(event){
        event.preventDefault();
        nav.toggleClass("show");
    });
});