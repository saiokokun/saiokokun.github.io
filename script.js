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
            const audio = new Audio('https://www.nyan.cat/music/paddy.mp3');
            audio.loop = true;
            audio.volume = 0.5;
            audio.play().catch(e => console.error("Audio play failed:", e));
            hasPlayed = true;
        }
    };
    
    // Add event listeners for audio playback
    document.addEventListener('click', playAudio);
    document.addEventListener('keydown', playAudio);
    document.addEventListener('touchstart', playAudio);

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

    // Add fairy dust cursor effect
    function fairyDustCursor() {
        const possibleColors = ["#D61C59", "#E7D84B", "#1B8798", "#FF00FF", "#00FFFF"];
        let particles = [];
        let width = window.innerWidth;
        let height = window.innerHeight;
        let cursor = { x: width / 2, y: height / 2 };
        let canvas, context;

        function init() {
            canvas = document.createElement("canvas");
            context = canvas.getContext("2d");
            canvas.style.position = "fixed";
            canvas.style.top = "0";
            canvas.style.left = "0";
            canvas.style.pointerEvents = "none";
            canvas.style.zIndex = "999999";
            document.body.appendChild(canvas);
            canvas.width = width;
            canvas.height = height;

            document.addEventListener("mousemove", function(e) {
                cursor.x = e.clientX;
                cursor.y = e.clientY;
                addParticle(cursor.x, cursor.y, possibleColors[Math.floor(Math.random() * possibleColors.length)]);
            });

            document.addEventListener("touchmove", function(e) {
                if (e.touches.length > 0) {
                    cursor.x = e.touches[0].clientX;
                    cursor.y = e.touches[0].clientY;
                    addParticle(cursor.x, cursor.y, possibleColors[Math.floor(Math.random() * possibleColors.length)]);
                }
            });

            window.addEventListener("resize", function() {
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width;
                canvas.height = height;
            });

            animate();
        }

        function addParticle(x, y, color) {
            particles.push({
                x: x,
                y: y,
                color: color,
                size: Math.random() * 15 + 5,
                speedX: Math.random() * 3 - 1.5,
                speedY: Math.random() * 3 - 1.5,
                life: 30 + Math.random() * 20
            });
        }

        function animate() {
            context.clearRect(0, 0, width, height);

            // Update and draw particles
            for (let i = 0; i < particles.length; i++) {
                particles[i].x += particles[i].speedX;
                particles[i].y += particles[i].speedY;
                particles[i].size *= 0.95;
                particles[i].life--;

                if (particles[i].life <= 0 || particles[i].size <= 0.5) {
                    particles.splice(i, 1);
                    i--;
                    continue;
                }

                context.fillStyle = particles[i].color;
                context.beginPath();
                context.arc(particles[i].x, particles[i].y, particles[i].size, 0, Math.PI * 2);
                context.closePath();
                context.fill();
            }

            requestAnimationFrame(animate);
        }

        init();

        // Return destroy function
        return {
            destroy: function() {
                canvas.remove();
            }
        };
    }

    // Initialize fairy dust cursor
    const fairyDust = fairyDustCursor();

    // Add Helix audio element
    const randomAudio = document.querySelector('.random-audio');
    if (!randomAudio) {
        const audioDiv = document.createElement('div');
        audioDiv.className = 'random-audio';
        audioDiv.innerHTML = `
            <audio controls>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        `;
        
        // Insert after the chaos-links div
        const chaosLinks = document.querySelector('.chaos-links');
        if (chaosLinks) {
            chaosLinks.parentNode.insertBefore(audioDiv, chaosLinks.nextSibling);
        } else {
            document.body.appendChild(audioDiv);
        }
    }

    // Add Nyan Cat audio
    const nyanAudio = document.querySelector('.nyan-audio');
    if (!nyanAudio) {
        const nyanDiv = document.createElement('div');
        nyanDiv.className = 'nyan-audio';
        nyanDiv.innerHTML = `
            <audio controls>
                <source src="https://www.nyan.cat/music/paddy.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        `;
        
        // Insert after the random-audio div
        const randomAudioDiv = document.querySelector('.random-audio');
        if (randomAudioDiv) {
            randomAudioDiv.parentNode.insertBefore(nyanDiv, randomAudioDiv.nextSibling);
        } else {
            document.body.appendChild(nyanDiv);
        }
    }
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

// BRAINROT JS MADNESS
// setInterval(() => {
//     document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
// }, 5000);

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

