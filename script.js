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

// Garbgle functionality
const garbgleText = document.getElementById('garbgle-text');
const flipBtn = document.getElementById('flip-btn');

flipBtn.addEventListener('click', () => {
    garbgleText.classList.toggle('flip');
    if (garbgleText.classList.contains('flip')) {
        garbgleText.textContent = 'GARBGLExyZ';
    } else {
        garbgleText.textContent = 'garbgle';
    }
});

garbgleText.addEventListener('mouseover', () => {
    garbgleText.style.animation = 'bounce 0.5s ease-in-out infinite';
});

garbgleText.addEventListener('mouseleave', () => {
    garbgleText.style.animation = '';
});
