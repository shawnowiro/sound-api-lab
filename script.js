// Selecting DOM elements
const audio = document.getElementById('myAudio');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const volumeSlider = document.getElementById('volumeSlider');
const muteBtn = document.getElementById('muteBtn');
const speedSelect = document.getElementById('speedSelect');
const statusText = document.getElementById('status');
const timeText = document.getElementById('currentTime');

// 1. Audio Playback
playBtn.addEventListener('click', () => {
    audio.play();
    statusText.innerText = "Playing...";
});

pauseBtn.addEventListener('click', () => {
    audio.pause();
    statusText.innerText = "Paused";
});

// 2. Volume Control
volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

// 3. Additional Features: Mute & Playback Speed
muteBtn.addEventListener('click', () => {
    audio.muted = !audio.muted;
    muteBtn.innerText = audio.muted ? "Unmute" : "Mute";
});

speedSelect.addEventListener('change', (e) => {
    audio.playbackRate = e.target.value;
});

// Display Current Time (Bonus/Additional Feature)
audio.addEventListener('timeupdate', () => {
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    timeText.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

// Keyboard Controls (Creativity Mark)
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault(); // Stop page from scrolling
        audio.paused ? audio.play() : audio.pause();
        statusText.innerText = audio.paused ? "Paused" : "Playing...";
    }
});
