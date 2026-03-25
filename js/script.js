// --- MUSIC PLAYER LOGIC ---
const modalPlayPauseBtn = document.getElementById('modalPlayPauseBtn');
const playPauseIcon = document.getElementById('playPauseIcon');

// bgMusic is the <audio> tag you made earlier!
modalPlayPauseBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        playPauseIcon.classList.remove('bi-play-fill');
        playPauseIcon.classList.add('bi-pause-fill');
    } else {
        bgMusic.pause();
        playPauseIcon.classList.remove('bi-pause-fill');
        playPauseIcon.classList.add('bi-play-fill');
    }
});