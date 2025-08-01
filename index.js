function Showimage() {
  const c = document.getElementById("div_img");
  const d = document.getElementById("text");
  const e = document.getElementById("but");
  const sound = document.getElementById("rizz");
  c.classList.remove("img_con");
  c.classList.add("show");
  d.classList.remove("cltext");
  d.classList.add("rev");

  setTimeout(() => {
    c.querySelector('img').style.transform = 'scale(1)';
  }, 100);

  setTimeout(() => {
    c.querySelector('p').style.transform = 'scale(1)';
  }, 100);

  setTimeout(() => {
    e.classList.remove("clbut");
    e.classList.add("dis");
  }, 100);

  var s1 = new Audio("./audio/rizz-sounds.mp3");
  s1.play();
}

const video = document.getElementById("popupVideo");

function showvideo() {
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("videoPopup");

  video.pause();
  video.currentTime = 0;
  video.load();
  popup.style.display = "block";
  overlay.style.display = "block";

  video.play().catch(err => {
    console.log("Playback prevented:", err);
  });
}

video.addEventListener("ended", () => {
  document.getElementById("videoPopup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
});

const container = document.getElementById('buttonContainer');
const buttonCount = 10;
const buttons = [];

const videoPlayer = document.getElementById('videoPlayer');
const gifViewer = document.getElementById('gifViewer');
const overlay = document.getElementById('mediaOverlay');
const closeBtn = document.getElementById('closeBtn');

const mediaSources = [
  "./videos/v1.mp4",
  "./videos/v2.mp4",
  "./videos/v3.mp4",
  "./videos/v4.mp4",
  "./videos/v5.mp4",
  "./videos/v6.mp4",
  "./videos/v7.mp4",
  "./videos/v8.mp4",
  "./videos/v9.mp4",
  "./videos/v10.mp4",
  "./videos/v11.mp4",
  "./videos/v12.mp4",
  "./videos/v13.mp4",
  "./videos/v14.mp4",
  "./videos/v15.mp4",
];

for (let i = 0; i < buttonCount; i++) {
  const btn = document.createElement('button');
  btn.textContent = "Try me";
  container.appendChild(btn);

  const x = Math.random() * (container.clientWidth - 80);
  const y = Math.random() * (container.clientHeight - 35);
  btn.style.left = x + "px";
  btn.style.top = y + "px";
  btn.classList.add('floating-button');

  const mediaSrc = mediaSources[i % mediaSources.length];

  btn.onclick = () => {
    if (mediaSrc.endsWith(".mp4")) {
      gifViewer.style.display = "none";
      videoPlayer.style.display = "block";
      videoPlayer.pause();
      videoPlayer.currentTime = 0;
      videoPlayer.src = mediaSrc;
      videoPlayer.load();
      overlay.style.display = "flex";

      videoPlayer.play().catch(err => {
        console.log("Autoplay blocked:", err);
      });
    } else {
      videoPlayer.pause();
      videoPlayer.style.display = "none";
      gifViewer.style.display = "block";
      gifViewer.src = mediaSrc;
      overlay.style.display = "flex";
    }
  };

  buttons.push({
    el: btn,
    x,
    y,
    dx: (Math.random() - 0.5) * 3,
    dy: (Math.random() - 0.5) * 3
  });
}

function animate() {
  const width = container.clientWidth;
  const height = container.clientHeight;

  for (let btn of buttons) {
    btn.x += btn.dx;
    btn.y += btn.dy;

    if (btn.x <= 0 || btn.x >= width - 80) btn.dx *= -1;
    if (btn.y <= 0 || btn.y >= height - 35) btn.dy *= -1;

    btn.el.style.left = btn.x + "px";
    btn.el.style.top = btn.y + "px";
  }

  requestAnimationFrame(animate);
}
animate();

closeBtn.onclick = () => {
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
  overlay.style.display = "none";
};

videoPlayer.addEventListener("ended", () => {
  const currentVideo = videoPlayer.src;

  videoPlayer.pause();
  videoPlayer.currentTime = 0;
  overlay.style.display = "none";

  if (currentVideo.includes("v7.mp4")) {
    showCongratulationEffect();
    createNextButton();
  }
});

function showCongratulationEffect() {
  const congratsDiv = document.createElement("div");
  congratsDiv.textContent = "🎉 Congratulations! 🎉";
  congratsDiv.style.position = "fixed";
  congratsDiv.style.top = "50%";
  congratsDiv.style.left = "50%";
  congratsDiv.style.transform = "translate(-50%, -50%)";
  congratsDiv.style.background = "linear-gradient(45deg, #00f260, #0575e6)";
  congratsDiv.style.color = "#fff";
  congratsDiv.style.padding = "20px 40px";
  congratsDiv.style.fontSize = "2rem";
  congratsDiv.style.borderRadius = "20px";
  congratsDiv.style.zIndex = "1000";
  congratsDiv.style.boxShadow = "0 0 20px #000";
  document.body.appendChild(congratsDiv);

  setTimeout(() => {
    congratsDiv.remove();
  }, 3000);
}

function createNextButton() {
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next Page →";
  nextBtn.style.position = "fixed";
  nextBtn.style.bottom = "30px";
  nextBtn.style.right = "30px";
  nextBtn.style.padding = "15px 25px";
  nextBtn.style.fontSize = "1.2rem";
  nextBtn.style.backgroundColor = "blue";
  nextBtn.style.color = "#fff";
  nextBtn.style.border = "none";
  nextBtn.style.borderRadius = "10px";
  nextBtn.style.cursor = "pointer";
  nextBtn.style.zIndex = "1000";

  nextBtn.onclick = () => {
    window.location.href = "page3.html"; // Replace with your real link
  };

  document.body.appendChild(nextBtn);
}