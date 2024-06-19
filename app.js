const startButton = document.getElementById('start-button');
const canvas = document.getElementById('chalkboard');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
ctx.font = '32px Chalkboard';
ctx.fillStyle = 'white';

let recognition;

if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
} else {
    recognition = new SpeechRecognition();
}

recognition.lang = 'ja-JP';
recognition.continuous = true;
recognition.interimResults = false;

recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript.trim();
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // 黒板をクリア
    ctx.fillText(transcript, 50, 100);  // 黒板にテキストを描画
};

startButton.addEventListener('click', () => {
    recognition.start();
});