// COMPLETELY RANDOM JAVASCRIPT CHAOS
// Create disco floor tiles
const discoFloor = document.querySelector('.disco-floor');
if (discoFloor) {
  for (let i = 0; i < 64; i++) {
    const tile = document.createElement('div');
    tile.className = 'disco-tile';
    tile.style.setProperty('--i', i);
    discoFloor.appendChild(tile);
  }
}

// Exploding button effect
const explodingBtn = document.querySelector('.exploding-button');
if (explodingBtn) {
  explodingBtn.addEventListener('click', () => {
    // Create explosion particles
    for (let i = 0; i < 100; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = '10px';
      particle.style.height = '10px';
      particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      particle.style.borderRadius = '50%';
      particle.style.left = '50%';
      particle.style.top = '50%';
      particle.style.transform = 'translate(-50%, -50%)';
      particle.style.pointerEvents = 'none';
      
      // Random direction and speed
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 100 + 50;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      
      explodingBtn.appendChild(particle);
      
      // Animate particle
      let posX = 0;
      let posY = 0;
      let opacity = 1;
      const gravity = 9.8;
      let time = 0;
      
      const animateParticle = () => {
        time += 0.1;
        posX += vx * 0.1;
        posY += vy * 0.1 + 0.5 * gravity * time * time;
        opacity -= 0.02;
        
        particle.style.transform = `translate(calc(-50% + ${posX}px), calc(-50% + ${posY}px))`;
        particle.style.opacity = opacity;
        
        if (opacity > 0) {
          requestAnimationFrame(animateParticle);
        } else {
          particle.remove();
        }
      };
      
      requestAnimationFrame(animateParticle);
    }
  });
}

// Create a completely useless global variable
window.POTATO_COUNTER = 0;

// Add a completely useless function
function incrementPotatoCounter() {
  window.POTATO_COUNTER++;
  console.log(`Potato count: ${window.POTATO_COUNTER}`);
  if (window.POTATO_COUNTER >= 10) {
    document.body.classList.add('potato-mode');
    alert('POTATO MODE ACTIVATED');
  }
}

// Add random event listeners
document.addEventListener('click', (e) => {
  if (Math.random() < 0.1) { // 10% chance
    incrementPotatoCounter();
  }
});

// Create a cursed interval that randomly changes CSS variables
setInterval(() => {
  document.documentElement.style.setProperty('--random-value', Math.random());
  document.documentElement.style.setProperty('--random-angle', `${Math.random() * 360}deg`);
}, 500);

// Add a completely useless keyboard shortcut
document.addEventListener('keydown', (e) => {
  if (e.key === 'z' && e.ctrlKey && e.shiftKey) {
    document.body.innerHTML = '<h1 style="font-size: 10vw; color: red; text-align: center; margin-top: 40vh;">YOU FOUND THE SECRET</h1>';
    setTimeout(() => location.reload(), 3000);
  }
});

// Create a useless class
class UselessClass {
  constructor() {
    this.nonsense = 'POTATO';
    this.counter = 0;
    this.initialize();
  }
  
  initialize() {
    console.log('Initializing useless class...');
    setInterval(() => this.doNothing(), 1000);
  }
  
  doNothing() {
    this.counter++;
    if (this.counter % 10 === 0) {
      console.log(`${this.counter} seconds of doing nothing`);
    }
  }
}

// Instantiate the useless class
const uselessInstance = new UselessClass();

