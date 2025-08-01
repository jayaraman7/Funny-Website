const container = document.getElementById('gameContainer');
const overlay = document.getElementById('overlay');
const videoPlayer = document.getElementById('videoPlayer');
const headerText = document.getElementById('headerText');

const videoSources = [
  "./videos/j1.mp4",
  "./videos/j2.mp4",
  "./videos/j3.mp4"
];

const totalButtons = 15;
const videoButtons = [];
while (videoButtons.length < 3) {
  let rand = Math.floor(Math.random() * totalButtons);
  if (!videoButtons.includes(rand)) videoButtons.push(rand);
}

let currentVideo = ""; 
const buttons = [];

for (let i = 0; i < totalButtons; i++) {
  const btn = document.createElement("button");
  btn.className = "spookyButton";
  btn.textContent = "Try me";
  container.appendChild(btn);

  const dx = Math.random() * 0.5 + 0.2;
  const dy = Math.random() * 0.5 + 0.2;

  buttons.push({ el: btn, dx, dy });

  btn.addEventListener("click", () => {
    btn.style.display = "none";

    if (videoButtons.includes(i)) {
      const videoIndex = videoButtons.indexOf(i);
      const selectedVideo = videoSources[videoIndex];
      currentVideo = selectedVideo;

      videoPlayer.src = selectedVideo;
      videoPlayer.style.display = "block";
      overlay.style.display = "flex";
      headerText.style.display = "none";

      videoPlayer.play();
    }
  });
}


videoPlayer.onended = () => {
  videoPlayer.style.display = "none";

  if (currentVideo.includes("j3.mp4")) {
    overlay.innerHTML = `
      <div style="text-align: center;">
        <h1 style="color: limegreen; font-size: 2.5rem;">🎉 Congratulations you found the video! 🎉</h1>
        <button id="nextBtn" style="margin-top: 20px; padding: 10px 20px; font-size: 1.2rem; background: limegreen; color: white; border: none; border-radius: 8px; cursor: pointer;">Next</button>
      </div>
    `;
    document.getElementById("nextBtn").onclick = () => {
      window.location.href = "./page4.html";
    };
  } else {
    overlay.style.display = "none";
    headerText.style.display = "block";
  }
};

function animate() {
  const box = container.getBoundingClientRect();
  buttons.forEach((obj) => {
    const btn = obj.el;
    let left = parseFloat(btn.style.left) || Math.random() * (box.width - 80);
    let top = parseFloat(btn.style.top) || Math.random() * (box.height - 40);

    left += obj.dx;
    top += obj.dy;

    if (left <= 0 || left + btn.offsetWidth >= box.width) obj.dx *= -1;
    if (top <= 0 || top + btn.offsetHeight >= box.height) obj.dy *= -1;

    btn.style.left = `${left}px`;
    btn.style.top = `${top}px`;
  });

  requestAnimationFrame(animate);
}

animate();
