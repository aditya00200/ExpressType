let short_array=["Dream big. Start small. Act now.",
  "Stay positive. Work hard. Make it happen.",
  "Do it with passion or not at all.",
  "Progress, not perfection, is the goal.",
  "Less talk. More action. Greater results.",
  "Be the change you want to see.",
  "Every moment is a fresh beginning.",
  "Kindness is free. Sprinkle it everywhere.",
  "Create your own sunshine every single day.",
  "Doubt kills more dreams than failure ever will."
];

let medium_array= [
  "Success doesnt come overnight. Its built daily through discipline, persistence, belief, and showing up even when its difficult.",
  "You are capable of amazing things when you focus your energy, believe in yourself, and refuse to give up easily.",
  "Dont wait for the perfect moment. Take the moment and make it perfect with your attitude, effort, and intention.",
  "Your future is created by what you do today, not tomorrow. Make today count with purpose, drive, and clear focus.",
  "Happiness isnt found in things. Its found in gratitude, love, connection, and learning to be present in each moment.",
  "Fear is temporary. Regret is forever. Take chances, follow your heart, and live fully with courage and confidence.",
  "Growth begins when you step outside your comfort zone and embrace discomfort as a path to something greater and meaningful.",
  "Life rewards those who keep going, even when the path is unclear, the motivation is low, and results are slow.",
  "Discipline is choosing between what you want now and what you want most. Long-term success comes through consistent, intentional effort.",
  "Greatness isnt luck. Its a habit, built daily through commitment, failure, persistence, reflection, and the courage to keep improving."
];

let long_array=[
  "Success is not measured by how high you climb, but by how many times you bounce back after hitting the bottom. Every failure teaches you something valuable, every setback builds your resilience, and every challenge is an opportunity to grow stronger and wiser. The journey is just as important as the destination, so embrace each moment with courage and determination.",
  
  "Life has a way of testing us when we least expect it, pushing us to our limits and beyond. Its in these moments of struggle that our true character is revealed, and its how we respond to adversity that shapes our future. Remember that storms dont last forever - they clear the sky for new beginnings and brighter horizons.",
  
  "The biggest barrier to success is often the fear of failure. We hesitate, we procrastinate, and sometimes we give up before we even try. But true growth happens outside the comfort zone, where uncertainty meets courage. Take that leap, trust your abilities, and know that even if you stumble, youll land stronger and more prepared.",
  
  "Happiness is not a destination or a prize to be won; it is a state of mind cultivated by gratitude, kindness, and purpose. Its found in the small moments - a smile, a helping hand, a deep breath on a difficult day. When you focus less on what you lack and more on what you have, life becomes richer and more meaningful.",
  
  "Our minds are powerful tools capable of shaping our reality. Negative thoughts can imprison us, but positive thinking and self-belief can set us free. Change your mindset, and you change your world. It takes daily practice, patience, and persistence, but the transformation is worth every effort.",
  
  "True leadership is not about commanding from the top, but about lifting others up and inspiring them to be their best selves. It requires empathy, humility, and vision. When leaders serve rather than dominate, they create communities built on trust, respect, and shared purpose.",
  
  "Creativity doesnt come from waiting for the perfect moment or inspiration to strike. It comes from the discipline of showing up, experimenting, making mistakes, and trying again. The act of creating is a journey of discovery where failure is simply a stepping stone toward mastery.",
  
  "Time is the most valuable resource we have, yet it slips through our fingers like sand. How we choose to spend it defines the quality of our lives. Prioritize what truly matters, be present in the moment, and invest in experiences and relationships that nourish your soul.",
  
  "Every person you meet is fighting a battle you know nothing about. Kindness and compassion are the simplest yet most powerful gifts you can offer. They create ripples that spread far beyond your immediate circle, changing lives in ways you may never see.",
  
  "The path to greatness is rarely straight or smooth. Its filled with twists, turns, setbacks, and surprises. Embrace the uncertainty and trust the process. Keep moving forward, learning, adapting, and growing - because the journey itself is the true reward."
];

let selectedArray = short_array;
let currentQuote = "";
let startTime = null;
let timerInterval = null;
let maxTime = 15; 
let timeLeft = maxTime;
let isPlaying = false;
let totalCorrectChars = 0; 

const displayText = document.getElementById("display-text");
const inputField = document.getElementById("hidden-input");
const wpmEl = document.getElementById("wpm");
const accEl = document.getElementById("accuracy");
const timerEl = document.getElementById("timer-display");
const nextBtn = document.getElementById("next");

function init() {
    clearInterval(timerInterval);
    isPlaying = false;
    timeLeft = maxTime;
    startTime = null;
    totalCorrectChars = 0;
    
    currentQuote = selectedArray[Math.floor(Math.random() * selectedArray.length)];
    renderQuote();
    
    displayText.classList.remove('finished');
    inputField.value = "";
    inputField.disabled = false;
    inputField.focus();
    timerEl.innerText = timeLeft;
    updateStats(0, 100);
    setActiveNav();
}

