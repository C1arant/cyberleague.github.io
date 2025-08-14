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