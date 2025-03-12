document.addEventListener("DOMContentLoaded", function () {
    // List of available cursor effects
    const cursorEffects = [
        () => new cursoreffects.fairyDustCursor({ colors: ["#FF00FF", "#00FFFF", "#FFFF00"] }),
        () => new cursoreffects.emojiCursor({ emoji: ["🌟", "👽", "💾", "🌈"], delay: 20 }),
        () => new cursoreffects.rainbowCursor({ length: 5, colors: ["#FF69B4", "#87CEEB", "#FFD700"], size: 4 }),
        () => new cursoreffects.trailingCursor({ particles: 10, rate: 0.5 }),
        () => new cursoreffects.bubbleParticles()
    ];

    // Randomly select a cursor effect on page load
    const randomEffect = cursorEffects[Math.floor(Math.random() * cursorEffects.length)];
    randomEffect();

    // CountAPI visitor counter
    const counter = document.getElementById('visitor-count');
    fetch('https://api.countapi.xyz/hit/yourusername.github.io/saioko-cyber-den')
        .then(response => response.json())
        .then(data => {
            counter.innerHTML = `<font face="Comic Sans MS" color="#FF1493">Ur visitor #${data.value}!!</font>`;
        })
        .catch(error => {
            console.error('Error fetching visitor count:', error);
            counter.innerHTML = `<font face="Comic Sans MS" color="#FF1493">Ur visitor #???!!</font>`;
        });

    // Random alert chaos with MySpace energy
    setInterval(() => {
        if (Math.random() < 0.15) {
            const messages = [
                'WELCOME 2 MY GLITTER DEN!!',
                'TACOS R LIFE ~*~ SPARKLE ON!!',
                'ALIENS R MY BFFs!!',
                '90S CURSOR VIBES 4EVER!!'
            ];
            alert(messages[Math.floor(Math.random() * messages.length)]);
        }
    }, 4000);

    // Random spinning and glittering elements
    const images = document.querySelectorAll('.pixelated');
    images.forEach(img => {
        if (Math.random() < 0.5) {
            img.style.animation = Math.random() < 0.5 ? 'spin 1.5s infinite linear' : 'glitter 1s infinite';
        }
    });

    // Random bouncing text
    const fonts = document.querySelectorAll('font');
    fonts.forEach(font => {
        if (Math.random() < 0.3) {
            font.style.display = 'inline-block';
            font.style.animation = 'bounce 0.8s infinite alternate';
        }
    });

    // Wait for the window to fully load before scattering
    window.onload = function() {
        // Scatter windows across full screen without overlap
        const windows = document.querySelectorAll('.window');
        const placedPositions = []; // Track occupied areas
        const padding = 20; // Buffer from edges
        const viewportWidth = window.innerWidth - padding * 2;
        const viewportHeight = window.innerHeight - padding * 2;

        windows.forEach((win, index) => {
            const winWidth = win.offsetWidth || 400; // Default to 400px if not yet rendered
            const winHeight = win.offsetHeight || 200; // Estimate height (adjust if needed)

            let positionFound = false;
            let attempts = 0;
            const maxAttempts = 50; // Prevent infinite loops

            while (!positionFound && attempts < maxAttempts) {
                const randomLeft = padding + Math.random() * (viewportWidth - winWidth);
                const randomTop = padding + Math.random() * (viewportHeight - winHeight);

                // Check for overlap with already placed windows
                const overlaps = placedPositions.some(pos => {
                    return (
                        randomLeft < pos.right &&
                        randomLeft + winWidth > pos.left &&
                        randomTop < pos.bottom &&
                        randomTop + winHeight > pos.top
                    );
                });

                if (!overlaps) {
                    win.style.left = `${randomLeft}px`;
                    win.style.top = `${randomTop}px`;
                    win.style.zIndex = index;
                    placedPositions.push({
                        left: randomLeft,
                        top: randomTop,
                        right: randomLeft + winWidth,
                        bottom: randomTop + winHeight
                    });
                    positionFound = true;
                }
                attempts++;
            }

            // Fallback: If no position found, stack slightly offset
            if (!positionFound) {
                win.style.left = `${padding + index * 50}px`;
                win.style.top = `${padding + index * 50}px`;
                win.style.zIndex = index;
            }
        });
    };

    // Console spam with 90s flair
    console.log('%c SAIOKO’S CYBER DEN: 90S PASTEL EDITION!!', 'background: #FF69B4; color: #FFFF00; font-size: 18px; padding: 5px; text-shadow: 2px 2px #000000;');
});
