document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#hero", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#hero",
      start: "top center",
    },
  });

  gsap.from(".project-card", {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#portfolio",
      start: "top center",
    },
  });

  gsap.from(".timeline-item", {
    duration: 1,
    opacity: 0,
    x: -50,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".timeline",
      start: "top center",
    },
  });

  gsap.from(".service-card", {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".service-card",
      start: "top center",
    },
  });

  gsap.from(".testimonial-card", {
    duration: 1,
    opacity: 0,
    scale: 0.8,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".testimonial-card",
      start: "top center",
    },
  });

  gsap.to(".hero-img img", {
    rotateY: 10, // Adjust rotation angle
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".hero-img img",
      start: "top bottom",
      end: "bottom top",
      scrub: 1, // Makes it smooth
    },
  });
});
