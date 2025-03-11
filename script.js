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

    
    // Flag to ensure we only play once
    let hasPlayed = false;

    // Play audio on first scroll
    window.addEventListener('scroll', () => {
        if (!hasPlayed) {
            audio.play().catch(e => console.log("Audio playback failed:", e));
            hasPlayed = true;
        }
    }, { once: true }); // Remove listener after first trigger

    // Create low-res confetti
    setInterval(createConfetti, 100); // Create confetti every 100ms
});

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = ['#ff0', '#f0f', '#0ff', '#f00'][Math.floor(Math.random() * 4)];
    document.body.appendChild(confetti);

    // Remove confetti after animation
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

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

// Add audio player
const audio = new Audio('https://www.nyan.cat/music/paddy.mp3');
audio.loop = true;
