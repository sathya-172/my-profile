document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // LOGO SCROLL TRACK
  const track = document.querySelector(".logo-track");
  if (track) {
    const logos = Array.from(track.children);
    logos.forEach((logo) => {
      const clone = logo.cloneNode(true);
      track.appendChild(clone);
    });

    gsap.to(track, {
      xPercent: -50, // Moves the track left continuously
      duration: 15, // Adjust speed
      ease: "linear",
      repeat: -1, // Infinite loop
      modifiers: {
        xPercent: gsap.utils.wrap(-50, 0), // Ensures seamless loop
      },
    });
  }

  // AMOUNT COUNTER ANIMATION
  let counterElement = document.getElementById("counter");
  if (counterElement) {
    let counter = { value: 0 };
    let targetValue = 98762;

    gsap.to(counter, {
      value: targetValue,
      duration: 3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#savings-section",
        start: "bottom -300%",
        once: true,
      },
      onUpdate: function () {
        counterElement.textContent = `$ ${Math.floor(counter.value)}`;
      },
    });
  }

  // FEATURE TRACK ANIMATION
  let featureTrack = document.querySelector(".feature-track");
  if (featureTrack) {
    let features = document.querySelectorAll(".feature");
    let numCards = features.length;
    let cardWidth = features[0]?.offsetWidth || 0;
    let viewportWidth = window.innerWidth;

    gsap.to(featureTrack, {
      x: () => `-2200px`,
      ease: "none",
      scrollTrigger: {
        trigger: ".feature-section",
        start: "top top",
        end: () => `+=${2200 + viewportWidth / 2}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
  }

  // CARD TRANSITION EFFECT (FADE-IN)
  if (document.querySelector(".fade-in")) {
    gsap.utils.toArray(".fade-in").forEach((element, index) => {
      gsap.from(element, {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        y: index % 2 === 0 ? 0 : 40,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
  }

  // TEXT CHANGING ANIMATION
  const textElement = document.getElementById("changing-text");
  if (textElement) {
    const words = [
      "Management.",
      "Efficiency.",
      "Innovation.",
      "Transformation.",
    ];
    let index = 0;

    function changeText() {
      textElement.style.animation = "none";
      setTimeout(() => {
        textElement.textContent = words[index];
        textElement.style.animation = "pop-up 0.5s ease-out";
        index = (index + 1) % words.length;
      }, 50);
    }

    setInterval(changeText, 2000);
  }
});
