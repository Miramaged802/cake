// Set the target date to April 18th at midnight
const targetDate = new Date("2025-04-18T00:00:00");
const birthdayAudio = document.getElementById("birthday-audio");
const countdownElement = document.getElementById("countdown");
const celebrationElement = document.getElementById("birthday-celebration");

// Initialize display
function initializeDisplay() {
  countdownElement.classList.remove("hidden");
  countdownElement.style.display = "block";
  celebrationElement.classList.add("hidden");
  celebrationElement.style.display = "none";
}

function updateCountdown() {
  const now = new Date();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    // It's birthday time!
    countdownElement.classList.add("hidden");
    countdownElement.style.display = "none";
    celebrationElement.classList.remove("hidden");
    celebrationElement.style.display = "block";

    // Play birthday audio
    try {
      birthdayAudio.play();
    } catch (error) {
      console.log("Audio playback failed:", error);
    }

    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");

  // Update the Arabic text with the days count
  document.getElementById("days-text").textContent = days;
}

// Initialize the display when the page loads
document.addEventListener("DOMContentLoaded", () => {
  initializeDisplay();
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
