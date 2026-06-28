const audioSystem = document.getElementById('bg-music');
const videoSystem = document.getElementById('video-bg');
const musicButton = document.getElementById('music-toggle');
const waveBars = document.getElementById('wave-bars');
const splash = document.getElementById('splash-screen');

function startSystem() {
    splash.style.opacity = "0";
    splash.style.pointerEvents = "none";
    
    videoSystem.play();

    audioSystem.play().then(() => {
        waveBars.classList.add('playing');
    }).catch(err => {
        console.log("Gagal memutar audio otomatis:", err);
    });
    
    loop();
}

function toggleMusic() {
    if (audioSystem.paused) {
        audioSystem.play();
        musicButton.innerText = "🔊";
        waveBars.classList.add('playing');
        document.querySelector('.audio-control-container').classList.remove('muted');
    } else {
        audioSystem.pause();
        musicButton.innerText = "🔇";
        waveBars.classList.remove('playing');
        document.querySelector('.audio-control-container').classList.add('muted');
    }
}

function filterProjects(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = "block";
            setTimeout(() => { card.style.opacity = "1"; card.style.transform = "scale(1)"; }, 10);
        } else {
            card.style.opacity = "0";
            card.style.transform = "scale(0.95)";
            setTimeout(() => { card.style.display = "none"; }, 300);
        }
    });
}

function openModal(title, description) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = description;
    document.getElementById('ultimate-modal').classList.add('active');
}

function closeModal(event) {
    if (event.target.id === 'ultimate-modal') {
        document.getElementById('ultimate-modal').classList.remove('active');
    }
}

const canvas = document.getElementById('ultimate-net');
const ctx = canvas.getContext('2d');
let particles = [];

function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', initCanvas);
initCanvas();

class Node {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.2 + 0.8;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fill();
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
}

for (let i = 0; i < 35; i++) particles.push(new Node());

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });

    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            let dx = particles[i].x - particles[j].x;
            let dy = particles[i].y - particles[j].y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 130) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(255, 255, 255, ${0.06 - (dist/130)*0.06})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(loop);
}
