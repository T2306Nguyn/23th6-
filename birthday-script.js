
function createAdvancedFallingHearts() {
    const heartsContainer = document.querySelector('.falling-hearts');
    const heartTypes = ['💖', '💕', '💗', '💓', '🎀', '🌸', '✨'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 25 + 20 + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '-50px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '5';
        
        const duration = Math.random() * 4 + 6;
        const rotation = Math.random() * 720 - 360;
        const sway = Math.random() * 100 - 50;
        
        heart.style.animation = `
            fall ${duration}s linear,
            sway ${duration * 0.5}s ease-in-out infinite,
            sparkle 2s ease-in-out infinite
        `;
        
        heart.style.setProperty('--sway', sway + 'px');
        heart.style.setProperty('--rotation', rotation + 'deg');
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove();
            }
        }, duration * 1000);
    }
    
    setInterval(createHeart, 1500);
    
    for (let i = 0; i < 8; i++) {
        setTimeout(createHeart, i * 200);
    }
}

function watchVideo() {
    window.open('https://youtu.be/4N8-qJfFweQ?si=nh9wQyYupKxqZw2C', '_blank');
}

function goBack() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500);
}

function typeWriterEffect() {
    const letterContent = document.querySelector('.letter-content');
    const paragraphs = letterContent.querySelectorAll('p');
    
    paragraphs.forEach((p, index) => {
        const text = p.innerHTML;
        p.innerHTML = '';
        p.style.opacity = '1';
        
        setTimeout(() => {
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < text.length) {
                    p.innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 50);
        }, index * 1000 + 2000);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    createAdvancedFallingHearts();
    
    setTimeout(() => {
        createFireworks();
    }, 1000);
    
    setTimeout(typeWriterEffect, 2000);
});

function createFireworks() {
    const colors = ['#ff69b4', '#ffb6c1', '#ff1493', '#ffc0cb', '#ff91a4'];
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.style.position = 'fixed';
            firework.style.left = Math.random() * 100 + '%';
            firework.style.top = Math.random() * 50 + 25 + '%';
            firework.style.width = '4px';
            firework.style.height = '4px';
            firework.style.borderRadius = '50%';
            firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            firework.style.pointerEvents = 'none';
            firework.style.zIndex = '20';
            
            document.body.appendChild(firework);
            
            for (let j = 0; j < 12; j++) {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = '3px';
                particle.style.height = '3px';
                particle.style.borderRadius = '50%';
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
                const angle = (j * 30) * Math.PI / 180;
                const distance = Math.random() * 100 + 50;
                
                particle.style.animation = `explode 1s ease-out forwards`;
                particle.style.setProperty('--dx', Math.cos(angle) * distance + 'px');
                particle.style.setProperty('--dy', Math.sin(angle) * distance + 'px');
                
                firework.appendChild(particle);
            }
            
            setTimeout(() => {
                firework.remove();
            }, 1500);
        }, i * 800);
    }
}

const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        0% {
            top: -50px;
            opacity: 1;
            transform: translateX(0) rotate(0deg);
        }
        100% {
            top: 100vh;
            opacity: 0.3;
            transform: translateX(var(--sway, 0px)) rotate(var(--rotation, 360deg));
        }
    }
    
    @keyframes sway {
        0%, 100% { transform: translateX(0); }
        50% { transform: translateX(var(--sway, 20px)); }
    }
    
    @keyframes sparkle {
        0%, 100% { filter: brightness(1) drop-shadow(0 0 5px currentColor); }
        50% { filter: brightness(1.5) drop-shadow(0 0 15px currentColor); }
    }
    
    @keyframes explode {
        0% {
            transform: translate(0, 0);
            opacity: 1;
        }
        100% {
            transform: translate(var(--dx, 50px), var(--dy, 50px));
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
