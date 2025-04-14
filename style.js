function openCard() {
  document.getElementById("envelope").style.display = "none";
  document.getElementById("card").style.display = "block";
}

function showMessage() {
  document.getElementById("hiddenMessage").style.display = "block";
  for (let i = 0; i < 30; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = Math.random() * 100 + "%";
    heart.style.animation = "pulse 1s ease-out";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  }
}