// Create a completely random function that serves no purpose
function generateRandomNonsense() {
  const words = ['potato', 'banana', 'unicorn', 'rainbow', 'chaos', 'glitter', 'explosion', 'nyan', 'cat', 'dog', 'pizza'];
  const adjectives = ['sparkly', 'chaotic', 'glitchy', 'rainbow', 'cursed', 'blessed', 'confusing', 'nonsensical'];
  
  let result = '';
  for (let i = 0; i < 5; i++) {
    const word = words[Math.floor(Math.random() * words.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    result += `${adjective} ${word} `;
  }
  
  return result;
}

// Create random text elements periodically
setInterval(() => {
  if (Math.random() < 0.2) { // 20% chance
    const randomText = document.createElement('div');
    randomText.textContent = generateRandomNonsense();
    randomText.style.position = 'fixed';
    randomText.style.left = `${Math.random() * 70}vw`;
    randomText.style.top = `${Math.random() * 70}vh`;
    randomText.style.transform = `rotate(${Math.random() * 360}deg)`;
    randomText.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    randomText.style.fontSize = `${Math.random() * 2 + 1}rem`;
    randomText.style.zIndex = '9999';
    randomText.style.pointerEvents = 'none';
    document.body.appendChild(randomText);
    
    // Fade out and remove
    let opacity = 1;
    const fadeOut = setInterval(() => {
      opacity -= 0.01;
      randomText.style.opacity = opacity;
      if (opacity <= 0) {
        clearInterval(fadeOut);
        randomText.remove();
      }
    }, 50);
  }
}, 2000);

// Create a completely useless cookie
document.cookie = `uselessCookie=${btoa(generateRandomNonsense())}; expires=${new Date(Date.now() + 86400000).toUTCString()}; path=/`;

// Add a random console message
console.log('%c CONGRATULATIONS! You found the secret console message!', 'background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');

// Create a useless promise chain
Promise.resolve('step1')
  .then(value => {
    console.log(`Promise chain: ${value}`);
    return 'step2';
  })
  .then(value => {
    console.log(`Promise chain: ${value}`);
    return 'step3';
  })
  .then(value => {
    console.log(`Promise chain: ${value}`);
    return 'step4';
  })
  .then(value => {
    console.log(`Promise chain: ${value}`);
    console.log('Useless promise chain completed successfully!');
  })
  .catch(error => {
    console.error('Something went wrong in our useless promise chain:', error);
  });

// Create a completely random WebGL animation that will probably crash the browser
try {
  const canvas = document.createElement('canvas');
  canvas.width = 200;
  canvas.height = 200;
  canvas.style.position = 'fixed';
  canvas.style.bottom = '20px';
  canvas.style.left = '20px';
  canvas.style.zIndex = '9998';
  canvas.style.borderRadius = '50%';
  canvas.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
  document.body.appendChild(canvas);
  
  const gl = canvas.getContext('webgl');
  if (gl) {
    // Set clear color to transparent
    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    // Create shaders
    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;
    
    const fragmentShaderSource = `
      precision mediump float;
      uniform float time;
      uniform vec2 resolution;
      
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution;
        float t = time * 0.5;
        
        vec3 color = vec3(
          sin(uv.x * 10.0 + t) * 0.5 + 0.5,
          sin(uv.y * 10.0 + t * 1.5) * 0.5 + 0.5,
          sin((uv.x + uv.y) * 5.0 + t * 2.0) * 0.5 + 0.5
        );
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;
    
    // Compile shaders
    function compileShader(source, type) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      
      return shader;
    }
    
    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
    
    // Create program
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program linking error:', gl.getProgramInfoLog(program));
      return;
    }
    
    gl.useProgram(program);
    
    // Create buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
       1.0,  1.0
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    
    // Get attribute location
    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    
    // Get uniform locations
    const timeLocation = gl.getUniformLocation(program, 'time');
    const resolutionLocation = gl.getUniformLocation(program, 'resolution');
    
    // Set resolution
    gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    
    // Animation loop
    let startTime = Date.now();
    function render() {
      const currentTime = (Date.now() - startTime) / 1000;
      gl.uniform1f(timeLocation, currentTime);
      
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      
      requestAnimationFrame(render);
    }
    
    render();
  }
} catch (e) {
  console.error('WebGL error:', e);
}

// Add a completely useless service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(
    registration => console.log('ServiceWorker registration successful with scope: ', registration.scope),
    error => console.log('ServiceWorker registration failed: ', error)
  );
}

// Create a useless IndexedDB database
const request = indexedDB.open('uselessDB', 1);
request.onupgradeneeded = function(event) {
  const db = event.target.result;
  const objectStore = db.createObjectStore('uselessStore', { keyPath: 'id' });
  objectStore.createIndex('nonsense', 'nonsense', { unique: false });
  
  // Add some useless data
  for (let i = 0; i < 10; i++) {
    objectStore.add({
      id: i,
      nonsense: generateRandomNonsense(),
      timestamp: Date.now()
    });
  }
};

request.onsuccess = function(event) {
  console.log('UselessDB created successfully!');
};

request.onerror = function(event) {
  console.error('UselessDB error:', event.target.error);
};

// Fix the cursor trail
document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.cssText = `
        position: fixed;
        width: ${Math.random() * 20 + 5}px;
        height: ${Math.random() * 20 + 5}px;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        background: hsl(${Math.random() * 360}, 100%, 50%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: screen;
        opacity: 0.7;
    `;
    document.body.appendChild(trail);
    
    // Make it float away and disappear
    let moveX = (Math.random() - 0.5) * 10;
    let moveY = -Math.random() * 5 - 2;
    let opacity = 0.7;
    
    function animate() {
        moveY -= 0.1;
        opacity -= 0.01;
        trail.style.transform = `rotate(${Math.random() * 360}deg)`;
        trail.style.left = `${parseFloat(trail.style.left) + moveX}px`;
        trail.style.top = `${parseFloat(trail.style.top) + moveY}px`;
        trail.style.opacity = opacity;
        
        if (opacity > 0) {
            requestAnimationFrame(animate);
        } else {
            trail.remove();
        }
    }
    
    requestAnimationFrame(animate);
});

// COMIC SANS EVERYTHING BUTTON
const comicSansBtn = document.createElement('button');
comicSansBtn.textContent = 'COMIC SANS EVERYTHING';
comicSansBtn.style.position = 'fixed';
comicSansBtn.style.right = '20px';
comicSansBtn.style.top = '20px';
comicSansBtn.style.zIndex = '99999';
document.body.appendChild(comicSansBtn);

comicSansBtn.addEventListener('click', () => {
    document.body.style.fontFamily = '"Comic Sans MS", cursive';
    alert('EMBRACE THE COMIC SANS');
    // Make it rain Comic Sans text
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const text = document.createElement('div');
            text.textContent = 'Comic Sans!';
            text.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}vw;
                top: -50px;
                color: hsl(${Math.random() * 360}, 100%, 50%);
                font-family: "Comic Sans MS", cursive;
                font-size: ${Math.random() * 30 + 20}px;
                pointer-events: none;
                animation: fall 3s linear;
            `;
            document.body.appendChild(text);
            setTimeout(() => text.remove(), 3000);
        }, i * 50);
    }
});

