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

// Replace the old audio interaction code with this new button handler
const catMusicBtn = document.querySelector('.cat-music-btn');
if (catMusicBtn) {
    catMusicBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play()
                .then(() => {
                    catMusicBtn.classList.add('playing');
                    catMusicBtn.querySelector('.music-text').textContent = 'Nyaning!';
                })
                .catch(e => console.log("Audio playback failed:", e));
        } else {
            audio.pause();
            catMusicBtn.classList.remove('playing');
            catMusicBtn.querySelector('.music-text').textContent = 'Play Nyan!';
        }
    });
}

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
