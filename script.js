// --- 1. Ultra-Premium Tabular Countdown ---
const countdownElement = document.getElementById('countdown');
const targetDate = new Date("May 8, 2026 07:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        countdownElement.innerHTML = "00:00:00:00";
        countdownElement.style.color = "var(--gold)";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const formatTime = (time) => time < 10 ? `0${time}` : time;
    countdownElement.innerHTML = `${formatTime(days)}:${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// --- 2. Advanced Stack Scaling (Awwwards Style) ---
// This script scales down the cards slightly as the next one scrolls over them, creating realistic depth.
const cards = document.querySelectorAll('.timeline-card');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    cards.forEach((card, index) => {
        const cardTop = card.offsetTop;
        const cardHeight = card.offsetHeight;
        
        // Only start calculating if we've scrolled past the top of the card
        if (scrollY > cardTop - 100) {
            // Calculate how far we've scrolled past the card
            const distancePast = scrollY - cardTop;
            
            // Limit the maximum scale down to 0.92 so it doesn't shrink too much
            let scale = 1 - (distancePast / 3000);
            scale = Math.max(0.92, scale);
            
            // Apply a slight darkening filter as it goes back
            let brightness = 1 - (distancePast / 2000);
            brightness = Math.max(0.5, brightness);
            
            card.querySelector('.card-inner').style.transform = `scale(${scale})`;
            card.querySelector('.card-inner').style.filter = `brightness(${brightness})`;
        } else {
            // Reset when scrolling back up
            card.querySelector('.card-inner').style.transform = `scale(1)`;
            card.querySelector('.card-inner').style.filter = `brightness(1)`;
        }
    });
});