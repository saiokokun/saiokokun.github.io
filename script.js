document.addEventListener("DOMContentLoaded", function () {
    // Random visitor counter
    let visitorCount = 1337;
    const counter = document.getElementById('visitor-count');
    setInterval(() => {
        visitorCount += Math.floor(Math.random() * 100);
        counter.innerHTML = `<font color="#FF00FF">You’re visitor #${visitorCount}!</font>`;
    }, 3000);

    // Random alert chaos
    setInterval(() => {
        if (Math.random() < 0.1) {
            const messages = [
                'WELCOME TO THE CYBER DEN!',
                'DID YOU BRING TACOS?',
                'ALIENS ARE WATCHING!',
                'NETSCAPE 4EVER!'
            ];
            alert(messages[Math.floor(Math.random() * messages.length)]);
        }
    }, 5000);

    // Random spinning elements
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (Math.random() < 0.3) {
            img.style.animation = 'spin 2s infinite linear';
        }
    });

    // Random bouncing text
    const fonts = document.querySelectorAll('font');
    fonts.forEach(font => {
        if (Math.random() < 0.2) {
            font.style.display = 'inline-block';
            font.style.animation = 'bounce 1s infinite alternate';
        }
    });

    // Console spam because why not
    console.log('%c SAIOKO’S CYBER DEN: WHERE CHAOS LIVES!', 'background: #FF00FF; color: #00FFFF; font-size: 20px; padding: 10px;');
});