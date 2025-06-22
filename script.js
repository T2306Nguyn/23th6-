
function createFallingHearts() {
    const heartsContainer = document.querySelector('.falling-hearts');
    const heartTypes = ['💖', '💕', '💗', '💓', '🎀', '🌸'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '-50px';
        heart.style.pointerEvents = 'none';
        heart.style.animation = 'fall ' + (Math.random() * 3 + 5) + 's linear';
        heart.style.opacity = Math.random() * 0.5 + 0.5;
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove();
            }
        }, 8000);
    }
    
    setInterval(createHeart, 2000);
    
    for (let i = 0; i < 5; i++) {
        setTimeout(createHeart, i * 400);
    }
}

function goToNextPage() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        window.location.href = 'birthday.html';
    }, 500);
}

document.addEventListener('DOMContentLoaded', function() {
    createFallingHearts();
    
    const helloKitty = document.querySelector('.hello-kitty');
    setInterval(() => {
        helloKitty.style.filter = 'brightness(1.2)';
        setTimeout(() => {
            helloKitty.style.filter = 'brightness(1)';
        }, 200);
    }, 3000);
});

const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        0% {
            top: -50px;
            opacity: 1;
            transform: rotate(0deg);
        }
        100% {
            top: 100vh;
            opacity: 0;
            transform: rotate(360deg);
        }
    }
`;
document.head.appendChild(style);
