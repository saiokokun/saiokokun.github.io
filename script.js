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

    // Random button chaos
    const randomBtn = document.querySelector('.random-btn');
    if (randomBtn) {
        randomBtn.addEventListener('click', () => {
            // Create extra confetti burst on click
            for (let i = 0; i < 50; i++) {
                setTimeout(() => createConfetti(), i * 20);
            }
            // Random rotation on click
            randomBtn.style.transform = `rotate(${Math.random() * 360}deg)`;
        });
    }

    // Random images hover effect
    const randomImages = document.querySelectorAll('.random-images img');
    randomImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = `scale(1.1) rotate(${Math.random() * 20 - 10}deg)`;
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Random link chaos
    const randomLink = document.querySelector('.random-link a');
    if (randomLink) {
        randomLink.addEventListener('mouseover', () => {
            randomLink.textContent = ['OwO', 'UwU', '>w<', ':3', '(｡♥‿♥｡)'][Math.floor(Math.random() * 5)];
        });
        randomLink.addEventListener('mouseleave', () => {
            randomLink.textContent = 'Click here for absolutely no reason';
        });
    }

    // Random quote animation
    const quote = document.querySelector('.random-quote blockquote');
    if (quote) {
        quote.addEventListener('click', () => {
            quote.style.animation = 'glitch 0.3s infinite';
            setTimeout(() => quote.style.animation = '', 1000);
        });
    }

    // Even more confetti streams
    setInterval(createConfetti, 10); // Every 10ms
    setInterval(() => createConfetti(true), 10); // Second stream
    setInterval(() => createConfetti(false), 10); // Third stream
    setInterval(() => createConfetti(true), 10); // Fourth stream
    setInterval(() => createConfetti(false), 10); // Fifth stream
});

function createConfetti(isReverse = false) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    // Bigger size range
    const size = Math.random() * 20 + 5; // 5-25px
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    
    // Random starting position with more spread
    confetti.style.left = `${Math.random() * 120 - 10}vw`;
    
    // More color variations
    const colors = [
        '#ff0', '#f0f', '#0ff', '#f00', '#0f0', '#00f',
        '#ff69b4', '#7fffd4', '#ff4500', '#9400d3',
        '#ffd700', '#fa8072', '#00fa9a', '#ff1493'
    ];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // More random shapes
    const shapes = ['50%', '0%', '30% 70% 70% 30% / 30% 30% 70% 70%', '20% 80% 80% 20% / 20% 20% 80% 80%'];
    confetti.style.borderRadius = shapes[Math.floor(Math.random() * shapes.length)];
    
    document.body.appendChild(confetti);
    
    // Remove confetti after animation
    setTimeout(() => confetti.remove(), 3000);
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

// BRAINROT JS MADNESS
setInterval(() => {
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
}, 5000);

document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'absolute';
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;
    sparkle.style.width = '10px';
    sparkle.style.height = '10px';
    sparkle.style.background = 'gold';
    sparkle.style.borderRadius = '50%';
    sparkle.style.animation = 'fall 1s linear';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
});

setInterval(() => {
    alert('BOO! DID I SCARE YOU?');
}, 30000);

const spinnyBtn = document.querySelector('.spinny-btn');
if (spinnyBtn) {
    spinnyBtn.addEventListener('click', () => {
        document.body.style.transform = `rotate(${Math.random() * 360}deg)`;
        setTimeout(() => document.body.style.transform = '', 1000);
    });
}

setInterval(() => {
    const randomText = document.createElement('p');
    randomText.textContent = ['BLOOP', 'BLARP', 'WHEEEEE', 'YOLO', 'SWAG'][Math.floor(Math.random() * 5)];
    randomText.style.position = 'fixed';
    randomText.style.left = `${Math.random() * 100}vw`;
    randomText.style.top = `${Math.random() * 100}vh`;
    randomText.style.color = 'white';
    randomText.style.fontSize = '2rem';
    document.body.appendChild(randomText);
    setTimeout(() => randomText.remove(), 2000);
}, 1000);

document.addEventListener('keydown', (e) => {
    if (e.key === 'p') {
        document.body.innerHTML += '<h1 style="color: purple;">PPPPPPPPPPPPPPPPPP</h1>';
    }
});
