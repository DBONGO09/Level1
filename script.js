var bird = document.getElementById("bird");
var paper = document.getElementById("paper");
var doll = document.getElementById("doll");
var nomb = document.getElementById("nomb");
var code = document.getElementById("code");
var beep1 = document.getElementById("beep1");
var unlock = document.getElementById("unlock");
var fight = document.getElementById("fight");

//

var c1 = document.getElementById("one");
var c2 = document.getElementById("two");
var c3 = document.getElementById("three");
var c4 = document.getElementById("four");

x = 0;
y = 0;
z = 0;
f = 0;

var img = document.getElementById("one");
function firstnumber() {
  if (x == 0) {
    img.src = "Images/zero1.png";
  } else if (x == 1) {
    img.src = "Images/one1.png";
  } else if (x == 2) {
    img.src = "Images/two1.png";
  } else if (x == 3) {
    img.src = "Images/three1.png";
  } else if (x == 4) {
    img.src = "Images/four1.png";
  } else if (x == 5) {
    img.src = "Images/five1.png";
  }

  // move to next image, and reset after 5
  x = (x + 1) % 6;
  beep1.play();
  unlockLock();
}

var img2 = document.getElementById("two");
function secondnumber() {
  if (x == 0) {
    img2.src = "Images/zero1.png";
  } else if (x == 1) {
    img2.src = "Images/one1.png";
  } else if (x == 2) {
    img2.src = "Images/two1.png";
  } else if (x == 3) {
    img2.src = "Images/three1.png";
  } else if (x == 4) {
    img2.src = "Images/four1.png";
  } else if (x == 5) {
    img2.src = "Images/five1.png";
  }

  // move to next image, and reset after 5
  x = (x + 1) % 6;
  beep1.play();
  unlockLock();
}

var img3 = document.getElementById("three");
function thirdnumber() {
  if (x == 0) {
    img3.src = "Images/zero1.png";
    img3.classList.remove("decimal-img");
  } else if (x == 1) {
    img3.src = "Images/one1.png";
    img3.classList.remove("decimal-img");
  } else if (x == 2) {
    img3.src = "Images/two1.png";
    img3.classList.remove("decimal-img");
  } else if (x == 3) {
    img3.src = "Images/three1.png";
    img3.classList.remove("decimal-img");
  } else if (x == 4) {
    img3.src = "Images/four1.png";
    img3.classList.remove("decimal-img");
  } else if (x == 5) {
    img3.src = "Images/five1.png";
    img3.classList.remove("decimal-img");
  } else if (x == 6) {
    showDecimalHint();
    img3.src = "Images/decimal.png";
    img3.classList.add("decimal-img");
  }

  // move to next image, and reset after 5
  x = (x + 1) % 7;
  beep1.play();
  unlockLock();
}

var img4 = document.getElementById("four");
function fourthnumber() {
  if (x == 0) {
    img4.src = "Images/zero1.png";
  } else if (x == 1) {
    img4.src = "Images/one1.png";
  } else if (x == 2) {
    img4.src = "Images/two1.png";
  } else if (x == 3) {
    img4.src = "Images/three1.png";
  } else if (x == 4) {
    img4.src = "Images/four1.png";
  } else if (x == 5) {
    img4.src = "Images/five1.png";
  }

  // move to next image, and reset after 5
  x = (x + 1) % 6;
  beep1.play();
  unlockLock();
}

function showModal1() {
  document.getElementById("myModal").style.display = "flex";
  paper.play();
}

function showModal2() {
  document.getElementById("myModal2").style.display = "flex";
  bird.play();
}

function showModal3() {
  document.getElementById("myModal3").style.display = "flex";
  doll.play();
}

function showModal4() {
  document.getElementById("myModal4").style.display = "flex";
  document.getElementById("nomb").play();
}

function showModal5() {
  document.getElementById("myModal5").style.display = "flex";
  code.play();
}

function hideModal() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("myModal2").style.display = "none";
  document.getElementById("myModal3").style.display = "none";
  document.getElementById("myModal4").style.display = "none";
  document.getElementById("myModal5").style.display = "none";
}

function nextEscapeRoomPage() {
  window.location.href = "https://giannaortiz.github.io/ESCAPETHEGRAVEFINAL/";
}

function unlockLock() {
  if (
    img.src.match("zero1") &&
    img2.src.match("five") &&
    img3.src.match("decimal") &&
    img4.src.match("zero")
  ) {
    const music = document.getElementById("bgMusic");
    music.pause();
    music.currentTime = 0; // optional: reset to start
    unlock.play();

    // fade to black NOW
    document.getElementById("blackout").style.opacity = "1";

    // disable clicking
    img.onclick = null;
    img2.onclick = null;
    img3.onclick = null;
    img4.onclick = null;
    document.getElementById("one").classList.add("disabled", "translucent");
    document.getElementById("two").classList.add("disabled", "translucent");
    document.getElementById("three").classList.add("disabled", "translucent");
    document.getElementById("four").classList.add("disabled", "translucent");

    // wait 2s → play fight sound
    setTimeout(() => {
      fight.play();
    }, 2000);

    // wait 4s → THEN go to next website
    setTimeout(() => {
      nextEscapeRoomPage();
    }, 5000);
  }
}

let hintTimeout = null;

function showDecimalHint() {
  const hint = document.getElementById("decimalHint");

  // Show the hint
  hint.classList.add("show");

  // Clear any previous timer so the 5s resets correctly
  clearTimeout(hintTimeout);

  // Hide after 5 seconds
  hintTimeout = setTimeout(() => {
    hint.classList.remove("show");
  }, 5000);
}

window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  if (!music) {
    console.log("No element with id='bgMusic' found");
    return;
  }

  music.volume = 0.6; // adjust volume (0 to 1)

  // Start music on first user interaction
  const startMusic = () => {
    music
      .play()
      .then(() => {
        console.log("Background music playing");
      })
      .catch((err) => {
        console.log("Play failed:", err);
      });

    // Only need this once
    document.removeEventListener("click", startMusic);
    document.removeEventListener("keydown", startMusic);
  };

  document.addEventListener("click", startMusic);
  document.addEventListener("keydown", startMusic);
});