function renderQuote() {
    displayText.innerHTML = currentQuote.split('').map(char => `<span class="char">${char}</span>`).join('');
}

function startTimer() {
    if (isPlaying) return;
    isPlaying = true;
    startTime = new Date();

    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.innerText = timeLeft;
        if (timeLeft <= 0) endGame();
    }, 1000);
}

function endGame() {
    clearInterval(timerInterval);
    isPlaying = false;
    inputField.disabled = true;
    displayText.classList.add('finished');
}

inputField.addEventListener("input", () => {
    if (!isPlaying && timeLeft > 0 && inputField.value.length > 0) {
        startTimer();
    }

    const charSpans = displayText.querySelectorAll('.char');
    const inputValue = inputField.value.split('');
    let currentQuoteCorrect = 0;

    charSpans.forEach((span, index) => {
        const char = inputValue[index];
        span.classList.remove('current', 'correct', 'incorrect');

        if (char == null) {
            if (index === inputValue.length) span.classList.add('current');
        } else if (char === span.innerText) {
            span.classList.add('correct');
            currentQuoteCorrect++;
        } else {
            span.classList.add('incorrect');
        }
    });

    const timeElapsedSec = (new Date() - startTime) / 1000;
    const timeInMins = timeElapsedSec / 60;
    const sessionCorrect = totalCorrectChars + currentQuoteCorrect;
    
    const wpm = timeInMins > 0 ? Math.round((sessionCorrect / 5) / timeInMins) : 0;
    const accuracy = inputValue.length > 0 ? Math.round((currentQuoteCorrect / inputValue.length) * 100) : 100;

    updateStats(wpm, accuracy);

    if (inputValue.length >= currentQuote.length && timeLeft > 0) {
        totalCorrectChars += currentQuoteCorrect;
        currentQuote = selectedArray[Math.floor(Math.random() * selectedArray.length)];
        inputField.value = "";
        renderQuote();
    }
});

function updateStats(wpm, acc) {
    wpmEl.innerText = wpm;
    accEl.innerText = acc + "%";
}

document.getElementById("btn-short").onclick = () => { selectedArray = short_array; init(); };
document.getElementById("btn-medium").onclick = () => { selectedArray = medium_array; init(); };
document.getElementById("btn-long").onclick = () => { selectedArray = long_array; init(); };

[15, 30, 60].forEach(time => {
    document.getElementById(`t-${time}`).onclick = () => {
        maxTime = time;
        init();
    };
});

function setActiveNav() {
    document.querySelectorAll('.middlenavcontent, .timer-opt').forEach(el => el.classList.remove('active'));
    
    if (selectedArray === short_array) document.getElementById('btn-short').classList.add('active');
    if (selectedArray === medium_array) document.getElementById('btn-medium').classList.add('active');
    if (selectedArray === long_array) document.getElementById('btn-long').classList.add('active');
    
    document.getElementById(`t-${maxTime}`).classList.add('active');
}

function toggleBox(id) { document.getElementById(id).classList.toggle('scale-1'); }
function setTheme(theme) { document.body.className = theme; }
function focusInput() { if(!inputField.disabled) inputField.focus(); }

document.getElementById('font-slider').oninput = function() {
    const size = this.value + "px";
    displayText.style.fontSize = size;
    document.getElementById('font-val').innerText = size;
};



let sessionHistory = JSON.parse(localStorage.getItem('typingHistory')) || [];
let userName = localStorage.getItem('userName') || "Aditya Sharma";

function updateProfileUI() {
    const avgWpm = sessionHistory.length > 0 
        ? Math.round(sessionHistory.reduce((a, b) => a + b, 0) / sessionHistory.length) 
        : 0;
    const peakWpm = sessionHistory.length > 0 
        ? Math.max(...sessionHistory) 
        : 0;

    document.getElementById('display-name').innerText = userName;
    document.getElementById('avg-wpm-display').innerText = avgWpm;
    document.getElementById('peak-wpm-display').innerText = peakWpm;
    
    const initials = userName.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    document.getElementById('avatar-initials').innerText = initials || "?";
}

function editName() {
    const newName = prompt("Enter your name:", userName);
    if (newName && newName.trim() !== "") {
        userName = newName.trim();
        localStorage.setItem('userName', userName);
        updateProfileUI();
    }
}

function endGame() {
    clearInterval(timerInterval);
    isPlaying = false;
    inputField.disabled = true;
    displayText.classList.add('finished');

    const finalWpm = parseInt(wpmEl.innerText);
    if (finalWpm > 0) {
        sessionHistory.push(finalWpm);
        localStorage.setItem('typingHistory', JSON.stringify(sessionHistory));
        updateProfileUI();
    }
}

updateProfileUI();

nextBtn.onclick = init;

init();
