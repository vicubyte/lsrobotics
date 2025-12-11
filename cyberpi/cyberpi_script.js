const activityTitles = {
    "1": "Magic CyberPi!",
    "2": "Display animation!",
    "3": "CyberBand!",
    "4": "CyberBrush!",
    "5": "Rocket controller!",
    "6": "Rocket Pro!",
    "7": "Temperature control!",
    "8": "Smart door!",
  };

const imageCache = [];
let currentSlide = 1;
let endSlideOn = 0;
let currentLevel = 0;
window.isAdmin = false;

function getNivelFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('lvl') || "1";
  }

function loadSlidesScript(nivel) {
    currentLevel = Number(nivel);
    const script = document.createElement("script");
    script.src = `cyberpi/cyberpi_${nivel}.js`;
    script.onload = () => {
        document.getElementById("slide-total").textContent = slides.length;
        preloadMedia();
        updateSlide();
    };
    script.onerror = () => {
        document.getElementById("slide-text").textContent = "This level has not yet been implemented...";
        const container = document.querySelector(".image-center");
        container.innerHTML = `<img id="slide-media" alt="Slide media">`;
        document.getElementById("slide-media").src = "srcs/comm/404.png";
    };
    document.body.appendChild(script);
  }

function preloadMedia() {
    slides.forEach((slide, index) => {
        if (slide.image) {
            imageCache[index] = new Image();
            imageCache[index].src = slide.image;
        }
    });
    const extraImage = new Image();
    extraImage.src = "srcs/comm/trophy.png";
}

// Challenge solution
function getChallengeSlide(level) {
    const lvl = Number(level);
    return slides.length;
}

function updateSlide() {
    const container = document.querySelector(".image-center");
    let mediaElement = document.getElementById("slide-media");
    const currentSlideData = slides[currentSlide - 1];

    if (currentSlideData.video) {
        if (!mediaElement || mediaElement.tagName !== "VIDEO") {
            container.innerHTML = `<video id="slide-media" autoplay loop muted playsinline></video>`;
            mediaElement = document.getElementById("slide-media");
        }
        mediaElement.src = currentSlideData.video;
    } 
    else if (currentSlideData.image) {
        if (!mediaElement || mediaElement.tagName !== "IMG") {
            container.innerHTML = `<img id="slide-media" alt="Slide media">`;
            mediaElement = document.getElementById("slide-media");
        }
        mediaElement.src = currentSlideData.image;
    }

    let textElement = document.getElementById("slide-text");
    textElement.innerHTML = currentSlideData.text;
    textElement.style.color = "black";

    let textContainer = document.querySelector(".info-box");
    textContainer.style.backgroundColor = "white";

    document.getElementById("slide-number").textContent = String(currentSlide).padStart(2, '0');
    mediaElement.className = currentSlideData.className || "";
    
    // Challenge solution
      const challengeSlide = getChallengeSlide(currentLevel);
      const isAdmin = window.isAdmin;

    if (isAdmin && (challengeSlide && currentSlide === challengeSlide)) {
        solnBtn.style.display = "block";
    } else {
        solnBtn.style.display = "none";
        solutionOverlay.style.display = "none";
        solutionVisible = false;
    }
}

function endSlide() {
    const container = document.querySelector(".image-center");
    let mediaElement = document.getElementById("slide-media");

    if (!mediaElement || mediaElement.tagName !== "IMG") {
        container.innerHTML = `<img id="slide-media" alt="End slide image">`;
        mediaElement = document.getElementById("slide-media");
    }

    mediaElement.src = "srcs/comm/trophy.png";
    mediaElement.className = "anim-glow-shake";

    let rootStyles = getComputedStyle(document.documentElement);
    let colorBlue = rootStyles.getPropertyValue("--color-blue").trim();

    let textElement = document.getElementById("slide-text");
    textElement.innerHTML = `🎉 Congratulations! 🎉<br>
    You have successfully completed all the steps! 🚀<br>
    Remember to save your project!`;
    textElement.style.color = "white";
    let textContainer = document.querySelector(".info-box");
    textContainer.style.backgroundColor = colorBlue;

    //Challenge solution hide
    if (solnBtn) solnBtn.style.display = "none";
    if (solutionOverlay) solutionOverlay.style.display = "none";
    solutionVisible = false;
}

function nextSlide() {
    if (currentSlide < slides.length) {
        currentSlide++;
        updateSlide();
    } else {
        currentSlide=slides.length+1;
        endSlide();
        endSlideOn=1;
    }
}

function prevSlide() {
    if (currentSlide > 1) {
        currentSlide--;
        if (endSlideOn) {
            endSlideOn=0;
        }
        updateSlide();
    }
}

async function irHome() {
    await registrarAccion("home");
    sessionStorage.setItem("skipWelcome", "1");
    location.href = "index.html#cyberpi";
}

async function accionNext() {
    solutionOverlay.style.display = "none";
    solutionVisible = false;
    await registrarAccion("next");
    nextSlide();
}

async function accionPrev() {
    solutionOverlay.style.display = "none";
    solutionVisible = false;
    await registrarAccion("previous");
    prevSlide();
}

document.addEventListener("DOMContentLoaded", function () {
    const nivel = getNivelFromURL();
    const title = activityTitles[nivel] || `Not available`;
    document.title = title;
    loadSlidesScript(nivel);
});

// Challenge solution
const solutionImages = {
    1: "srcs/cyberpi/challenges/ch_cpi_1.png",
    2: "srcs/cyberpi/challenges/ch_cpi_2.png",
    3: "srcs/cyberpi/challenges/ch_cpi_3.png",
    4: "srcs/cyberpi/challenges/ch_cpi_4.png",
    5: "srcs/cyberpi/challenges/ch_cpi_5.png",
    6: "srcs/cyberpi/challenges/ch_cpi_6.png",
    7: "srcs/cyberpi/challenges/ch_cpi_7.png",
    8: "srcs/cyberpi/challenges/ch_cpi_8.png"
};

const solnBtn = document.getElementById("solnBtn");
const solutionOverlay = document.getElementById("solutionOverlay");
const solutionImage = document.getElementById("solutionImage");

let solutionVisible = false;

solnBtn.addEventListener("click", async () => {
  solutionVisible = !solutionVisible;

  if (solutionVisible) {
    try {
        await registrarAccion("solution");
    } catch (e) {
        console.warn("No se pudo registrar 'solution':", e);
    }
    
    const imgPath = solutionImages[currentLevel];

    if (imgPath) {
        solutionImage.src = imgPath;
        }
        solutionOverlay.style.display = "flex";
    } else {
        solutionOverlay.style.display = "none";
    }
});

solutionOverlay.addEventListener("click", () => {
  solutionOverlay.style.display = "none";
  solutionVisible = false;
});