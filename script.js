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

    // Random visitor counter (static for now)
    let visitorCount = 1337 + Math.floor(Math.random() * 1000); // Random start for demo
    const counter = document.getElementById('visitor-count');
    counter.innerHTML = `<font face="Comic Sans MS" color="#FF1493">Ur visitor #${visitorCount}!!</font>`;

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

    // Scatter windows randomly with slight variation
    const windows = document.querySelectorAll('.window');
    windows.forEach((win, index) => {
        const baseTop = index * 50; // Base offset to avoid extreme overlap
        const baseLeft = index * 50;
        const randomTop = baseTop + Math.random() * 200 - 100; // ±100px variation
        const randomLeft = baseLeft + Math.random() * 300 - 150; // ±150px variation
        win.style.top = `${Math.max(20, randomTop)}px`; // Ensure not too high
        win.style.left = `${Math.max(20, randomLeft)}px`; // Ensure not too left
        win.style.zIndex = index; // Layering order
    });

    // Console spam with 90s flair
    console.log('%c SAIOKO’S CYBER DEN: 90S PASTEL EDITION!!', 'background: #FF69B4; color: #FFFF00; font-size: 18px; padding: 5px; text-shadow: 2px 2px #000000;');
});