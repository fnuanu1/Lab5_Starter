// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const hornSelect = document.getElementById("horn-select");
  const img = document.querySelector("img[alt='No image selected']");
  const audio = document.querySelector("audio");
  const volumeSlider = document.getElementById("volume");
  const volumePic = document.querySelector("img[alt='Volume level 2']");
  const button = document.querySelector("button");
  const confetti = new JSConfetti();

  hornSelect.addEventListener("change", (event) => {
    const selected = event.target.value;
    switch (selected) {
      case "air-horn":
        img.src = "assets/images/air-horn.svg";
        audio.src = "assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        img.src = "assets/images/car-horn.svg";
        audio.src = "assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        img.src = "assets/images/party-horn.svg";
        audio.src = "assets/audio/party-horn.mp3";
        break;
    }
  });

  volumeSlider.addEventListener("input", () => {
    const volume = volumeSlider.value;
    audio.volume = volume / 100;

    // Update volume picture thing
    if (volume == 0) {
      volumePic.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 33) {
      volumePic.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 67) {
      volumePic.src = "assets/icons/volume-level-2.svg";
    } else {
      volumePic.src = "assets/icons/volume-level-3.svg";
    }
  });

  button.addEventListener("click", () => {
    if (audio.src) {
      audio.play();
      if (hornSelect.value === "party-horn") {
        confetti.addConfetti();
      }
    }
  });
}
