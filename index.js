AOS.init();

document.getElementById("menu-toggle").addEventListener("click", function (e) {
    console.log(e.target)
    document.getElementById("menu").classList.toggle("active");

});
