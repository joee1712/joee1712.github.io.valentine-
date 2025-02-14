// Page Navigation
function nextPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

// Password Logic
function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  const errorMessage = document.getElementById('errorMessage');

  if (password === 'iloveyou') {
    nextPage('askingPage');
  } else {
    errorMessage.textContent = "Incorrect password! Try again.";
    errorMessage.classList.remove('hidden');
  }
}

// "No" Button Trick (20+ Phrases)
let noPhrases = [
  "no", "really?😔", "are you sure?😟", "think again?😟", "you're joking, right🥺?", "come on!", "please😔?",
  "last chance...🥺", "this is getting awkward 😅", "you’re breaking my heart 💔", "i’ll cry 😭",
  "do you want me to be sad?😟", "pretty please?🥺", "with extra love?😟", "puppy eyes 🥺", "my last offer!😗", 
  "don't do this!😭", "final warning!😗", "no more rejections 😭", "okay but fr now, yes?😳"
];
let noIndex = 0;
function handleNo() {
  const btn = document.getElementById('noButton');
  noIndex = (noIndex + 1) % noPhrases.length;
  btn.textContent = noPhrases[noIndex];
}

// Music Toggle
let music = document.getElementById("bgMusic");
music.volume = 0.5;
music.muted = true;

function toggleMusic() {
  let btn = document.getElementById("musicButton");
  music.muted = !music.muted;
  btn.textContent = music.muted ? "🔇" : "🎵";
  if (!music.muted) {
    music.play().catch(() => {
      // Handle autoplay restrictions
      alert("Click anywhere on the page to enable music!");
    });
  }
}

// Enable music on user interaction
document.body.addEventListener('click', () => {
  if (music.paused && !music.muted) {
    music.play();
  }
});

// Slider Logic (5 Stages)
function updateSlider() {
  let value = document.getElementById("happinessSlider").value;
  let text = value + "%";
  
  if (value <= 20) {
    text = "😢 really? that low? (" + value + "%)";
  } else if (value <= 40) {
    text = "🙂 okay, not bad (" + value + "%)";
  } else if (value <= 60) {
    text = "😊 aww, that's sweet! (" + value + "%)";
  } else if (value <= 80) {
    text = "😍 you're making me blush! (" + value + "%)";
  } else {
    text = "🎉 OMG, you love me this much?! (" + value + "%)";
  }

  document.getElementById("sliderText").textContent = text;

  if (value == 100) {
    document.getElementById("sliderNext").disabled = false;
  }
}

function checkSlider() {
  nextPage('letterPage');
}

// Falling Emojis
const emojis = ['💕', '🎀', '🌸', '💖', '💝', '💗', '💞'];
setInterval(() => {
  let emoji = document.createElement('span');
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = Math.random() * 5 + 5 + "s";
  document.getElementById('floatingEmojis').appendChild(emoji);
  setTimeout(() => emoji.remove(), 10000);
}, 300);