document.addEventListener("DOMContentLoaded", function () {
    // Set initial random hue
    const initialHue = Math.random() * 360;
    document.documentElement.style.setProperty('--base-hue', initialHue);

    // Cycle hue
    let hue = initialHue;
    setInterval(() => {
        hue = (hue + 1) % 360;
        document.documentElement.style.setProperty('--base-hue', hue);
    }, 100);

    // MOAR CONFETTI!!!! Create multiple confetti streams
    setInterval(createConfetti, 20); // Every 20ms
    setInterval(() => createConfetti(true), 20); // Second stream
    setInterval(() => createConfetti(false), 20); // Third stream

    // Play audio on ANY interaction
    let hasPlayed = false;
    const playAudio = () => {
        if (!hasPlayed) {
            audio.play().then(() => {
                hasPlayed = true;
                console.log("🎵 Music started!");
            }).catch(e => console.log("Audio playback failed:", e));
        }
    };

    // Listen for ANY interaction
    ['click', 'touchstart', 'scroll', 'keypress', 'mousemove'].forEach(event => {
        document.addEventListener(event, playAudio, { once: true });
    });

    // Existing cube code
    let cube = document.querySelector(".cube");
    if (cube) {
        let isRotating = true;
        cube.addEventListener("mouseover", function () {
            isRotating = false;
            cube.style.animation = "none";
        });
        cube.addEventListener("mouseleave", function () {
            isRotating = true;
            cube.style.animation = "rotate 6s infinite linear";
        });
    }
});

function createConfetti(isReverse = false) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    // Random size for each confetti
    const size = Math.random() * 15 + 5; // 5-20px
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    
    // Random starting position
    confetti.style.left = `${Math.random() * 100}vw`;
    
    // More color variations
    const colors = [
        '#ff0', '#f0f', '#0ff', '#f00', '#0f0', '#00f',
        '#ff69b4', '#7fffd4', '#ff4500', '#9400d3'
    ];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Random rotation
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    // Different shapes
    if (Math.random() > 0.5) {
        confetti.style.borderRadius = '50%';
    } else if (Math.random() > 0.5) {
        confetti.style.borderRadius = '30% 70% 70% 30% / 30% 30% 70% 70%';
    }

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
