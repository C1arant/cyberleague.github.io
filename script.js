document.querySelectorAll('.partner-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = "0 0 15px rgba(255,0,79,0.5)";
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "none";
    });
});

const progress = document.createElement('div');
progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.background = "#ff004f";
progress.style.width = "0%";
progress.style.zIndex = "200";
document.body.appendChild(progress);

window.addEventListener('scroll', () => {
    const scroll = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    progress.style.width = scroll + "%";
});

const counter = document.querySelector('#players-online');
let players = 1240;
setInterval(() => {
  players += Math.floor(Math.random()*5-2); // random small change
  counter.textContent = players;
}, 1500);

const logo = document.getElementById('logo');
const container = document.createElement('div');
container.id = 'logo-container';
logo.parentElement.insertBefore(container, logo);
container.appendChild(logo);

// create 3 glitch slices
const slices = [];
for (let i = 0; i < 3; i++) {
    const slice = document.createElement('div');
    slice.className = 'glitch-slice';
    container.appendChild(slice);
    slices.push(slice);
}

function randomSlice(slice) {
    const height = logo.offsetHeight;
    const sliceHeight = Math.random() * (height / 4);
    const top = Math.random() * (height - sliceHeight);
    const offsetX = Math.random() * 20 - 10; // horizontal jitter
    const hue = Math.random() * 360;

    slice.style.clipPath = `inset(${top}px 0 ${height - top - sliceHeight}px 0)`;
    slice.style.transform = `translateX(${offsetX}px)`;
    slice.style.filter = `hue-rotate(${hue}deg)`;
    slice.style.opacity = Math.random() * 0.6 + 0.2; // random transparency
}

function glitch() {
    slices.forEach(slice => {
        if (Math.random() < 0.5) randomSlice(slice);
        else slice.style.opacity = 0; // some slices disappear for flicker
    });
}

// run glitch randomly
setInterval(glitch, 100 + Math.random() * 200);