// GRAVITY CHAOS
let gravityReversed = false;
setInterval(() => {
    if (Math.random() < 0.01) { // 1% chance every interval
        gravityReversed = !gravityReversed;
        document.body.style.transform = gravityReversed ? 'rotate(180deg)' : 'rotate(0deg)';
        document.body.style.transition = 'transform 2s';
        alert(gravityReversed ? 'GRAVITY REVERSED!' : 'GRAVITY RESTORED!');
    }
}, 1000);

// PARTY MODE
const partyMode = () => {
    document.body.style.animation = 'party 0.1s infinite';
    const audio = new Audio('https://www.myinstants.com/media/sounds/epic-sax-guy-loop.mp3');
    audio.loop = true;
    audio.play();
    
    // Create a disco ball
    const discoBall = document.createElement('div');
    discoBall.style.cssText = `
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 100px;
        background: radial-gradient(circle at 30% 30%, white, #888);
        border-radius: 50%;
        box-shadow: 0 0 50px rgba(255,255,255,0.8);
        z-index: 99999;
        animation: spin 2s linear infinite;
    `;
    document.body.appendChild(discoBall);
};

// Add party mode keyboard shortcut
document.addEventListener('keydown', (e) => {
    if (e.key === 'p' && e.ctrlKey && e.shiftKey) {
        partyMode();
    }
});

// CURSED IMAGE REPLACER
setInterval(() => {
    if (Math.random() < 0.1) { // 10% chance
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.src = 'https://media.giphy.com/media/nDSlfqf0gn5g4/giphy.gif';
            img.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
        });
    }
}, 5000);

// Rainbow trail effect
document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    trail.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 1000);
});

// Random retro cursor on page load
const retroCursors = [
    'url("data:image/cur;base64,AAACAAEAICAAAAAAAACoEAAAFgAAA") 2 2, auto', // Default
    'grab',
    'crosshair',
    'wait',
    'help',
    'e-resize',
    'n-resize',
    'ne-resize',
    'nw-resize',
    'pointer',
    'progress',
    'text',
    'wait',
    'cell',
    'not-allowed',
    'all-scroll',
    'col-resize',
    'row-resize',
    'no-drop',
    'vertical-text',
    'alias',
    'copy',
    'move',
    'zoom-in',
    'zoom-out'
];

document.documentElement.style.setProperty(
    '--custom-cursor', 
    retroCursors[Math.floor(Math.random() * retroCursors.length)]
);
