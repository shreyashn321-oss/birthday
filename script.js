const opening =
  document.getElementById("opening");

const openBtn =
  document.getElementById("openBtn");

const cardWrap =
  document.getElementById("cardWrap");

const replay =
  document.getElementById("replay");

const bubbles =
  document.getElementById("bubbles");

const sparkles =
  document.getElementById("sparkles");

const petals =
  document.getElementById("petals");


/* BUBBLES */

function createBubbles() {

  bubbles.innerHTML = "";

  const count =
    window.innerWidth < 500 ? 10 : 18;

  for (let i = 0; i < count; i++) {

    const bubble =
      document.createElement("span");

    bubble.className =
      "bubble";

    const size =
      8 + Math.random() * 24;

    bubble.style.width =
      size + "px";

    bubble.style.height =
      size + "px";

    bubble.style.left =
      Math.random() * 100 + "%";

    bubble.style.animationDuration =
      8 + Math.random() * 9 + "s";

    bubble.style.animationDelay =
      Math.random() * 8 + "s";

    bubbles.appendChild(bubble);
  }
}


/* SPARKLES */

function createSparkles() {

  sparkles.innerHTML = "";

  const count =
    window.innerWidth < 500 ? 18 : 30;

  for (let i = 0; i < count; i++) {

    const sparkle =
      document.createElement("span");

    sparkle.className =
      "sparkle";

    sparkle.textContent =
      Math.random() > .5
        ? "✦"
        : "✧";

    sparkle.style.left =
      Math.random() * 100 + "%";

    sparkle.style.top =
      Math.random() * 100 + "%";

    sparkle.style.animationDelay =
      Math.random() * 5 + "s";

    sparkle.style.animationDuration =
      2 + Math.random() * 4 + "s";

    sparkles.appendChild(sparkle);
  }
}


/* PETALS */

function createPetals() {

  petals.innerHTML = "";

  const count =
    window.innerWidth < 500 ? 7 : 12;

  for (let i = 0; i < count; i++) {

    const petal =
      document.createElement("span");

    petal.className =
      "petal";

    petal.style.left =
      Math.random() * 100 + "%";

    petal.style.animationDuration =
      8 + Math.random() * 8 + "s";

    petal.style.animationDelay =
      Math.random() * 8 + "s";

    petals.appendChild(petal);
  }
}


/* OPEN */

function openBirthday() {

  opening.classList.add("hide");

  setTimeout(() => {

    cardWrap.classList.add("show");

    createPetals();

  }, 650);

  setTimeout(() => {

    replay.classList.add("show");

  }, 2200);
}


/* REPLAY */

function replayBirthday() {

  cardWrap.classList.remove("show");

  replay.classList.remove("show");

  petals.innerHTML = "";

  setTimeout(() => {

    opening.classList.remove("hide");

  }, 800);
}


/* EVENTS */

openBtn.addEventListener(
  "click",
  openBirthday
);

replay.addEventListener(
  "click",
  replayBirthday
);


/* INITIAL */

createBubbles();
createSparkles();


/* RESIZE */

window.addEventListener(
  "resize",
  () => {

    createBubbles();
    createSparkles();

  }
);


/* MOUSE PARALLAX */

if (window.innerWidth > 700) {

  document.addEventListener(
    "mousemove",
    (event) => {

      const card =
        document.querySelector(".main-card");

      if (!card) return;

      const x =
        (event.clientX /
          window.innerWidth -
          0.5) * 8;

      const y =
        (event.clientY /
          window.innerHeight -
          0.5) * 8;

      card.style.transform =
        `perspective(1000px)
         rotateY(${x}deg)
         rotateX(${-y}deg)`;

    }
  );

}