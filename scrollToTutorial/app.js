document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  animation: gsap.from(".logo", {
    y: "50vh",
    scale: 6,
    yPercent: -50
  }),
  scrub: true,
  trigger: ".content",
  start: "top bottom",
  endTrigger: ".content",
  end: "top center"
})

ScrollTrigger.create({
  animation: gsap.from(".landing-description", {
    y: "50vh",
    opacity: 1,
    yPercent: -50
  }),
  scrub: true,
  trigger: ".content",
  start: "top bottom",
  endTrigger: ".content",
  end: "top center"
})

});
