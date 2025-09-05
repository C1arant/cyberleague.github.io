// Gallery carousel
const track = document.querySelector('.gallery-track');
const prevBtn = document.querySelector('.gallery-btn.prev');
const nextBtn = document.querySelector('.gallery-btn.next');
let index = 0;

function updateGallery() {
    const width = track.children[0].offsetWidth + 20; // item width + margin
    track.style.transform = `translateX(${-index * width}px)`;
}

nextBtn.addEventListener('click', () => {
    if (index < track.children.length - 1) {
        index++;
        updateGallery();
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateGallery();
    }
});

document.querySelectorAll('.leaderboard-wrapper .carousel-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const cards = btn.parentElement.querySelector('.leaderboard-cards');
    const scrollAmount = btn.classList.contains('left') ? -300 : 300;
    cards.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});
