document.addEventListener("DOMContentLoaded", function () {
    let cube = document.querySelector(".cube");
    let isRotating = true;

    cube.addEventListener("mouseover", function () {
        isRotating = false;
        cube.style.animation = "none";
    });

    cube.addEventListener("mouseleave", function () {
        isRotating = true;
        cube.style.animation = "rotate 6s infinite linear";
    });
});
